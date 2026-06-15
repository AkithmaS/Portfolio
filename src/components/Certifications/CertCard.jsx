import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const cardVariant = {
  hidden:  { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function CertCard({ cert }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.08]
                 bg-[#0e0e14] hover:border-accent/30 transition-colors duration-300"
    >
      {/* ── Certificate image (top) ── */}
      <div className="relative w-full bg-white overflow-hidden"
           style={{ aspectRatio: '4/3' }}>
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)'
          }}
        />
      </div>

      {/* ── Info section (bottom) ── */}
      <div className="px-4 py-4 flex flex-col gap-2">
        {/* Row: pill tag + year + link */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-[10px] font-semibold rounded-full
                             bg-white/[0.07] border border-white/10 text-textSecondary">
              Certifications
            </span>
            <span className="text-xs text-textSecondary">{cert.year}</span>
          </div>
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

        {/* Title */}
        <h3 className="text-sm font-bold text-textPrimary leading-snug
                       group-hover:text-accent transition-colors duration-200">
          {cert.title}
        </h3>
      </div>
    </motion.div>
  )
}
