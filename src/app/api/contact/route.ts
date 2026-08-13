import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory IP rate limiter (Max 3 submissions per IP per 10 minutes)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const limit = 3;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json();
    const { name, email, phone, company, service, budget, details } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const messageContent = details || '';
    if (!messageContent || typeof messageContent !== 'string' || messageContent.trim().length === 0) {
      return NextResponse.json({ error: 'Project details/message are required.' }, { status: 400 });
    }

    if (messageContent.length > 5000) {
      return NextResponse.json({ error: 'Message exceeds maximum length of 5000 characters.' }, { status: 400 });
    }

    // 3. Initialize Resend
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || 'mvfrwd. Contact Form <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('[API ERROR] RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error('[API ERROR] CONTACT_EMAIL is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const timestamp = new Date().toISOString();

    // 4. Construct Clean HTML Email
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #080808; color: #F7F7F2; padding: 32px; border-radius: 16px; border: 1px solid rgba(247, 247, 242, 0.1);">
        <div style="border-bottom: 1px solid rgba(247, 247, 242, 0.1); padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #FF4B2B; font-size: 20px; font-weight: 800; margin: 0; letter-spacing: 2px;">MVFRWD.</h2>
          <p style="color: #8A8A8A; font-size: 12px; margin-top: 4px; font-family: monospace;">NEW PROJECT INQUIRY // ${timestamp}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace; width: 120px;">NAME:</td>
            <td style="padding: 8px 0; color: #F7F7F2; font-size: 14px; font-weight: 600;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace;">EMAIL:</td>
            <td style="padding: 8px 0; color: #FF4B2B; font-size: 14px; font-weight: 600;">${email.trim()}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace;">PHONE:</td>
            <td style="padding: 8px 0; color: #F7F7F2; font-size: 14px;">${phone.trim()}</td>
          </tr>` : ''}
          ${company ? `
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace;">COMPANY:</td>
            <td style="padding: 8px 0; color: #F7F7F2; font-size: 14px;">${company.trim()}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace;">SERVICE:</td>
            <td style="padding: 8px 0; color: #F7F7F2; font-size: 14px;">${service || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #8A8A8A; font-size: 12px; font-family: monospace;">BUDGET:</td>
            <td style="padding: 8px 0; color: #F7F7F2; font-size: 14px;">${budget || 'Not specified'}</td>
          </tr>
        </table>

        <div style="background-color: #111111; padding: 20px; border-radius: 12px; border: 1px solid rgba(247, 247, 242, 0.05); margin-bottom: 24px;">
          <p style="color: #8A8A8A; font-size: 11px; font-family: monospace; margin: 0 0 8px 0;">PROJECT DETAILS:</p>
          <p style="color: #F7F7F2; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${messageContent.trim()}</p>
        </div>

        <div style="border-top: 1px solid rgba(247, 247, 242, 0.1); padding-top: 16px; text-align: center;">
          <p style="color: #8A8A8A; font-size: 11px; font-family: monospace; margin: 0;">This inquiry was submitted through the mvfrwd. website.</p>
        </div>
      </div>
    `;

    // 5. Send Email via Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: email.trim(),
      subject: `New Project Inquiry — ${name.trim()} (${service || 'mvfrwd.'})`,
      html: htmlBody,
    });

    if (data.error) {
      console.error('[RESEND API ERROR]', data.error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error('[CONTACT ROUTE UNHANDLED ERROR]', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}