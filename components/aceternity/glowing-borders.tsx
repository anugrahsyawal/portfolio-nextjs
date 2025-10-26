"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlowingBordersProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export const GlowingBorders: React.FC<GlowingBordersProps> = ({
  children,
  className,
  glowColor = "from-blue-500 to-cyan-500",
}) => {
  return (
    <div className={cn("relative group", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg",
          `bg-gradient-to-r ${glowColor}`,
        )}
      />
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 bg-gradient-to-r from-blue-500 to-cyan-500" />
      <div className="relative rounded-lg bg-slate-900 border border-slate-700 group-hover:border-blue-500 transition-colors duration-300">
        {children}
      </div>
    </div>
  )
}
