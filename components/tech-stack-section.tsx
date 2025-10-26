"use client"

import { InfiniteMovingCards } from "@/components/aceternity/infinite-moving-cards"

const techStackData = {
  row1: [
    { id: 1, name: "Proxmox VE", icon: "🖥️" },
    { id: 2, name: "Terraform", icon: "🏗️" },
    { id: 3, name: "Ansible", icon: "⚙️" },
    { id: 4, name: "VMware", icon: "💾" },
    { id: 5, name: "Linux", icon: "🐧" },
    { id: 6, name: "Nginx", icon: "🌐" },
    { id: 7, name: "Bash", icon: "💻" },
  ],
  row2: [
    { id: 8, name: "Elasticsearch", icon: "🔍" },
    { id: 9, name: "Logstash", icon: "📊" },
    { id: 10, name: "Kibana", icon: "📈" },
    { id: 11, name: "Prometheus", icon: "📉" },
    { id: 12, name: "Grafana", icon: "📊" },
    { id: 13, name: "TCP/IP", icon: "🔗" },
    { id: 14, name: "Mikrotik", icon: "🛜" },
  ],
  row3: [
    { id: 15, name: "Next.js", icon: "⚛️" },
    { id: 16, name: "Python", icon: "🐍" },
    { id: 17, name: "AWS", icon: "☁️" },
    { id: 18, name: "Google Cloud", icon: "🌩️" },
    { id: 19, name: "Docker", icon: "🐳" },
    { id: 20, name: "Git", icon: "📦" },
  ],
}

export default function TechStackSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Teknologi yang Saya Kuasai</h2>
          <p className="text-slate-400 text-lg">Tech Stack Unggulan untuk Infrastructure & DevOps</p>
        </div>

        {/* Carousel Rows */}
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="overflow-hidden">
            <InfiniteMovingCards items={techStackData.row1} direction="left" speed="slow" />
          </div>

          {/* Row 2 - Right to Left */}
          <div className="overflow-hidden">
            <InfiniteMovingCards items={techStackData.row2} direction="right" speed="slow" />
          </div>

          {/* Row 3 - Left to Right */}
          <div className="overflow-hidden">
            <InfiniteMovingCards items={techStackData.row3} direction="left" speed="slow" />
          </div>
        </div>
      </div>
    </section>
  )
}
