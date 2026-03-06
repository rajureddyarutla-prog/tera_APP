import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, organisation, type, message } = await req.json();

        // Validate inputs
        if (!name || !email || !organisation || !type || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Configure SMTP Transporter
        // Note: In production, use environment variables for these values
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (often needs to be the authenticated user)
            replyTo: email, // Reply-to address (the customer's email)
            to: process.env.CONTACT_RECEIVER_EMAIL || 'rajureddy.arutla@terastarnetworks.com', // Receiver address
            subject: `New Enquiry: ${type} from ${organisation}`,
            text: `
        New enquiry from Mattera Life Systems website:
        
        Name: ${name}
        Email: ${email}
        Organisation: ${organisation}
        Type: ${type}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4FD1C5;">New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organisation:</strong> ${organisation}</p>
          <p><strong>Type:</strong> ${type}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Enquiry sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send enquiry. Please try again later.' },
            { status: 500 }
        );
    }
}
