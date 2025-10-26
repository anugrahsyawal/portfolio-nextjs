"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface AnimatedShinyTextProps {
  text: string
  className?: string
  duration?: number
}

export const AnimatedShinyText: React.FC<AnimatedShinyTextProps> = ({ text, className = "", duration = 3 }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const style = document.createElement("style")
    const keyframes = `
      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }
    `
    style.textContent = keyframes
    document.head.appendChild(style)

    element.style.backgroundImage = "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)"
    element.style.backgroundSize = "1000px 100%"
    element.style.animation = `shimmer ${duration}s infinite`

    return () => {
      document.head.removeChild(style)
    }
  }, [duration])

  return (
    <div
      ref={elementRef}
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </div>
  )
}
