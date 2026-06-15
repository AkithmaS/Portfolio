import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import ProjectCard from './ProjectCard'
import { projectsData, projectTabs } from '@/assets/data/projects'
import { fadeInUp } from '@/utils/constants'

export default function Projects() {
  const [activeTab, setActiveTab] = useState(projectTabs[0])

  const filtered = projectsData.filter(p => p.category === activeTab)

  return (
    <SectionWrapper id="projects" alternate>

      {/* Heading */}
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-textPrimary mb-4">Projects</h2>
        <p className="text-textSecondary text-base max-w-xl mx-auto leading-relaxed">
          Each of these projects showcases my skills in creating visually appealing,
          user-friendly interfaces and developing responsive, functional web and mobile applications.
        </p>
      </motion.div>

      {/* Tab switcher */}
      <motion.div variants={fadeInUp} className="flex justify-center mb-10">
        <div className="flex rounded-full p-1 gap-1"
             style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {projectTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-10 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={activeTab === tab ? {} : { color: '#b0b0c0' }}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #b026ff 0%, #e040fb 100%)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              <span className={`relative z-10 ${activeTab === tab ? 'text-white' : ''}`}>
                {tab}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Project cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>

    </SectionWrapper>
  )
}
