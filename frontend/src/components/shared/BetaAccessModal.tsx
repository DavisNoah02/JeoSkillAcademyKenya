import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { submitForm } from "@/services/formspree";
import { verifyEmailHunter } from "@/services/hunter";

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  github: string;
  consent: boolean;
  botField: string;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function BetaAccessModal({ isOpen, onClose }: BetaAccessModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    github: "",
    consent: false,
    botField: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [emailVerifying, setEmailVerifying] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Basic email format validation
  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate individual fields
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        if (!value) {
          return 'Email is required';
        }
        if (!isValidEmailFormat(value)) {
          return 'Please enter a valid email format';
        }
        break;
      case 'interest':
        if (!value) {
          return 'Please select your area of interest';
        }
        break;
      case 'consent':
        if (!value) {
          return 'You must agree to the terms to continue';
        }
        break;
      case 'github':
        if (value && !value.startsWith('https://github.com/')) {
          return 'Please enter a valid GitHub URL';
        }
        break;
      default:
        break;
    }
    return '';
  };

  // Validate all required fields
  const validateForm = (): ValidationErrors => {
    const newErrors: ValidationErrors = {};
    
    // Check required fields
    const requiredFields = ['name', 'email', 'interest', 'consent'];
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field] = error;
      }
    });

    // Validate optional fields if they have values
    if (formData.github) {
      const githubError = validateField('github', formData.github);
      if (githubError) {
        newErrors.github = githubError;
      }
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" && "checked" in e.target ? (e.target as HTMLInputElement).checked : undefined;
    
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Special handling for email field to debounce verification
    if (name === 'email') {
      setEmailVerified(false); // Reset verified state immediately on input
      setEmailVerifying(false); // Clear verifying state
      
      // Clear any existing debounce timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    }
  };

  // Effect to debounce email verification
  useEffect(() => {
    if (formData.email && touched.email) { // Only debounce if email has a value and has been touched
      // Validate format immediately. If invalid, show error and don't debounce.
      if (!isValidEmailFormat(formData.email)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email format'
        }));
        setEmailVerified(false);
        setEmailVerifying(false);
        return; // Don't proceed with verification for invalid format
      } else {
        // Clear format error if it was previously set
        if (errors.email === 'Please enter a valid email format') {
          setErrors(prev => ({ ...prev, email: '' }));
        }
      }

      setEmailVerifying(true); // Indicate that verification is pending/about to start
      setEmailVerified(false); // Reset to unverified

      // Set a new debounce timeout
      debounceTimeoutRef.current = setTimeout(() => {
        handleEmailVerification();
      }, 500); // Debounce for 500ms
    } else if (!formData.email && touched.email) {
      // If email field is cleared after being touched, clear all email-related states and errors
      setErrors(prev => ({ ...prev, email: '' }));
      setEmailVerifying(false);
      setEmailVerified(false);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    }

    // Cleanup function for the effect
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [formData.email, touched.email]); // Re-run effect when email changes or touched state changes

  // Renamed from handleEmailBlur to handleEmailVerification for clarity
  const handleEmailVerification = async () => {
    // This check is already done in useEffect, but good to keep as a safeguard
    if (!formData.email || !isValidEmailFormat(formData.email)) {
      setEmailVerified(false);
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address (e.g., name@domain.com)'
      }));
      setEmailVerifying(false); // Ensure verifying state is off
      return;
    }

    setEmailVerifying(true);
    setEmailVerified(false); // Reset verification status
    
    try {
      const verification = await verifyEmailHunter(formData.email);
      
      if (!verification.result) {
        let errorMessage = 'Unable to verify your email. ';
        
        // Add specific guidance based on the reason
        switch (verification.reason) {
          case 'disposable_email':
            errorMessage = 'Sorry, temporary email addresses are not accepted. Please use your permanent email address.';
            break;
          case 'undeliverable':
            errorMessage = 'This email address cannot receive messages. Please use a different email address.';
            break;
          case 'no_mx_records':
            errorMessage = 'This email domain does not exist. Please check your email address.';
            break;
          case 'no_smtp_server':
            errorMessage = 'Unable to verify this email address. Please use a different email provider.';
            break;
          case 'blocked_email':
            errorMessage = 'This email address has been blocked. Please use a different email address.';
            break;
          case 'gibberish_email':
            errorMessage = 'This email address appears to be invalid. Please check and try again.';
            break;
          case 'risky':
            errorMessage = 'This email address appears to be risky. Please use a different email address.';
            break;
          case 'network_error':
            errorMessage = 'Unable to verify your email. Please check your internet connection and try again.';
            break;
          case 'api_error_429':
            errorMessage = 'Too many verification attempts. Please wait a moment and try again.';
            break;
          default:
            errorMessage = 'Unable to verify your email. Please try again or use a different email address.';
        }

        setErrors(prev => ({
          ...prev,
          email: errorMessage
        }));
        setEmailVerified(false);
      } else {
        setErrors(prev => ({ ...prev, email: '' })); // Clear any previous error on success
        setEmailVerified(true);
      }
    } catch (error) {
      console.warn('Email verification service unavailable:', error);
      setErrors(prev => ({ 
        ...prev, 
        email: 'Email verification service is temporarily unavailable. Please try again in a few minutes.' 
      }));
      setEmailVerified(false);
    } finally {
      setEmailVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allFields = Object.keys(formData);
    setTouched(allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    
    // Validate form
    const validationErrors = validateForm();
    
    // Check for bot field
    if (formData.botField) {
      validationErrors.botField = 'Bot detected';
    }

    // Check email verification status
    if (!emailVerified) {
      validationErrors.email = 'Please verify your email address first';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    try {
      const response = await submitForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        interest: formData.interest,
        github: formData.github,
        consent: formData.consent ? "yes" : "no",
      });
      
      setSuccess(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm bg-opacity-50">
      <div className="bg-white border border-green-600 dark:bg-gray-900 rounded-lg p-6 w-full max-w-md shadow-lg relative max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Join Our Beta Program</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Get exclusive early access to cutting-edge learning experiences.</p>
        {success ? (
          
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Thank you for your interest!</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">We've received your application. We'll be in touch soon with updates regarding your access to the Jeo Skill Academy Beta Program.</p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot field */}
            <label className="hidden" htmlFor="botField">
              <input 
                type="text" 
                id="botField"
                name="botField" 
                value={formData.botField}
                aria-hidden="true"
                onChange={handleChange} 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </label>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your full name"
                required
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // Removed onBlur as verification is now debounced
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
                required
              />
              {emailVerifying && (
                <p className="mt-1 text-sm text-blue-600 dark:text-blue-400 flex items-center">
                  <Loader className="h-4 w-4 mr-2 animate-spin" /> Verifying...
                </p>
              )}
              {emailVerified && !emailVerifying && !errors.email && (
                <p className="mt-1 text-sm text-green-600 dark:text-green-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" /> Verified email address
                </p>
              )}
              {touched.email && errors.email && !emailVerifying && ( /* Email format error or Hunter.io error */
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" /> {errors.email}
                </p>
              )}
              {touched.email && !errors.email && !emailVerifying && !emailVerified && formData.email && isValidEmailFormat(formData.email) && (
                <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" /> Email not verified. Please check your email or try again.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="+254 700 000 000"
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
              )}
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">Location (City, Country - Optional)</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, location: true }))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Nairobi, Kenya"
              />
              {touched.location && errors.location && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.location}</p>
              )}
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">
                Primary Learning Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, interest: true }))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Choose your area of interest</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Other">Other</option>
              </select>
              {touched.interest && errors.interest && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.interest}</p>
              )}
            </div>
            <div>
              <label htmlFor="github" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-2 ">GitHub Profile URL (Optional)</label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, github: true }))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="https://github.com/yourusername"
              />
              {touched.github && errors.github && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.github}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                onBlur={() => setTouched(prev => ({ ...prev, consent: true }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-900 dark:text-gray-300 text-left mb-2 ">
                I agree to receive program updates and terms and conditions.
              </label>
            </div>
            {touched.consent && errors.consent && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.consent}</p>
            )}
            {errors.submit && (
              <p className="mt-4 text-sm text-red-600 dark:text-red-400 text-center">
                <AlertCircle className="h-4 w-4 inline mr-1" /> {errors.submit}
              </p>
            )}
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500${
                submitting ? ' opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}