'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { bio } from '@/lib/data'

export default function Hero() {
  return (
    <section className="mb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-edge bg-surface px-3.5 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="font-mono text-[11px] text-secondary">Open to opportunities</span>
        </div>

        <h1 className="shimmer-text text-5xl font-bold tracking-tight sm:text-6xl">
          Jonathan Min
        </h1>

        <p className="mt-3 font-mono text-sm text-muted">
          Senior Software Engineer &mdash; New York
          <span className="blink ml-0.5 text-accent">_</span>
        </p>

        <p className="mt-6 max-w-lg text-sm leading-7 text-secondary">{bio.hero}</p>

        <a
          href="/Jonathan Min Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-edge bg-surface px-4 py-2 font-mono text-xs text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <FileText className="h-3.5 w-3.5" />
          View résumé
        </a>
      </motion.div>
    </section>
  )
}
