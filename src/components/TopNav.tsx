'use client'

import { useEffect, useState } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
]

interface TopNavProps {
  activeSection: string
}

export default function TopNav({ activeSection }: TopNavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(30,30,30,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 0 #3E3E42' : '0 1px 0 0 transparent',
        transition: 'background-color 300ms, backdrop-filter 300ms, box-shadow 300ms',
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <a
          href="#"
          className="font-mono text-sm font-bold text-foreground transition-colors duration-200 hover:text-accent"
        >
          JM
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-5 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-foreground'
                    : 'text-muted hover:text-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/min-j"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathanmin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:minjonathanmin@gmail.com"
              aria-label="Email"
              className="text-muted transition-colors duration-200 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
