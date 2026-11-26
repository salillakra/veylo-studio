"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap-client";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="hero-fallback">
      <div className="hero-fallback-ring" />
    </div>
  ),
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (
      !ref.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const ctx = gsap.context(() => {
      gsap.from(
        [
          ".hero-eyebrow",
          ".hero-description",
          ".hero-ctas",
          ".hero-availability",
        ],
        {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.15,
        },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="noise relative min-h-screen overflow-hidden border-b border-white/[0.1] pt-[72px]"
    >
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1500px] flex-col justify-end px-5 pb-12 sm:px-8 lg:grid lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-8 lg:px-12 lg:pb-20">
        <div className="relative z-10 max-w-4xl">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-lime hero-eyebrow">
            <span className="h-px w-8 bg-lime" />
            Independent digital product &amp; engineering studio
          </div>
          <h1 className="hero-title max-w-5xl font-display text-[clamp(56px,9vw,144px)] font-bold leading-[.84] tracking-[-.09em] text-paper">
            We turn ambitious ideas
            <br />
            <span className="text-white/35">into meaningful products</span>
            <span className="text-lime">.</span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg hero-description">
            VEYLO helps startups and businesses design, build, and launch
            digital products — from high-performance websites and full-stack
            software to scalable infrastructure and AI-powered systems.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3 hero-ctas">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-lime px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-obsidian transition-transform hover:-translate-y-1"
            >
              Start a project <ArrowDownRight size={15} />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-3 border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-lime hover:text-lime"
            >
              Explore our work
            </Link>
          </div>
          <div className="mt-14 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 hero-availability">
            <span className="h-1.5 w-1.5 animate-pulse-lime rounded-full bg-lime" />
            Independent studio · Available for select projects
          </div>
        </div>
        <div className="pointer-events-none absolute -right-[8%] top-[15%] h-[70%] w-[62%] opacity-90 lg:relative lg:right-auto lg:top-auto lg:h-[min(70vh,700px)] lg:w-full">
          <HeroScene />
        </div>
      </div>
      <div className="absolute bottom-7 right-6 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25 sm:flex lg:right-12">
        <span>Scroll to explore</span>
        <span className="h-px w-10 bg-white/25" />
      </div>
    </section>
  );
}
