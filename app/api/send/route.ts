import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'nugrahsyawal@gmail.com'; // Confirmed Project Owner email

export async function POST(request: Request) {
 try {
 const { name, email, message } = await request.json();

 if (!name || !email || !message) {
 return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
 }

 const { data, error } = await resend.emails.send({
 from: 'Portfolio Contact <onboarding@resend.dev>', // Resend test domain
 to: [toEmail],
 subject: `New Message from Portfolio - ${name}`,
 reply_to: email,
 html: `<p>You have a new message from <strong>${name}</strong> (${email}):</p><blockquote>${message}</blockquote>`,
 });

 if (error) {
 return NextResponse.json({ error: error.message }, { status: 500 });
 }

 return NextResponse.json({ success: true, data }, { status: 200 });
 } catch (exception) {
 return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
 }
}