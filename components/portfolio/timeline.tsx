'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { timeline } from '@/lib/portfolio-data'

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 70%'],
  })
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="journey" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="An academic path built on research"
          description="A consistent record of academic excellence — from school to an Honors Through Research track in AI."
        />

        <div ref={ref} className="relative pl-10 sm:pl-14">
          {/* track */}
          <div className="absolute left-[15px] top-2 h-full w-px bg-border sm:left-[19px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[15px] top-2 h-full w-px origin-top bg-gradient-to-b from-primary to-accent sm:left-[19px]"
          />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-primary ring-4 ring-background sm:-left-14">
                    <GraduationCap size={15} />
                  </span>
                  <div className="rounded-2xl border border-border glass p-6 transition-colors hover:border-primary/30">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                        {item.period}
                      </span>
                      {item.meta && (
                        <span className="rounded-full bg-primary/12 px-3 py-1 font-mono text-xs font-semibold text-primary ring-1 ring-primary/20">
                          {item.meta}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground/70">
                      {item.org}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
