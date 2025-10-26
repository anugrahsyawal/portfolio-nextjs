"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface TextGenerateEffectProps {
  words: string
  className?: string
  duration?: number
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({ words, className = "", duration = 0.05 }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedText(words.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <p className={className}>
      {displayedText}
      {displayedText.length < words.length && <span className="animate-pulse">|</span>}
    </p>
  )
}
