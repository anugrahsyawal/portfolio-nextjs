"use client"

import { useState } from "react"

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home")

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Proyek", href: "#projects" },
    { id: "contact", label: "Kontak", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-accent">SysAdmin</div>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeLink === link.id ? "text-accent" : "text-foreground/70 hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
