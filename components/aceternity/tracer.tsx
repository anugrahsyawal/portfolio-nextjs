"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TracerProps {
  className?: string
}

export const Tracer: React.FC<TracerProps> = ({ className = "" }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate scroll progress (0 to 1)
      const totalScroll = documentHeight - windowHeight
      const progress = totalScroll > 0 ? scrollTop / totalScroll : 0

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <svg
      ref={svgRef}
      className={`fixed left-1/2 top-0 h-full w-1 -translate-x-1/2 pointer-events-none ${className}`}
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      {/* Background line */}
      <line x1="0.5" y1="0" x2="0.5" y2="1" stroke="rgba(100, 116, 139, 0.2)" strokeWidth="0.002" />

      {/* Animated tracer line following scroll */}
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2={scrollProgress}
        stroke="url(#tracerGradient)"
        strokeWidth="0.003"
        strokeLinecap="round"
      />

      {/* Gradient definition for Electric Blue glow */}
      <defs>
        <linearGradient id="tracerGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 1)" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="tracerGlow">
          <feGaussianBlur stdDeviation="0.002" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow effect */}
      <circle cx="0.5" cy={scrollProgress} r="0.008" fill="rgba(59, 130, 246, 0.6)" filter="url(#tracerGlow)" />
    </svg>
  )
}
