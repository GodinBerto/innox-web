import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  const firstName = body.firstName?.trim() ?? '';
  const lastName = body.lastName?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in all required fields.' },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === 'true';
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
  const innorikEmail = process.env.CONTACT_TO_EMAIL ?? 'info@innorik.com';

  if (!smtpHost || !smtpUser || !smtpPass || !fromEmail) {
    return NextResponse.json(
      { error: 'Email service is not configured on this server.' },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const fullName = `${firstName} ${lastName}`;
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: innorikEmail,
      replyTo: email,
      subject: `New contact form message from ${fullName}`,
      text: `New message from ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}`,
      html: `<p><strong>New contact form message</strong></p>
<p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
<p><strong>Message:</strong><br/>${safeMessage}</p>`,
    });

    //     await transporter.sendMail({
    //       from: fromEmail,
    //       to: email,
    //       subject: 'Copy of your message to Innorik',
    //       text: `Hi ${fullName},

    // Thank you for contacting Innorik. This is a copy of the message you sent us:

    // ${message}

    // Our customer service team will get back to you soon.`,
    //       html: `<p>Hi ${escapeHtml(fullName)},</p>
    // <p>Thank you for contacting Innorik. This is a copy of the message you sent us:</p>
    // <blockquote>${safeMessage}</blockquote>
    // <p>Our customer service team will get back to you soon.</p>`,
    //     });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          'Unable to send your message right now. Please try again.' +
          ` (${error instanceof Error ? error.message : 'Unknown error'})`,
      },
      { status: 500 },
    );
  }
}
