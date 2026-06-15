import { motion } from 'framer-motion'
import { educationData } from '@/assets/data/education'

const containerVariant = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <div className="accent-line mx-auto" />
          <h2 className="section-heading">Education</h2>
        </motion.div>

        {/* Entries */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.03] flex flex-col gap-3 overflow-hidden"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariant}
              className="group relative flex gap-5 px-6 py-7 overflow-hidden cursor-default"
            >
              {/* Sliding purple fill — starts as small left strip, expands on hover */}
              <div
                className="absolute left-0 top-0 h-full w-[6px]
                           group-hover:w-full
                           transition-all duration-500 ease-in-out
                           rounded-none pointer-events-none z-0"
                style={{
                  background: 'linear-gradient(135deg, #b026ff 0%, #e040fb 100%)',
                  opacity: 0.45,
                }}
              />

              {/* Image bubble */}
              <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl
                              bg-white/[0.06] border border-white/[0.08]
                              overflow-hidden mt-0.5
                              group-hover:border-white/30 transition-colors duration-300">
                <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-1 min-w-0">
                <span className="text-xs font-semibold tracking-wide text-textPrimary
                                 group-hover:text-white transition-colors duration-300">
                  {edu.period}
                </span>

                <h3 className="text-base font-bold text-textPrimary leading-snug
                               group-hover:text-white transition-colors duration-300">
                  {edu.degree}
                </h3>

                <p className="text-sm text-textSecondary
                              group-hover:text-white/80 transition-colors duration-300">
                  {edu.institution}
                </p>

                {edu.details && (
                  <p className="text-sm text-textSecondary mt-1 leading-relaxed
                                group-hover:text-white/70 transition-colors duration-300">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
