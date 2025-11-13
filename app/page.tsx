"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { ContactForm } from '@/components/ContactForm'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, ExternalLink, CheckCircle2, Award, Users, Link } from "lucide-react"


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

 <section id="about" className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story with gradient card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <Card className="relative bg-gradient-to-br from-background to-foreground/5 border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Fresh Graduate Sarjana Terapan Teknik Komputer dan Jaringan (IPK 3.7) dengan spesialisasi di System
                  Administration, Virtualization, dan Infrastructure Monitoring.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Berpengalaman praktis mengimplementasikan ELK Stack dan merancang sistem autoscaling VM on-premise.
                  Saya memiliki gairah untuk memecahkan masalah infrastruktur yang kompleks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sekaligus merambah dunia fullstack development dengan teknologi modern seperti Next.js dan React.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Enhanced Tabs with icons */}
          <div className="space-y-6">
            <Tabs defaultValue="pendidikan" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 p-1 rounded-lg border border-emerald-500/20">
                <TabsTrigger
                  value="pendidikan"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/30 data-[state=active]:to-emerald-500/10 data-[state=active]:text-emerald-400 data-[state=active]:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                >
                  <span className="hidden sm:inline">Pendidikan</span>
                  <span className="sm:hidden">📚</span>
                </TabsTrigger>
                <TabsTrigger
                  value="sertifikasi"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/30 data-[state=active]:to-emerald-500/10 data-[state=active]:text-emerald-400 data-[state=active]:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                >
                  <span className="hidden sm:inline">Sertifikasi</span>
                  <span className="sm:hidden">🏆</span>
                </TabsTrigger>
                <TabsTrigger
                  value="organisasi"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500/30 data-[state=active]:to-emerald-500/10 data-[state=active]:text-emerald-400 data-[state=active]:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
                >
                  <span className="hidden sm:inline">Organisasi</span>
                  <span className="sm:hidden">👥</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pendidikan" className="space-y-3 mt-6">
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      D4 Teknik Komputer dan Jaringan
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Politeknik Negeri Ujung Pandang (2021-2025)</p>
                  </div>
                </div>
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Teknik Komputer dan Jaringan
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">SMK Negeri 1 Bulukumba (2018-2021)</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sertifikasi" className="space-y-3 mt-6">
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Google IT Support
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Coursera (Juli 2024)</p>
                  </div>
                </div>
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Bangkit Academy Completion
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Google, GoTo, Traveloka (Januari 2024)</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="organisasi" className="space-y-3 mt-6">
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Ketua Umum
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Computer and Network Community</p>
                  </div>
                </div>
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Ketua Bidang Internal
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Himpunan Mahasiswa Teknik Informatika</p>
                  </div>
                </div>
                <div className="relative group/item">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg blur opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative p-4 bg-foreground/5 border border-transparent group-hover/item:border-emerald-500/30 rounded-lg hover:bg-foreground/10 transition-all duration-300">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      Staff Komisi Pengawasan
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Dewan Mahasiswa KMPNUP</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info Cards */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <Card className="relative bg-gradient-to-br from-background to-foreground/5 border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Mail className="w-5 h-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:nugrahsyawal@gmail.com"
                      className="text-foreground hover:text-emerald-400 transition-colors font-medium"
                    >
                      nugrahsyawal@gmail.com
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <Card className="relative bg-gradient-to-br from-background to-foreground/5 border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-emerald-400">
                      <Link className="w-5 h-5" />
                      Social Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 mt-4">
 <a
 href='https://github.com/kyunedev'
 target='_blank'
 rel='noopener noreferrer'
 className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors'
 >
 <Github className='h-5 w-5' />
 <span>kyunedev (GitHub)</span>
 </a>
 <a
 href='https://linkedin.com/in/anugrahsyawal/'
 target='_blank'
 rel='noopener noreferrer'
 className='flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors'
 >
 <Linkedin className='h-5 w-5' />
 <span>anugrahsyawal (LinkedIn)</span>
 </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

 <Footer />
 </main>
 )
}