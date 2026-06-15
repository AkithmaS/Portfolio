import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { scaleIn } from '@/utils/constants'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={scaleIn}
      layout
      className="card group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-5 bg-secondary aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accentAlt/20">
                <span class="text-4xl">🚀</span>
              </div>`
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-textPrimary hover:text-accent transition-colors"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-textPrimary hover:text-accent transition-colors"
              aria-label="Live demo"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-textPrimary text-lg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className="tag flex-shrink-0">{project.category}</span>
        </div>

        <p className="text-sm text-textSecondary leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-primary text-textMuted border border-border">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-border">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-textSecondary hover:text-accent transition-colors">
              <FiGithub size={13} /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-textSecondary hover:text-accent transition-colors">
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
