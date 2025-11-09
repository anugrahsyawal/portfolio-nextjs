"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center bg-background overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8">
            {/* Heading and Subheading */}
            <div>
              <h1 className="text-6xl font-bold text-foreground mb-4">Anugrah Syawal.</h1>
              <p className="text-xl text-muted-foreground">
                Building Infrastructure (Terraform, Proxmox) and Applications (Next.js, React).
              </p>
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

          {/* Right Column: Placeholder for 3D Graphic */}
          <div className="min-h-[400px] border border-dashed border-gray-700 rounded-lg flex items-center justify-center bg-foreground/5">
            <span className="text-muted-foreground text-sm">Placeholder for 3D Graphic</span>
          </div>
        </div>
      </div>
    </section>
  )
}
