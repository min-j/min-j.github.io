'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0])
  const lastId = sectionIds[sectionIds.length - 1]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // If the user has scrolled to the bottom, force the last section active
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      if (nearBottom) setActive(lastId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((o) => o.disconnect())
    }
  }, [sectionIds, lastId])

  return active
}
