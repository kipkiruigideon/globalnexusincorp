import nodemailer from 'nodemailer';

// Generates a 6-digit numeric verification code.
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Sends a verification code email.
 * If SMTP env vars are not configured, the code is logged to the server console
 * (retrievable from your host's logs) so the flow still works during setup.
 *
 * Configure real delivery with:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
 */
export async function sendVerificationEmail(
  to: string,
  code: string,
  name: string
): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass) {
    console.log(`[verification] Code for ${to}: ${code} (SMTP not configured)`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const html = `
  <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; background:#0f172a; color:#e2e8f0; border-radius:16px;">
    <h2 style="color:#0ea5e9; margin-bottom: 8px;">Global Nexus Inc</h2>
    <p>Hi ${name || 'there'},</p>
    <p>Use the verification code below to confirm your email address:</p>
    <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color:#ffffff; background:#1e293b; padding:16px; text-align:center; border-radius:12px; margin: 16px 0;">
      ${code}
    </div>
    <p style="color:#94a3b8; font-size: 13px;">This code expires in 60 minutes. If you didn't request it, you can safely ignore this email.</p>
  </div>`;

  await transporter.sendMail({
    from,
    to,
    subject: 'Your Global Nexus Inc verification code',
    text: `Your verification code is ${code}. It expires in 60 minutes.`,
    html,
  });
}
