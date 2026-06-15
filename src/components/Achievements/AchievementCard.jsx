import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/constants'

const colorMap = {
  gold:    'from-yellow-500/20 to-amber-500/20  border-yellow-500/30  text-yellow-400',
  indigo:  'from-accent/20    to-accentAlt/20   border-accent/30      text-accent',
  violet:  'from-violet-500/20 to-purple-500/20 border-violet-500/30  text-violet-400',
  emerald: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-400',
  blue:    'from-blue-500/20  to-cyan-500/20    border-blue-500/30    text-blue-400',
}

export default function AchievementCard({ achievement }) {
  const colors = colorMap[achievement.color] || colorMap.indigo

  return (
    <motion.div
      variants={fadeInUp}
      className={`card bg-gradient-to-br ${colors} border flex gap-4 items-start`}
    >
      <div className="text-3xl flex-shrink-0">{achievement.icon}</div>
      <div>
        <h3 className="font-bold text-textPrimary text-sm mb-1">{achievement.title}</h3>
        <p className="text-xs text-accent font-medium mb-1">{achievement.organization}</p>
        <p className="text-xs text-textMuted mb-2">{achievement.date}</p>
        <p className="text-xs text-textSecondary leading-relaxed">{achievement.description}</p>
      </div>
    </motion.div>
  )
}
