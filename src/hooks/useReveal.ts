'use client'

import { useEffect, useRef } from 'react'

export function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}s`
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { rootMargin: '-60px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
