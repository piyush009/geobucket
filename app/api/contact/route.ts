import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { site } from "@/content/site";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildBodies(
  name: string,
  email: string,
  company: string,
  message: string,
) {
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    "",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  return { text, html };
}

function getTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure && port === 587,
    auth: { user, pass },
    tls: {
      // GoDaddy / shared hosts often need this from cloud IPs
      rejectUnauthorized: false,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

async function sendWithResend(opts: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    "GeoBucket <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });

  if (error) {
    throw new Error(`Resend: ${error.message}`);
  }
  return true;
}

async function sendWithSmtp(opts: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const transporter = getTransporter();
  if (!transporter) return false;

  const from =
    process.env.SMTP_FROM?.trim() ||
    `"GeoBucket Website" <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });

  return true;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const message = (body.message || "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 },
    );
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email." },
      { status: 400 },
    );
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { error: "Please share a bit more detail in your message." },
      { status: 400 },
    );
  }

  const to = (process.env.CONTACT_TO || site.email).trim();
  const subject = `GeoBucket contact: ${name}${company ? ` (${company})` : ""}`;
  const { text, html } = buildBodies(name, email, company, message);
  const payload = { to, replyTo: email, subject, text, html };

  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const hasSmtp = Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );

  if (!hasResend && !hasSmtp) {
    console.error(
      "[contact] No mail provider configured. Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS.",
    );
    return NextResponse.json(
      {
        error:
          "Contact form is temporarily unavailable. Please try again later.",
      },
      { status: 503 },
    );
  }

  try {
    if (hasResend) {
      await sendWithResend(payload);
      return NextResponse.json({ ok: true });
    }

    await sendWithSmtp(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[contact] send failed:", detail);

    const authFailed = /535|Invalid login|Authentication Failed|EAUTH/i.test(
      detail,
    );

    if (authFailed) {
      return NextResponse.json(
        {
          error:
            "Email server rejected the login. Update SMTP credentials on the server.",
        },
        { status: 502 },
      );
    }

    if (!hasResend && hasSmtp) {
      console.error(
        "[contact] Tip: GoDaddy SMTP auth often fails from EC2. Prefer RESEND_API_KEY.",
      );
    }

    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
