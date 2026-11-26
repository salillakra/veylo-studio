"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-client";

const steps = [
  [
    "01",
    "DISCOVER",
    "Understand the business, users, and technical requirements.",
  ],
  [
    "02",
    "DESIGN",
    "Define architecture, user experience, and product direction.",
  ],
  ["03", "ENGINEER", "Build, test, and iterate on the product."],
  ["04", "SHIP", "Deploy, monitor, optimize, and support."],
];

export default function Process() {
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
        ".process-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 55%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        ".process-step",
        { opacity: 0.28, x: -12 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.55,
          scrollTrigger: { trigger: ref.current, start: "top 65%" },
        },
      );
      gsap.fromTo(
        ".process-dot",
        { scale: 0.45, opacity: 0.35, backgroundColor: "#8b8b87" },
        {
          scale: 1,
          opacity: 1,
          backgroundColor: "#c6ff4d",
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
            end: "bottom 62%",
            scrub: 0.35,
          },
        },
      );
    }, ref);
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="border-t border-white/[0.1] bg-[#0b0b0a]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <p className="section-kicker">05 / Process</p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(48px,7vw,104px)] font-bold leading-[.88] tracking-[-.08em] text-paper">
          From idea
          <br />
          to impact<span className="text-lime">.</span>
        </h2>
        <div className="relative mt-20 max-w-3xl pl-7 sm:pl-12">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 sm:left-[21.5px]" />
          <div className="process-fill absolute bottom-0 left-[7px] top-0 w-px bg-lime sm:left-[21.5px]" />
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="process-step relative grid gap-3 border-b border-white/[0.1] py-8 sm:grid-cols-[110px_1fr] sm:gap-8"
            >
              <span
                className="process-dot absolute -left-[26px] top-10 h-2 w-2 rounded-full bg-lime sm:-left-[30px]"
                aria-hidden="true"
              />
              <span className="font-mono text-xs tracking-[0.16em] text-lime">
                {number} — {title}
              </span>
              <p className="max-w-md text-base leading-relaxed text-white/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
