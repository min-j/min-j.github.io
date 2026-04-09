'use client'

import { education } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'
import { useReveal } from '@/hooks/useReveal'

function EducationCard({ item, delay }: { item: (typeof education)[0]; delay: number }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className="reveal rounded-lg border border-transparent p-5 transition-all duration-200 hover:border-edge hover:bg-surface"
    >
      <div className="lg:flex lg:gap-5">
        <div className="mb-2 shrink-0 lg:mb-0 lg:w-32">
          <span className="font-mono text-[11px] text-muted">{item.period}</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">{item.school}</h3>
          <p className="mt-0.5 text-sm text-secondary">{item.degree}</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted">{item.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="mb-24 scroll-mt-20">
      <SectionHeader number="04" label="Education" />

      <div className="space-y-2">
        {education.map((item, i) => (
          <EducationCard key={i} item={item} delay={i * 0.06} />
        ))}
      </div>
    </section>
  )
}
