'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { Reveal, StaggerGroup, itemVariants } from './reveal'
import { skillCloud, skillGroups } from '@/lib/portfolio-data'

const weightClasses: Record<number, string> = {
  3: 'text-lg sm:text-2xl font-semibold text-foreground border-primary/40 bg-primary/10',
  2: 'text-base sm:text-lg font-medium text-foreground/90 border-border bg-secondary/50',
  1: 'text-sm text-muted-foreground border-border bg-secondary/30',
}

const hoverClasses =
  'transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary hover:bg-primary/20 hover:text-foreground hover:shadow-lg hover:shadow-primary/20'

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="A stack tuned for intelligent systems"
          description="From low-level algorithms to cloud deployment — the technologies I reach for to ship ML-driven products."
        />

        {/* Skill Cloud */}
        <Reveal>
          <div className="relative mb-12 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-border glass p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-40"
              style={{
                background:
                  'radial-gradient(circle at 50% 40%, oklch(0.64 0.19 285 / 0.12), transparent 60%)',
              }}
            />

            {skillCloud.map((s, i) => (
              <motion.button
                key={s.name}
                type="button"
                onMouseEnter={() => setHovered(s.name)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.02,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                className={`relative rounded-full border px-4 py-2 ${weightClasses[s.weight]} ${hoverClasses} ${
                  hovered && hovered !== s.name
                    ? 'opacity-40'
                    : 'opacity-100'
                }`}
              >
                {s.name}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Grouped Skills */}
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="rounded-2xl border border-border glass p-5"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                      y: -3,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`cursor-pointer rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground ${hoverClasses}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}