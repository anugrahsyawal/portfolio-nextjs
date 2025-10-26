"use client"

import { Card } from "@/components/ui/card"
import { Tracer } from "@/components/aceternity/tracer"

interface TimelineEvent {
  title: string
  company: string
  date: string
  description: string
  type: "work" | "education"
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "System Administrator (Intern)",
    company: "PT. Hadji Kalla (Holding)",
    date: "September 2024 - Desember 2024",
    description: "Mengimplementasikan ELK Stack untuk monitoring log dan mengotomatisasi sistem backup data.",
    type: "work",
  },
  {
    title: "Technical Moderator (Intern)",
    company: "Eduwork",
    date: "Mei 2024 - Agustus 2024",
    description: "Menjadi moderator, pendamping mentor, dan admin event untuk live class.",
    type: "work",
  },
  {
    title: "D4 Teknik Komputer dan Jaringan",
    company: "Politeknik Negeri Ujung Pandang",
    date: "2021 - 2025",
    description: "Lulus dengan IPK 3.7/4.0, spesialisasi Administrasi Sistem dan Virtualisasi.",
    type: "education",
  },
  {
    title: "Cloud Computing Cohort",
    company: "Bangkit Academy 2023 (by Google, GoTo, Traveloka)",
    date: "Lulus Januari 2024",
    description: "Mempelajari arsitektur, pengelolaan infrastruktur, dan pengembangan aplikasi berbasis cloud.",
    type: "education",
  },
]

export default function TimelineSection() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-slate-950">
      <Tracer className="z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Perjalanan Saya</h2>
          <p className="text-slate-400 text-lg">Pengalaman dan Pendidikan</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line (background) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20 -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                {/* Timeline Dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950 relative z-20" />
                </div>

                {/* Content Card */}
                <div className="flex-1 mb-4">
                  <Card className="bg-slate-900 border-slate-800 hover:border-blue-500/50 transition-colors p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        <p className="text-blue-400 font-medium">{event.company}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === "work" ? "bg-blue-500/20 text-blue-300" : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {event.type === "work" ? "Kerja" : "Pendidikan"}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm mb-3">{event.date}</p>

                    <p className="text-slate-300 leading-relaxed">{event.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
