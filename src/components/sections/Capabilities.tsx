"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-client";

const capabilities = [
  ["Frontend", "Next.js", "React", "TypeScript", "SvelteKit", "React Native"],
  ["Backend", "Node.js", "Hono", "Express", "FastAPI"],
  ["Data", "PostgreSQL", "MongoDB", "Redis", "Supabase"],
  ["Infrastructure", "Docker", "Linux", "Nginx", "Cloudflare", "CI/CD"],
  ["AI", "Gemini API", "LLM integrations", "RAG", "Vector databases"],
];

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    if (
      !ref.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    ctx = gsap.context(() => {
      gsap.fromTo(
        ".capability-row",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        },
      );
    }, ref);
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={ref}
      className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div>
          <p className="section-kicker">04 / Technical capabilities</p>
          <h2 className="mt-5 max-w-md font-display text-[clamp(48px,7vw,104px)] font-bold leading-[.88] tracking-[-.08em] text-paper">
            The stack is a means<span className="text-lime">.</span>
          </h2>
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/45">
            Tools selected for the work, not decoration. A practical stack for
            shipping products that need to hold up.
          </p>
        </div>
        <div className="border-t border-white/[0.1]">
          {capabilities.map(([category, ...techs]) => (
            <div
              key={category}
              className="capability-row grid gap-4 border-b border-white/[0.1] py-6 sm:grid-cols-[150px_1fr]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                {category}
              </span>
              <span className="text-base leading-relaxed text-white/70">
                {techs.join("  /  ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
