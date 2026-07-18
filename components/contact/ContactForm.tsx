"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thanks — we'll be in touch shortly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please email us directly.");
    }
  }

  const field =
    "w-full rounded-md border border-navy/15 bg-white/60 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-teal focus:ring-1 focus:ring-teal";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/50">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/50">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/50">
          Company
        </span>
        <input
          name="company"
          autoComplete="organization"
          className={field}
          placeholder="Organization"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-navy/50">
          How can we help?
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us about the problem you're solving..."
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" className={status === "loading" ? "opacity-70" : ""}>
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        {message && (
          <p
            className={`text-sm ${status === "success" ? "text-teal-dark" : "text-red-700"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
