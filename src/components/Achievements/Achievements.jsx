import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import AchievementCard from './AchievementCard'
import { achievementsData } from '@/assets/data/achievements'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" alternate>
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Achievements</h2>
        <p className="section-subheading">Milestones and recognition</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {achievementsData.map((a) => (
          <AchievementCard key={a.id} achievement={a} />
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
