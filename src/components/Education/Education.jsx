import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import EducationCard from './EducationCard'
import { educationData } from '@/assets/data/education'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Education() {
  return (
    <SectionWrapper id="education" alternate>
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">My academic journey</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl mx-auto"
      >
        {educationData.map((edu, index) => (
          <EducationCard key={edu.id} edu={edu} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
