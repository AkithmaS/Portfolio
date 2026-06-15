import Hero           from '@/components/Hero/Hero'
import About          from '@/components/About/About'
import Education      from '@/components/Education/Education'
import Skills         from '@/components/Skills/Skills'
import Projects       from '@/components/Projects/Projects'
import Certifications from '@/components/Certifications/Certifications'
import Contact        from '@/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}
