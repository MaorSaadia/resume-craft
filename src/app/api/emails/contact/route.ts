import React from "react";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import { mailOptions, transporter } from "@/app/config/nodemailer";
import ContactEmail from "@/emails/ContactEmail";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  const { name, email, subject, message }: ContactFormData =
    await request.json();

  // console.log("Contact form data received:");
  // console.log(name, email, subject, message);

  try {
    const emailHtml = await render(
      React.createElement(ContactEmail, {
        name,
        email,
        subject,
        message,
      }),
    );

    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Message: ${subject}`,
      html: emailHtml,
      replyTo: email,
      // cc: email, // Send a copy to the customer
    });

    return NextResponse.json(
      { message: "Contact form email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json(
      { error: "Failed to send contact form email" },
      { status: 500 },
    );
  }
}
