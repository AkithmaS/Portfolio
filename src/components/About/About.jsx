import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import { personal } from '@/assets/data/personal'
import { fadeInUp } from '@/utils/constants'

export default function About() {
  return (
    <SectionWrapper id="about" alternate>
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">About Me</h2>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p className="text-textSecondary text-base sm:text-lg leading-relaxed text-center">
          {personal.about}
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
