import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { fadeInUp } from '@/utils/constants'

export default function ExperienceCard({ exp }) {
  return (
    <motion.div variants={fadeInUp} className="relative flex gap-6 items-start">
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-xl flex-shrink-0">
          {exp.icon}
        </div>
        <div className="w-px flex-1 bg-border mt-3 min-h-[2rem]" />
      </div>

      {/* Content */}
      <div className="card flex-1 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-textPrimary">{exp.role}</h3>
            <p className="text-accent font-semibold text-sm">{exp.company}</p>
          </div>
          <span className="tag">{exp.type}</span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-textMuted mb-4">
          <span className="flex items-center gap-1">
            <FiCalendar size={12} /> {exp.period}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin size={12} /> {exp.location}
          </span>
        </div>

        <p className="text-sm text-textSecondary mb-4">{exp.description}</p>

        <ul className="space-y-1 mb-4">
          {exp.responsibilities.map((r, i) => (
            <li key={i} className="text-sm text-textMuted flex items-start gap-2">
              <span className="text-accent mt-1 text-xs">▸</span>
              {r}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="tag text-xs">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
