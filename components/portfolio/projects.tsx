'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { GithubIcon } from './social-icons'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { ArchitectureGraphic } from './architecture-graphic'
import { profile, projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that turn data into decisions"
          description="Case studies across Machine Learning, NLP, and analytics — each built end-to-end, from data pipeline to insight."
        />

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i === 0 ? 0 : 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group grid overflow-hidden rounded-3xl border border-border glass lg:grid-cols-[1fr_1.05fr]"
              >
                {/* Visual */}
                <div
                  className={`relative flex items-center justify-center overflow-hidden border-b border-border p-8 text-foreground lg:border-b-0 lg:border-r ${
                    i % 2 === 1 ? 'lg:order-2 lg:border-l lg:border-r-0' : ''
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, oklch(0.64 0.19 285 / 0.1), transparent 70%)',
                    }}
                  />
                  <div className="relative aspect-[400/260] w-full max-w-md">
                    <ArchitectureGraphic variant={i} />
                  </div>
                  <span className="absolute left-6 top-6 font-mono text-5xl font-semibold text-foreground/10">
                    {project.index}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 sm:p-9">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border">
                    {project.metric.map((m) => (
                      <div key={m.label} className="bg-secondary/30 px-3 py-3">
                        <div className="font-mono text-sm font-semibold text-foreground">
                          {m.value}
                        </div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">
                    <a
                      href="https://github.com/magantipraneeth3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-secondary"
                    >
                      <GithubIcon size={15} />
                      Source
                    </a>
                    <a
                      href="https://github.com/magantipraneeth3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                    >
                      Case study
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
