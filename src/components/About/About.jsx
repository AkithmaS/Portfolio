import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiDownload } from 'react-icons/fi'
import SectionWrapper from '@/layouts/SectionWrapper'
import { personal } from '@/assets/data/personal'
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from '@/utils/constants'
import profileImg from '@/assets/images/profile.jpeg'

export default function About() {
  return (
    <SectionWrapper id="about" alternate>
      {/* Heading */}
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">Get to know me a little better</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — image */}
        <motion.div
          variants={slideInLeft}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accentAlt/20 blur-xl" />
            <img
              src={profileImg}
              alt="About me"
              className="relative z-10 w-full h-full object-cover rounded-2xl border border-border shadow-card"
              style={{ objectPosition: 'center top', transform: 'scale(0.75)', transformOrigin: 'center top' }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-secondary border border-border rounded-xl px-4 py-3 shadow-card">
              <p className="text-xs text-textSecondary">Current GPA</p>
              <p className="text-2xl font-bold gradient-text">3.50</p>
            </div>
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div variants={slideInRight}>
          <h3 className="text-2xl font-bold text-textPrimary mb-4">
            Software Engineering Undergraduate
          </h3>
          <p className="text-textSecondary leading-relaxed mb-6">
            {personal.about}
          </p>

          {/* Contact details */}
          <ul className="space-y-3 mb-8">
            {[
              { Icon: FiMail,   value: personal.email    },
              { Icon: FiPhone,  value: personal.phone    },
              { Icon: FiMapPin, value: personal.location },
            ].map(({ Icon, value }) => (
              <li key={value} className="flex items-center gap-3 text-textSecondary text-sm">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-accent" />
                </span>
                {value}
              </li>
            ))}
          </ul>

          {/* Resume download */}
          <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <FiDownload size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
      >
        {personal.stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeInUp} className="card text-center">
            <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
            <p className="text-xs text-textSecondary font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
