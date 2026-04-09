'use client'

import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects, ProjectItem } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

function ProjectCard({ project, delay }: { project: ProjectItem; delay: number }) {
  const ref = useReveal(delay)

  return (
    <div ref={ref} className="reveal">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex rounded-lg border border-transparent p-5 transition-all duration-200 hover:border-edge hover:bg-surface"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-3 text-sm leading-relaxed text-secondary">{project.description}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="ml-auto flex items-center gap-1.5 text-[11px] font-mono text-muted transition-colors duration-200 group-hover:text-secondary">
              <FaGithub className="h-3.5 w-3.5" />
              GitHub
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-20">
      <SectionHeader number="03" label="Projects" />

      <div className="space-y-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
