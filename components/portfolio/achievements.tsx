'use client'

import { motion } from 'framer-motion'
import { Award, Brain, Crown, Medal, Sparkles, Trophy } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, itemVariants } from './reveal'
import { achievements } from '@/lib/portfolio-data'

const icons = [Trophy, Medal, Award, Sparkles, Crown, Brain, Trophy]

export function Achievements() {
  return (
    <section id="awards" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Honors & Achievements"
          title="Recognition earned along the way"
          description="A blend of academic distinction, athletics, and strategic thinking."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={a}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 rounded-2xl border border-border glass p-5 transition-colors hover:border-primary/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary ring-1 ring-primary/20">
                  <Icon size={18} />
                </span>
                <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                  {a}
                </p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
