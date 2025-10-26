"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface InfiniteMovingCardsProps {
  items: Array<{
    id: string | number
    name: string
    icon?: string
  }>
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  }

  const animationDuration = speedMap[speed]
  const animationDirection = direction === "left" ? "scroll-left" : "scroll-right"

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone items for seamless loop
    const allItems = [...items, ...items]
    container.innerHTML = ""

    allItems.forEach((item) => {
      const card = document.createElement("div")
      card.className =
        "flex-shrink-0 w-64 h-32 bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-center hover:border-blue-500/50 transition-colors duration-300"
      card.innerHTML = `
        <div class="flex flex-col items-center justify-center gap-2 text-center">
          ${item.icon ? `<div class="text-3xl">${item.icon}</div>` : ""}
          <span class="text-sm font-medium text-slate-200">${item.name}</span>
        </div>
      `
      container.appendChild(card)
    })
  }, [items])

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .scroll-container {
          animation: ${animationDirection} ${animationDuration} linear infinite;
          ${isHovered ? "animation-play-state: paused;" : ""}
        }
      `}</style>
      <div ref={containerRef} className="scroll-container flex gap-4 w-max" />
    </div>
  )
}
