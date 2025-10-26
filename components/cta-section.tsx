"use client"

import { Button } from "@/components/ui/button"
import { AnimatedShinyText } from "@/components/aceternity/animated-shiny-text"
import { Github, Linkedin, Mail } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <AnimatedShinyText text="Let's Connect!" className="text-foreground" duration={3} />
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Saya terbuka untuk diskusi mengenai peluang System Administrator, DevOps, atau Infrastructure Engineer.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-foreground hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all bg-transparent"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-foreground hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all bg-transparent"
            asChild
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-slate-600 text-foreground hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition-all bg-transparent"
            asChild
          >
            <a href="mailto:nugrahsyawal@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
