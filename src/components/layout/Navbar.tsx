import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-obsidian/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="#top"
          className="group flex items-center gap-3"
          aria-label="VEYLO home"
        >
          <img
            src="/Futuristic VEYLO Neon Logo.png"
            alt="VEYLO"
            className="h-8 w-auto max-w-[112px] object-contain transition-opacity group-hover:opacity-80"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-lime sm:flex"
        >
          <span className="h-1.5 w-1.5 animate-pulse-lime rounded-full bg-lime" />
          Available <ArrowUpRight size={13} strokeWidth={1.5} />
        </Link>
        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer font-mono text-[10px] uppercase tracking-[0.16em] text-paper [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            className="absolute right-0 top-10 w-44 border border-white/10 bg-[#0d0d0d] p-4 shadow-2xl"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-white/[0.07] py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/65 last:border-0 hover:text-lime"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
