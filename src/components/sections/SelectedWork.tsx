import { SelectedWorkClient } from "@/components/sections/SelectedWorkClient";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="section-kicker">02 / Selected work</p>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(48px,7vw,104px)] font-bold leading-[.88] tracking-[-.08em] text-paper">
            Selected
            <br />
            work<span className="text-lime">.</span>
          </h2>
          <p className="mt-7 max-w-xs text-sm leading-relaxed text-white/45">
            Five systems across AI product engineering, distributed systems, and
            production platforms.
          </p>
        </div>
        <SelectedWorkClient />
      </div>
    </section>
  );
}
