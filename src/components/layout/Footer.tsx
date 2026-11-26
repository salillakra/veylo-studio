import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.1] bg-obsidian">
      <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              VEYLO
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/45">
              Independent digital product and engineering studio — ideas into
              reality.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
            <Link
              className="transition-colors hover:text-lime"
              href="https://github.com/salillakra"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="transition-colors hover:text-lime"
              href="https://linkedin.com/in/salillakra"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="inline-flex items-center gap-1 transition-colors hover:text-lime"
              href="https://salillakra.com"
              target="_blank"
              rel="noreferrer"
            >
              Salil Lakra <ArrowUpRight size={13} />
            </Link>
            <span className="text-white/20">© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
