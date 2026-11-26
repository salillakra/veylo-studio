"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";

const fields = [
  "Digital Experience",
  "Product Engineering",
  "Backend System",
  "AI & Automation",
  "Other",
] as const;
const budgets = [
  "Under $5K",
  "$5K–$15K",
  "$15K–$50K",
  "$50K+",
  "Not sure",
] as const;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
  async function onSubmit(data: ContactFormData) {
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(body.message || "Could not send your message.");
      setSent(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Could not send your message.",
      );
    }
  }
  const error = (name: keyof ContactFormData) => errors[name]?.message;
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.1] bg-lime text-obsidian"
    >
      <div className="pointer-events-none absolute -right-24 -top-32 h-[500px] w-[500px] rounded-full border border-obsidian/10 sm:h-[700px] sm:w-[700px]" />
      <div className="pointer-events-none absolute -right-12 -top-20 h-[350px] w-[350px] rounded-full border border-obsidian/10 sm:h-[500px] sm:w-[500px]" />
      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-obsidian/55">
              07 / Start a conversation with VEYLO
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(52px,8vw,120px)] font-bold leading-[.84] tracking-[-.09em]">
              Have something worth building<span className="text-white">?</span>
            </h2>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-obsidian/65">
              Tell us what you&apos;re working on. Let&apos;s figure out how to
              bring it to life.
            </p>
            <a
              href="mailto:salillakra.dev@gmail.com"
              className="mt-10 inline-flex items-center gap-2 border-b border-obsidian/40 pb-1 font-mono text-[11px] uppercase tracking-[0.15em]"
            >
              salillakra.dev@gmail.com <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="border-t border-obsidian/20 pt-6">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <div className="grid h-12 w-12 place-items-center border border-obsidian">
                  <Check />
                </div>
                <h3 className="mt-6 font-display text-4xl font-bold tracking-[-.05em]">
                  Message received.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-obsidian/60">
                  Thanks for the brief. We&apos;ll review it and get back to you
                  within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 w-fit font-mono text-[10px] uppercase tracking-[.15em] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={error("name")}>
                    <input {...register("name")} placeholder="Your name" />
                  </Field>
                  <Field label="Email" error={error("email")}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@company.com"
                    />
                  </Field>
                </div>
                <Field label="Company (optional)" error={error("company")}>
                  <input
                    {...register("company")}
                    placeholder="Company or project name"
                  />
                </Field>
                <Field label="Project type" error={error("projectType")}>
                  <select {...register("projectType")} defaultValue="">
                    <option value="" disabled>
                      Select a direction
                    </option>
                    {fields.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Estimated budget" error={error("budget")}>
                  <select {...register("budget")} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project description" error={error("description")}>
                  <textarea
                    {...register("description")}
                    rows={5}
                    placeholder="What are you building, and where are you today?"
                  />
                </Field>
                {serverError && (
                  <p
                    role="alert"
                    className="border border-red-900/30 bg-red-900/10 px-3 py-2 text-xs text-red-900"
                  >
                    {serverError}
                  </p>
                )}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="inline-flex items-center gap-3 bg-obsidian px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lime transition-transform hover:-translate-y-1 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle size={14} className="animate-spin" />{" "}
                      Sending
                    </>
                  ) : (
                    <>
                      Start a conversation <ArrowUpRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-obsidian/55">
        {label}
      </span>
      <div className="contact-field">{children}</div>
      {error && (
        <span className="mt-1 block text-xs text-red-900">{error}</span>
      )}
    </label>
  );
}
