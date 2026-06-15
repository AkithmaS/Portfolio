import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import ExperienceCard from './ExperienceCard'
import { experienceData } from '@/assets/data/experience'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">My professional journey so far</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        {experienceData.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
