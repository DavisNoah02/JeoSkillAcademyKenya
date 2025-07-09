import type { NextApiRequest, NextApiResponse } from 'next';

interface SubmissionResult {
  success: boolean;
  message?: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FRONTEND_URL: string;
      NEXT_PUBLIC_FORMSPREE_URL: string;
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionResult>
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      location,
      interest,
      github,
      consent
    } = req.body as {
      name: string;
      email: string;
      phone?: string;
      location?: string;
      interest: string;
      github?: string;
      consent?: string;
    };

    // Validate required fields
    if (!name || !email || !interest) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, or interest.'
      });
    }

    const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    const formspreeResponse = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: name,
        email,
        phone,
        location,
        learningInterest: interest,
        githubProfile: github,
        consent
      })
    });

    if (!formspreeResponse.ok) {
      const errorText = await formspreeResponse.text();
      console.error('Formspree submission failed:', errorText);
      return res.status(500).json({
        success: false,
        message: 'Failed to submit form. Please try again later.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully!'
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
