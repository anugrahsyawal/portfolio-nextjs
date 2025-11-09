"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import dynamic from "next/dynamic"

// 1. UBAH DYNAMIC IMPORT:
//    Kita ganti Spline dengan GlobeScene.
//    Kita beri fallback loading agar tidak crash.
const GlobeScene = dynamic(() => import('@/components/GlobeScene'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-foreground/5 rounded-lg flex items-center justify-center text-muted-foreground">Loading 3D Globe...</div>
})

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center bg-background overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8">
            {/* Heading and Subheading */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs text-green-400">Available for collaboration</span>
              </div>
              <TextGenerateEffect words="Anugrah Syawal." className="text-6xl font-bold" />
              <TypewriterEffect
                words={[
                  { text: "Building Infrastructure" },
                  { text: "Terraform, Ansible, Proxmox" },
                  { text: "and" },
                  { text: "Applications (Next.js, Express.js)" },
                ]}
                className="text-xl text-muted-foreground"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-base rounded-lg">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8 py-6 text-base rounded-lg bg-transparent"
              >
                Contact Me
              </Button>
            </div>

            {/* Tagline */}
            <p className="text-foreground/70 text-sm md:text-base">
              System Administrator & DevOps Specialist • Fullstack Developer
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
              {["Proxmox", "Terraform", "Ansible", "ELK Stack", "React", "Next.js"].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-foreground/10 text-foreground hover:bg-foreground/20 border border-foreground/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Graphic */}
          <div className="h-full min-h-[640px] rounded-lg flex items-stretch justify-center">
            <GlobeScene />
          </div>
        </div>
      </div>
    </section>
  )
}