import { verifyEmailHunter } from "./hunter";

interface NewsletterResponse {
  success: boolean;
  message: string;
}

const ERROR_MESSAGES = {
  INVALID_EMAIL: "Please enter a valid email address",
  DISPOSABLE_EMAIL: "Please use a permanent email address instead of a temporary one",
  INVALID_DOMAIN: "The email domain appears to be invalid",
  SERVER_ERROR: "Unable to process your subscription at the moment. Please try again later",
  NETWORK_ERROR: "Network connection issue. Please check your internet connection and try again",
  UNKNOWN_ERROR: "Something went wrong. Please try again later"
};

export const subscribeToNewsletter = async (email: string): Promise<NewsletterResponse> => {
  try {
    // First verify the email
    const verification = await verifyEmailHunter(email);
    
    if (!verification.result) {
      let errorMessage = ERROR_MESSAGES.INVALID_EMAIL;
      
      if (verification.reason?.toLowerCase().includes('disposable')) {
        errorMessage = ERROR_MESSAGES.DISPOSABLE_EMAIL;
      } else if (verification.reason?.toLowerCase().includes('domain')) {
        errorMessage = ERROR_MESSAGES.INVALID_DOMAIN;
      }
      
      return {
        success: false,
        message: `❌ ${errorMessage}`
      };
    }

    // If email is valid, submit to Formspree
    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', 'New Newsletter Subscription');
    formData.append('_template', 'table');
    formData.append('_autoresponse', 'Thank you for subscribing to our newsletter!');

    const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_NEWSLETTER_FORM_ID}`, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Subscription failed');
    }

    return {
      success: true,
      message: "✅ You are in, thanks for Subscribing We will keep you updated with the latest updates."
    };
  } catch (error) {
    console.error("Subscription failed:", error);
    
    let errorMessage = ERROR_MESSAGES.UNKNOWN_ERROR;
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = ERROR_MESSAGES.NETWORK_ERROR;
    } else if (error instanceof Error && error.message.includes('Subscription failed')) {
      errorMessage = ERROR_MESSAGES.SERVER_ERROR;
    }
    
    return {
      success: false,
      message: `❌ ${errorMessage}`
    };
  }
}; 