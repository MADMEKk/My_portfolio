const { Resend } = require('resend');

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain in production
      to: [process.env.RECIPIENT_EMAIL || 'aeddine360@gmail.com'],
      subject: `${subject} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name} at ${email}</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Email sent successfully', id: data.id });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email', 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}; 