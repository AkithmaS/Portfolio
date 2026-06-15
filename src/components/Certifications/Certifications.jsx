import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import CertCard from './CertCard'
import { certificationsData } from '@/assets/data/certifications'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Certifications</h2>
        <p className="section-subheading">Credentials I've earned</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {certificationsData.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
