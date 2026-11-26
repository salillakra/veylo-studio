'use client'

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#C6FF4D] text-[#080808] font-bold hover:bg-[#d9ff7a] border border-transparent",
  ghost:
    "border border-[#333] text-[#F1F0EB] hover:border-[#C6FF4D] hover:text-[#C6FF4D] bg-transparent",
  outline:
    "border border-[#C6FF4D] text-[#C6FF4D] hover:bg-[#C6FF4D]/10 bg-transparent",
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "font-mono inline-flex items-center justify-center gap-2 rounded-none tracking-wider uppercase transition-colors duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF4D]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}

export default Button
