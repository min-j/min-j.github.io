'use client'

import { useActiveSection } from '@/hooks/useActiveSection'
import TopNav from '@/components/TopNav'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'

const SECTIONS = ['about', 'experience', 'projects', 'education']

export default function Home() {
  const activeSection = useActiveSection(SECTIONS)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <TopNav activeSection={activeSection} />

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-12 lg:px-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />

        <footer className="border-t border-edge pt-8">
          <p className="text-xs text-muted">
            Designed and built by Jonathan Min.{' '}
            <a
              href="https://github.com/min-j/min-j.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-secondary"
            >
              View source
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
