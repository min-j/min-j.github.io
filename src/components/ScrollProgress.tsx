'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-edge">
      <div
        className="h-full bg-accent transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
