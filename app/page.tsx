import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TechStackSection from "@/components/tech-stack-section"
import ProjectsShowcase from "@/components/projects-showcase"
import TimelineSection from "@/components/timeline-section"
import ProjectsSection from "@/components/projects-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsShowcase />
      <TimelineSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
