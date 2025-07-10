import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaModal = ({ onVerified }) => {
  const [verifying, setVerifying] = useState(false);

  const handleChange = async (token) => {
    setVerifying(true);
    const apiBase = import.meta.env.VITE_API_BASE_URL;
    // Send token to backend for verification
    const res = await fetch(`${apiBase}/api/verify-recaptcha`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    setVerifying(false);
    if (data.success) onVerified();
    else alert("Verification failed. Please try again.");
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div style={{
        background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: 400, minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {verifying ? (
          <h2>Verifying that you are not a robot...</h2>
        ) : (
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Replace with your actual site key
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default RecaptchaModal;