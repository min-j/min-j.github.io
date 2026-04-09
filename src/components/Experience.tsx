'use client'

import { experience, ExperienceItem } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

function ExperienceCard({ job, delay }: { job: ExperienceItem; delay: number }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className="reveal group relative rounded-lg border border-transparent p-5 transition-all duration-200 hover:border-edge hover:bg-surface"
    >
      <div className="lg:flex lg:gap-5">
        <div className="mb-3 shrink-0 lg:mb-0 lg:w-32">
          <span className="font-mono text-[11px] text-muted">{job.dateRange}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-accent">
            {job.title}
          </h3>
          <p className="mt-0.5 text-sm text-secondary">{job.company}</p>

          <ul className="mt-4 space-y-2.5">
            {job.bullets.map((bullet, j) => (
              <li key={j} className="flex gap-2 text-sm leading-relaxed text-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {job.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-20">
      <SectionHeader number="02" label="Experience" />

      <div className="space-y-2">
        {experience.map((job, i) => (
          <ExperienceCard key={i} job={job} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
