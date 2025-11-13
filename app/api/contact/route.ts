import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // for 465 port secure must be true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Contact form" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: <b>${name}</b> &lt;${email}&gt;</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}