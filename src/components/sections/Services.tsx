"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import gsap from "@/lib/gsap-client";

const marks = ["◫", "⌁", "⌘", "✳"];

export default function Services() {
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
        ".service-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        },
      );
    }, ref);
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="border-y border-white/[0.1] bg-[#0b0b0a]"
    >
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker">03 / Services</p>
          <h2 className="mt-5 font-display text-[clamp(48px,7vw,104px)] font-bold leading-[.88] tracking-[-.08em] text-paper">
            What we bring
            <br />
            to the table<span className="text-lime">.</span>
          </h2>
        </div>
        <div className="border-t border-white/[0.1]">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="service-item group grid gap-7 border-b border-white/[0.1] py-8 transition-colors hover:bg-white/[0.025] lg:grid-cols-[80px_1fr_1fr_80px] lg:gap-10 lg:py-12"
            >
              <span className="font-mono text-xl text-lime/70">
                {service.number}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-[-.04em] text-paper transition-colors group-hover:text-lime sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">
                  {service.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 self-end sm:grid-cols-2">
                {service.items.map((item) => (
                  <span key={item} className="text-xs text-white/60">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-start justify-between lg:justify-end">
                <span className="font-display text-4xl text-white/[0.12] transition-colors group-hover:text-lime/50">
                  {marks[index]}
                </span>
                <ArrowUpRight
                  className="text-white/25 transition-colors group-hover:text-lime"
                  size={20}
                />
              </div>
              <div className="col-span-full flex flex-wrap gap-2 lg:col-start-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
