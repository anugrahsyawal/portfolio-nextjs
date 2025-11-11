"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProjectSection } from "@/components/ProjectSection"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProjectSection />
      <Footer />
    </main>
  )
}
