import Hero           from '@/components/Hero/Hero'
import About          from '@/components/About/About'
import Skills         from '@/components/Skills/Skills'
import Projects       from '@/components/Projects/Projects'
import Certifications from '@/components/Certifications/Certifications'
import Contact        from '@/components/Contact/Contact'

/**
 * Home page — only the sections shown in the navbar are rendered.
 * Education, Experience, Achievements removed per design decision.
 * Contact is still rendered (reached via "Let's Connect").
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}
