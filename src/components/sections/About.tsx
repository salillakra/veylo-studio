"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-client";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    if (
      !ref.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    ctx = gsap.context(
      () =>
        gsap.fromTo(
          ".about-reveal",
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 72%" },
          },
        ),
      ref,
    );
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto max-w-[1500px] border-t border-white/[0.1] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        <div>
          <p className="section-kicker">06 / About VEYLO</p>
          <h2 className="about-reveal mt-5 max-w-xl font-display text-[clamp(48px,7vw,104px)] font-bold leading-[.88] tracking-[-.08em] text-paper">
            Small by design<span className="text-lime">.</span>
            <br />
            Serious about execution<span className="text-lime">.</span>
          </h2>
        </div>
        <div className="about-reveal max-w-xl pt-1 lg:pt-16">
          <p className="text-xl leading-relaxed text-paper sm:text-2xl">
            VEYLO is an independent digital product and engineering studio
            focused on transforming ambitious ideas into thoughtfully designed,
            intelligently engineered products.
          </p>
          <p className="mt-7 text-base leading-relaxed text-white/45">
            We partner with founders, startups, and growing businesses from the
            first idea to the final deployment — combining design, technology,
            and engineering to make ambitious ideas work.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/[0.1] pt-6 sm:grid-cols-3">
            <div>
              <span className="font-mono text-2xl text-lime">3+</span>
              <p className="mt-2 text-xs text-white/40">
                Production platforms shipped
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl text-lime">19K+</span>
              <p className="mt-2 text-xs text-white/40">
                Combined users served
              </p>
            </div>
            <div>
              <span className="font-mono text-2xl text-lime">01</span>
              <p className="mt-2 text-xs text-white/40">Independent studio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
