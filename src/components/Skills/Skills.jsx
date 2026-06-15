import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import SkillCard from './SkillCard'
import { skillCategories } from '@/assets/data/skills'
import { fadeInUp, staggerContainer } from '@/utils/constants'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Heading */}
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Skills</h2>
        <p className="section-subheading">Technologies I work with</p>
      </motion.div>

      <div className="space-y-10">
        {skillCategories.map((cat) => (
          <motion.div key={cat.category} variants={fadeInUp}>
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-lg font-bold text-textPrimary">{cat.category}</h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Skills grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {cat.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
