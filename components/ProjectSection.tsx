'use client';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "On-Premise VM Autoscaling",
      description: "Designed a native, high-performance autoscaling solution for Proxmox VE using a feedback control loop (Python, Prometheus). Deployed VMs using Terraform & Ansible.",
      className: "md:col-span-2",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    },
    {
      id: 2,
      title: "Bikinkapal.id (Startup)",
      description: "Lead fullstack development for a maritime industry startup, building the core platform.",
      className: "md:col-span-1",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    },
    {
      id: 3,
      title: "Petrojel.co.id",
      description: "Developed and delivered a professional, responsive company landing page for Petrojel Indonesia.",
      className: "md:col-span-1",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    },
    {
      id: 4,
      title: "ELK Stack Monitoring",
      description: "Internship project: Real-time log monitoring (Elasticsearch, Logstash, Kibana) at Hadji Kalla.",
      className: "md:col-span-1",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    },
    {
      id: 5,
      title: "Hackathon Winner (Weather App)",
      description: "Won 2nd Place at KeDai Hackathon 2023. Built a weather app utilizing Google Maps & Weather APIs.",
      className: "md:col-span-1",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    }
  ];

  return (
    <section id='projects' className='py-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>Featured Projects</h2>
      <BentoGrid>
        {projects.map((project) => (
          <BentoGridItem
            key={project.id}
            title={project.title}
            description={project.description}
            className={project.className}
            header={project.header}
          />
        ))}
      </BentoGrid>
    </section>
  );
}