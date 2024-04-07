import { NextResponse } from "next/server";
import { Resend } from "resend";
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
console.log(fromEmail)

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "claudelpierre00@resend.dev",
      to: [fromEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{email}</p>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}