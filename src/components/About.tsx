'use client'

import { motion } from 'framer-motion'
import { bio, skills } from '@/lib/data'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function About() {
  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <SectionHeader number="01" label="About" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="space-y-4"
      >
        {bio.about.map((paragraph, i) => (
          <motion.p key={i} variants={fadeUp} className="text-sm leading-7 text-secondary">
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-10"
      >
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-edge bg-surface px-3 py-1 font-mono text-[11px] text-secondary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
