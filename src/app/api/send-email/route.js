import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const username = process.env.SMTP_USER;
    const password = process.env.SMTP_PASS;
    const myEmail = process.env.SMTP_EMAIL;

    // Extract form data
    const formData = await request.formData();
    const name = "Jimuel Flojera";
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

    // Send email function
    const sendMail = async (mailOptions) => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return reject(error);
          }
          resolve(info);
        });
      });
    };

    // Mail options
    const mailOptions = {
      from: `"${name}" <${myEmail}>`,
      to: email,
      subject: subject,
      html: html
    };

    // Send email
    await sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
