import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Extract form data
    const formData = await request.formData();
    const email = formData.get('email');
    const subject = formData.get('subject');
    const html = formData.get('html');

    // Prepare the query parameters
    const queryParams = new URLSearchParams({
      to: email,
      subject: subject,
      html_body: html,
    }).toString();

    // Send request to Flask server
    const response = await fetch(`https://abisoivc.pythonanywhere.com/send_email?${queryParams}`, {
      method: 'GET',
    });

    // Handle the response from Flask server
    const data = await response.json();
    if (response.ok) {
      return NextResponse.json({ message: 'Email sent successfully', ...data });
    } else {
      throw new Error(data.message || 'Failed to send email');
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
