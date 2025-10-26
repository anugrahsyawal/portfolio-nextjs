"use client"

import { Vortex } from "@/components/aceternity/vortex"
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect"

export default function HeroSection() {
  const subHeadline =
    "Saya merancang dan mengotomatisasi infrastruktur yang scalable (Proxmox, Ansible, ELK Stack), dengan pemahaman full-stack untuk memastikan performa aplikasi Anda (Next.js, Python)."

  return (
    <section id="home" className="relative w-full h-screen pt-20">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={200}
        baseHue={240}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="text-center z-20 px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            System Administrator & Infrastructure Engineer
          </h1>

          <div className="max-w-3xl mx-auto">
            <TextGenerateEffect
              words={subHeadline}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance"
            />
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </Vortex>
    </section>
  )
}
