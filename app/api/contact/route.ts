import { NextResponse } from "next/server";
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

  // Placeholder: log for now. Wire to Resend / SMTP via env later.
  console.info("[contact]", {
    to: site.email,
    name,
    email,
    company,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
