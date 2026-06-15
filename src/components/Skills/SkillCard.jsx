import { motion } from 'framer-motion'
import { scaleIn } from '@/utils/constants'

export default function SkillCard({ skill }) {
  return (
    <motion.div
      variants={scaleIn}
      className="card flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-textPrimary">{skill.name}</span>
        <span className="text-xs font-mono text-accent">{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accentAlt"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}
