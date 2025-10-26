"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface VortexProps {
  backgroundColor?: string
  rangeY?: number
  particleCount?: number
  baseHue?: number
  className?: string
  children?: React.ReactNode
}

export const Vortex: React.FC<VortexProps> = ({
  backgroundColor = "#000000",
  rangeY = 800,
  particleCount = 200,
  baseHue = 264,
  className = "",
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
    }> = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: Math.random(),
        maxLife: Math.random() * 2 + 1,
        size: Math.random() * 2 + 0.5,
      })
    }

    const animate = () => {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life += 0.01

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.life = 0
        }

        // Draw particle with glow effect
        const opacity = Math.sin((particle.life / particle.maxLife) * Math.PI)
        ctx.fillStyle = `hsla(${baseHue}, 100%, 50%, ${opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw glow
        ctx.strokeStyle = `hsla(${baseHue}, 100%, 60%, ${opacity * 0.3})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [backgroundColor, rangeY, particleCount, baseHue])

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
