"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
 {
 id: 1,
 gridColumn: "md:col-span-2",
 title: "Project: On-Premise VM Autoscaling",
 description:
 "Designed a native, high-performance autoscaling solution for Proxmox VE using a feedback control loop (Python, Prometheus). Deployed VMs using Terraform & Ansible.",
 tags: ["DevOps", "Terraform", "Ansible", "Python", "Prometheus"],
 },
 {
 id: 2,
 gridColumn: "md:col-span-1",
 title: "Bikinkapal.id (Startup)",
 description: "Lead fullstack development for a maritime industry startup, building the core platform.",
 tags: ["Fullstack", "Next.js", "Express.js"],
 },
 {
 id: 3,
 gridColumn: "md:col-span-1",
 title: "Petrojel.co.id",
 description: "Developed and delivered a professional, responsive company landing page for Petrojel Indonesia.",
 tags: ["Frontend", "React"],
 },
 {
 id: 4,
 gridColumn: "md:col-span-1",
 title: "ELK Stack Monitoring",
 description:
 "Implemented real-time log monitoring (Elasticsearch, Logstash, Kibana) during internship at Hadji Kalla.",
 tags: ["SysAdmin", "Monitoring", "ELK Stack"],
 },
 {
 id: 5,
 gridColumn: "md:col-span-1",
 title: "Hackathon Winner (Weather App)",
 description: "Won 2nd Place at KeDai Hackathon 2023. Built a weather app utilizing Google Maps & Weather APIs.",
 tags: ["API", "Hackathon"],
 },
]

export default function Home() {
 return (
 <main className="min-h-screen bg-background text-foreground">
 <Navbar />
 <Hero />

 <section id="projects" className="py-24 relative">
 <div className="max-w-7xl mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {projects.map((project) => (
 <div key={project.id} className={`${project.gridColumn} relative group`}>
 {/* Glow effect background */}
 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

 {/* Card with enhanced hover effects */}
 <Card className="relative h-full backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1">
 <CardHeader>
 <CardTitle className="text-lg text-foreground group-hover:text-emerald-400 transition-colors duration-300">
 {project.title}
 </CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">
 {project.description}
 </CardDescription>
 </CardContent>
 <CardFooter className="flex flex-wrap gap-2 pt-4">
 {project.tags.map((tag) => (
 <Badge
 key={tag}
 variant="secondary"
 className="hover:bg-emerald-500/30 hover:text-emerald-300 transition-all duration-300"
 >
 {tag}
 </Badge>
 ))}
 </CardFooter>
 </Card>
 </div>
 ))}
 </div>
 </div>
 </section>

 <Footer />
 </main>
 )
}