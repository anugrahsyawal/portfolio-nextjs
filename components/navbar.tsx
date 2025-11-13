"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="border-b border-border/50 bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Brand + Availability Indicator */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-foreground">Anugrah Syawal</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
          </div>

          {/* Right: CTA Button */}
          <Button
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
