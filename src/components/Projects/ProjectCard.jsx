import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const cardVariant = {
  hidden:  { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function ProjectCard({ project }) {
  return (
    <motion.div variants={cardVariant} className="flex flex-col gap-3">

      {/* Title above the card */}
      <h3 className="text-base font-bold text-textPrimary text-center px-1">
        {project.title}
      </h3>

      {/* Card */}
      <div
        className="group relative rounded-3xl overflow-hidden border border-white/10
                   bg-[#0e0e14] cursor-default"
        style={{ aspectRatio: '4/3' }}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`absolute inset-0 w-full h-full transition-transform duration-500
                      group-hover:scale-105
                      ${project.objectFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
                     px-6 py-6 text-center
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(135deg, rgba(110,30,180,0.45) 0%, rgba(176,38,255,0.42) 50%, rgba(100,20,160,0.45) 100%)',
          }}
        >
          <h3 className="text-lg font-bold text-white mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-white/90 italic leading-relaxed mb-4">
            {project.description}
          </p>
          <p className="text-sm font-bold text-white leading-relaxed mb-5">
            {project.tech.join(', ')}
          </p>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-white/15 border border-white/30
                           flex items-center justify-center text-white
                           hover:bg-white/30 transition-colors duration-200"
                onClick={e => e.stopPropagation()}
              >
                <FiGithub size={17} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live demo"
                className="w-10 h-10 rounded-full bg-white/15 border border-white/30
                           flex items-center justify-center text-white
                           hover:bg-white/30 transition-colors duration-200"
                onClick={e => e.stopPropagation()}
              >
                <FiExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        {/* Accent dot — bottom-right, hides on hover */}
        <span
          className="absolute bottom-3 right-3 w-4 h-4 rounded-full z-20
                     group-hover:opacity-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #b026ff, #e040fb)',
            boxShadow: '0 0 10px #b026ffaa',
          }}
        />
      </div>
    </motion.div>
  )
}
