'use client'

import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, itemVariants } from './reveal'
import { certifications } from '@/lib/portfolio-data'

export function Certifications() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certified & continuously learning"
          description="Industry certifications and hands-on programs that back up the practice."
        />

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-border glass p-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-80"
              />
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <BadgeCheck size={20} />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {cert.kind}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {cert.issuer}
              </p>
              {cert.code && (
                <p className="mt-3 font-mono text-xs text-primary/80">
                  {cert.code}
                </p>
              )}
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
