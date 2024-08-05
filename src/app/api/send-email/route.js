import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const username = process.env.SMTP_USER;
    const password = process.env.SMTP_PASS;
    const myEmail = process.env.SMTP_EMAIL;

    // Extract form data
    const formData = await request.formData();
    const name = "Jimuel Flojera"
    const email = formData.get('email');
    const subject = formData.get('subject');
    const html = formData.get('html');

    // Set up the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: username,
        pass: password
      },
    });

    // Send email
    const mailOptions = {
      from: `"${name}" <${myEmail}>`,
      to: email,
      subject: subject,
      html: html
    };

    await transporter.sendMail(mailOptions);

    // Return a success response
    return {};

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
