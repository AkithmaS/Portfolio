import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import { scaleIn } from '@/utils/constants'

export default function CertCard({ cert }) {
  return (
    <motion.div variants={scaleIn} className="card flex gap-4 items-start group">
      {/* Icon / logo */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
        <FiAward size={22} className="text-accent" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-textPrimary text-sm leading-snug">{cert.title}</h3>
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View credential"
              className="text-textMuted hover:text-accent transition-colors flex-shrink-0"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>

        <p className="text-xs text-accent mt-1">{cert.issuer}</p>
        <p className="text-xs text-textMuted mt-1">{cert.date}</p>

        {cert.skills?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {cert.skills.map((s) => (
              <span key={s} className="px-2 py-0.5 text-xs rounded-md bg-primary text-textMuted border border-border">
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
