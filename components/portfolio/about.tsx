'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Code2, Languages as LangIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal, StaggerGroup, itemVariants } from './reveal'
import { coreSubjects, interests, languages } from '@/lib/portfolio-data'

const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    body: 'Designing predictive models, NLP pipelines, and data-driven systems that learn from real-world signals.',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    body: 'Building scalable backends with Spring Boot & REST APIs, grounded in solid DS & algorithms.',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    body: 'Deploying and scaling workloads on AWS — EC2, S3, and RDS — with a cloud-native mindset.',
  },
  {
    icon: LangIcon,
    title: 'Research & Data',
    body: 'Honors Through Research: exploratory analysis, statistics, and mathematical optimization.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineering intelligence,{' '}
              <span className="text-muted-foreground">one model at a time.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">
              I&apos;m a highly motivated Computer Science Engineering student
              specializing in{' '}
              <span className="text-primary">
                Data Science Engineering with Artificial Intelligence
              </span>{' '}
              at KL University. My passion lies in AI, Machine Learning, Data
              Science, Software Engineering, and Cloud Computing.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              I enjoy solving real-world problems by building intelligent
              applications, designing scalable software solutions, and
              conducting research. I continuously sharpen my expertise through
              projects, certifications, and competitive learning.
            </p>

            <div className="mt-8">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Core coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSubjects.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((f) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-border glass p-5 transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </motion.div>
              )
            })}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 rounded-2xl border border-border glass p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium">{l.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Beyond the code
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-secondary/50 px-3 py-1.5 text-xs text-foreground/80"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
