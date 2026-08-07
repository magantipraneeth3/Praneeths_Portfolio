'use client'

import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './social-icons'
import { Reveal } from './reveal'
import { navLinks, profile } from '@/lib/portfolio-data'

export function Contact() {
  return (
    <footer id="contact" className="relative px-5 pb-12 pt-24 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border glass p-8 text-center sm:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-40"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 0%, oklch(0.64 0.19 285 / 0.2), transparent 70%)',
              }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Let&apos;s build together
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Open to internships &amp; roles in{' '}
              <span className="text-gradient">AI and software engineering</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Whether it&apos;s a research collaboration, an ML project, or a
              full-time opportunity — I&apos;d love to hear from you.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href={"https://github.com/magantipraneeth3"}
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
              <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={15} />
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 font-mono text-sm font-semibold text-primary ring-1 ring-primary/30">
              {profile.initials}
            </span>
            <div className="text-sm">
              <p className="font-medium">{profile.shortName}</p>
              <p className="text-xs text-muted-foreground">
                AI &amp; ML Engineer
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.shortName}
          </p>
        </div>
      </div>
    </footer>
  )
}
