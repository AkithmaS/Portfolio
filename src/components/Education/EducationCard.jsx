import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/constants'

export default function EducationCard({ edu, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.div variants={fadeInUp} className="relative flex gap-6 items-start">
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-2xl flex-shrink-0 shadow-glow-sm">
          {edu.icon}
        </div>
        {/* Vertical line */}
        <div className="w-px flex-1 bg-border mt-3 min-h-[2rem]" />
      </div>

      {/* Card */}
      <div className="card flex-1 mb-8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-bold text-textPrimary">{edu.degree}</h3>
            <p className="text-accent font-medium text-sm">{edu.institution}</p>
          </div>
          <div className="text-right">
            <span className="tag">{edu.period}</span>
            {edu.status && (
              <p className={`text-xs mt-1 font-medium ${edu.status === 'Reading' ? 'text-success' : 'text-textMuted'}`}>
                {edu.status}
              </p>
            )}
          </div>
        </div>

        {(edu.gpa || edu.result) && (
          <p className="text-sm font-semibold text-textSecondary mb-3">
            {edu.gpa ? `GPA: ${edu.gpa}` : edu.result}
          </p>
        )}

        {edu.details?.length > 0 && (
          <ul className="space-y-1">
            {edu.details.map((d, i) => (
              <li key={i} className="text-sm text-textMuted flex items-start gap-2">
                <span className="text-accent mt-1.5 text-xs">▸</span>
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
