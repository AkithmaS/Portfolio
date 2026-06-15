import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import SectionWrapper from '@/layouts/SectionWrapper'
import ContactForm from './ContactForm'
import { personal } from '@/assets/data/personal'
import { fadeInUp, slideInLeft, slideInRight } from '@/utils/constants'

const contactItems = [
  { Icon: FiMail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { Icon: FiPhone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
  { Icon: FiMapPin, label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <div className="accent-line mx-auto" />
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subheading">
          Open to internship opportunities, collaborations, and interesting conversations
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — contact info */}
        <motion.div variants={slideInLeft} className="space-y-6">
          <p className="text-textSecondary leading-relaxed">
            I'm actively looking for internship opportunities where I can apply my skills
            and grow as a developer. Whether you have a project idea, a job opening, or
            just want to say hi — my inbox is always open.
          </p>

          <div className="space-y-4">
            {contactItems.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-textMuted">{label}</p>
                  {href ? (
                    <a href={href} className="text-textPrimary text-sm font-medium hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-textPrimary text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 pt-2">
            <a href={personal.social.github} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-border text-textSecondary flex items-center justify-center
                         hover:border-accent hover:text-accent hover:shadow-glow-sm transition-all">
              <FiGithub size={18} />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-border text-textSecondary flex items-center justify-center
                         hover:border-accent hover:text-accent hover:shadow-glow-sm transition-all">
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div variants={slideInRight} className="card">
          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
