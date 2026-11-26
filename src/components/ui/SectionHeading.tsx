import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subheading?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      {eyebrow && (
        <span
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6FF4D]"
          aria-label={eyebrow}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-sans font-bold text-[#F1F0EB] leading-[1.08]"
        style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="font-sans text-[17px] text-[#888888] max-w-xl leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
