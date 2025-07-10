// pages/api/verify-recaptcha.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //  Handle CORS
  const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
  // Remove trailing slash if present
  const normalizedOrigin = allowedOrigin.replace(/\/$/, '');
  res.setHeader('Access-Control-Allow-Origin', normalizedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  //  Handle preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  //  Block other methods
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  //  Continue with reCAPTCHA verification
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: 'POST' }
    );
    const data = await response.json();
    console.log(data); // Good for debugging

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, message: 'reCAPTCHA failed' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error', error });
  }
}
