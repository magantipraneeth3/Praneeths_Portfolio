import { SpotlightBackground } from '@/components/portfolio/spotlight-background'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Timeline } from '@/components/portfolio/timeline'
import { Certifications } from '@/components/portfolio/certifications'
import { Achievements } from '@/components/portfolio/achievements'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SpotlightBackground />
      <SiteNav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
