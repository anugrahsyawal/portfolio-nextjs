"use client"

import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid"
import { GlowingBorders } from "@/components/aceternity/glowing-borders"

interface ProjectTag {
  name: string
}

interface ProjectItem {
  title: string
  description: string
  tags: ProjectTag[]
  className?: string
}

const projects: ProjectItem[] = [
  {
    title: "Sistem Autoscaling VM",
    description:
      "Merancang arsitektur feedback control loop on-premise untuk Proxmox VE. Hasil: mengeliminasi 100% failed requests & meningkatkan throughput 74.2%.",
    tags: [
      { name: "Terraform" },
      { name: "Ansible" },
      { name: "Python" },
      { name: "Prometheus" },
      { name: "Proxmox VE" },
    ],
    className: "md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2",
  },
  {
    title: "Implementasi ELK Stack",
    description:
      "Membangun solusi monitoring log server terpusat untuk visualisasi real-time dan percepatan troubleshooting di lingkungan enterprise.",
    tags: [{ name: "ELK Stack" }, { name: "Logstash" }, { name: "Kibana" }, { name: "Filebeat" }],
    className: "md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1",
  },
  {
    title: "Landing Page petrojel.co.id",
    description: "Mengelola deployment aplikasi Next.js untuk klien, dari development hingga production.",
    tags: [{ name: "Next.js" }, { name: "Vercel" }, { name: "Freelance" }],
    className: "md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1",
  },
  {
    title: "Startup bikinkapal.id",
    description:
      "Berkontribusi sebagai Fullstack, menjembatani kebutuhan development dengan praktik terbaik infrastruktur.",
    tags: [{ name: "Fullstack" }, { name: "Startup" }, { name: "Next.js" }],
    className: "md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1",
  },
]

export default function ProjectsShowcase() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyek Unggulan</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </div>

        <BentoGrid className="w-full">
          {projects.map((project, idx) => (
            <GlowingBorders key={idx} className={project.className} glowColor="from-blue-500 to-cyan-500">
              <BentoGridItem title={project.title} description={project.description} className={project.className}>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded border border-blue-500/30 hover:border-blue-500/60 transition-colors"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </BentoGridItem>
            </GlowingBorders>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
