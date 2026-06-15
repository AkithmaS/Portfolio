import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import { projectsData } from '@/assets/data/projects'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <SectionWrapper id="projects" alternate>
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Projects</h2>
        <p className="section-subheading">Things I've built</p>
      </motion.div>

      <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
