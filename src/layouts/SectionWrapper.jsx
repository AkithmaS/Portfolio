import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/constants'

/**
 * Wraps every portfolio section with:
 * - Consistent vertical padding
 * - An `id` anchor for scroll navigation
 * - A scroll-triggered fade-in-up animation
 * - Optional alternating background for visual separation
 */
export default function SectionWrapper({ id, children, className = '', alternate = false }) {
  return (
    <section
      id={id}
      className={`py-20 ${className}`}
      style={alternate ? { background: 'rgba(30,30,46,0.6)' } : {}}
    >
      <motion.div
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </section>
  )
}
