import { motion } from 'framer-motion'
import SectionWrapper from '@/layouts/SectionWrapper'
import { skills } from '@/assets/data/skills'
import { fadeInUp } from '@/utils/constants'
import SkillCard from './SkillCard'

const chunkSkills = () => {
  const size = Math.ceil(skills.length / 3)
  return [
    skills.slice(0, size),
    skills.slice(size, size * 2),
    skills.slice(size * 2),
  ]
}
const [row1, row2, row3] = chunkSkills()

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="w-full overflow-x-clip">
      <div className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">

      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Technical Skills</h2>
        <p className="section-subheading max-w-xl mx-auto">
          Technologies, tools, and frameworks I use to build reliable software solutions.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-col gap-3">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} reverse={false} />
      </motion.div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee         { animation: marquee         90s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 90s linear infinite; }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover { animation-play-state: paused; }
      `}</style>

    </SectionWrapper>
  )
}
