'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { profile, stats } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from './social-icons'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-5 pt-28 pb-16 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to internships · Btech
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.05 }}
          className="mb-4 font-mono text-sm text-primary"
        >
          {'>'} Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Praneeth</span>
          <br />
          <span className="text-foreground/90">Maganti</span>
        </motion.h1>

        <div className="mt-6 flex h-8 items-center text-lg font-medium text-muted-foreground sm:text-xl">
          <span className="mr-2 text-muted-foreground/60">I build as an</span>
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.35, ease: easeOut }}
                className="inline-block whitespace-nowrap font-semibold text-foreground"
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
          className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground"
        >
          Computer Science Engineering student at KL University specializing in
          Data Science with AI — turning research and data into intelligent,
          scalable software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Sparkles size={16} className="text-primary" />
            Let&apos;s connect
          </a>
          <div className="ml-1 flex items-center gap-2">
            <a
             href="https://github.com/magantipraneeth3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/maganti-praneeth-sri-satya-chowdary-25811a353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border glass sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card/30 px-5 py-5">
              <dd className="font-mono text-2xl font-semibold text-foreground sm:text-3xl">
                {s.value}
                <span className="text-primary">{s.suffix}</span>
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  )
}
