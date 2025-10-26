"use client"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Proxmox Infrastructure Automation",
      description:
        "Automated VM provisioning dan management menggunakan Ansible untuk 50+ virtual machines dengan high availability setup.",
      tags: ["Proxmox", "Ansible", "Linux", "Automation"],
    },
    {
      id: 2,
      title: "ELK Stack Monitoring Solution",
      description:
        "Implementasi centralized logging dan monitoring untuk aplikasi production dengan real-time alerting dan visualization.",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Monitoring"],
    },
    {
      id: 3,
      title: "Next.js Application Deployment",
      description:
        "Setup dan optimization Next.js applications di infrastructure dengan CI/CD pipeline menggunakan GitHub Actions.",
      tags: ["Next.js", "Docker", "CI/CD", "DevOps"],
    },
    {
      id: 4,
      title: "Python Automation Scripts",
      description:
        "Custom automation scripts untuk system administration tasks, backup management, dan infrastructure monitoring.",
      tags: ["Python", "Scripting", "Automation", "DevOps"],
    },
  ]

  return (
    <section id="projects" className="w-full py-20 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Proyek & Pengalaman</h2>
        <p className="text-foreground/60 mb-12 text-lg">
          Beberapa proyek yang telah saya kerjakan dalam mengembangkan infrastruktur yang robust dan scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-lg border border-border bg-background/50 hover:bg-background/80 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
