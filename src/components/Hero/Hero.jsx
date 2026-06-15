import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import HeroTyping from './HeroTyping'
import { personal } from '@/assets/data/personal'
import { scrollToSection } from '@/utils/scrollTo'
import { fadeInUp, slideInRight } from '@/utils/constants'
import profileImg from '@/assets/images/profile.jpeg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#121212' }}
    >
      {/* Background purple orbs — top-left and bottom-right, matching reference site */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '700px', height: '700px',
            top: '-250px', left: '-250px',
            background: 'radial-gradient(circle, rgba(176,38,255,0.20) 0%, transparent 65%)',
            filter: 'blur(40px)',
            animation: 'orb-drift 14s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '600px', height: '600px',
            bottom: '-200px', right: '-200px',
            background: 'radial-gradient(circle, rgba(224,64,251,0.15) 0%, transparent 65%)',
            filter: 'blur(40px)',
            animation: 'orb-drift 18s ease-in-out infinite reverse',
          }}
        />
        {/* Subtle center glow */}
        <div
          className="absolute"
          style={{
            width: '400px', height: '400px',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(176,38,255,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left — text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* Name */}
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {personal.name}
            </motion.h1>

            {/* Typing roles */}
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-textSecondary mb-6 h-8">
              I'm a{' '}
              <HeroTyping roles={personal.roles} />
            </motion.p>

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="text-textSecondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personal.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View My Work
              </button>
              <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-outline">
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile image with multi-ring animation */}
          <motion.div
            className="flex-shrink-0"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative flex items-center justify-center"
                 style={{ width: '450px', height: '450px' }}>

              {/* ── Outermost ring: slow clockwise dashed ── */}
              <div
                className="absolute rounded-full border-2 border-dashed animate-spin-cw"
                style={{
                  inset: '0px',
                  borderColor: 'rgba(176,38,255,0.35)',
                }}
              />

              {/* ── Middle ring: counter-clockwise dashed ── */}
              <div
                className="absolute rounded-full border-2 border-dashed animate-spin-ccw"
                style={{
                  inset: '24px',
                  borderColor: 'rgba(224,64,251,0.30)',
                  borderStyle: 'dashed',
                }}
              />

              {/* ── Pulsing glow ring ── */}
              <div
                className="absolute rounded-full animate-ring-pulse"
                style={{
                  inset: '40px',
                  boxShadow: '0 0 0 3px rgba(176,38,255,0.5), 0 0 40px rgba(176,38,255,0.35)',
                  borderRadius: '50%',
                }}
              />

              {/* ── Orbiting dot (top) ── */}
              <div
                className="absolute"
                style={{
                  width: '12px',
                  height: '12px',
                  top: '50%',
                  left: '50%',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                  animation: 'orbit 5s linear infinite',
                  '--orbit-r': '200px',
                }}
              >
                <div className="w-3 h-3 rounded-full bg-accent shadow-glow-sm" />
              </div>

              {/* ── Orbiting dot (offset) ── */}
              <div
                className="absolute"
                style={{
                  width: '8px',
                  height: '8px',
                  top: '50%',
                  left: '50%',
                  marginTop: '-4px',
                  marginLeft: '-4px',
                  animation: 'orbit 7s linear infinite reverse',
                  '--orbit-r': '185px',
                }}
              >
                <div className="w-2 h-2 rounded-full bg-accentAlt" />
              </div>

              {/* ── Radial glow behind photo ── */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: '50px',
                  background: 'radial-gradient(circle, rgba(176,38,255,0.25) 0%, transparent 70%)',
                  filter: 'blur(12px)',
                }}
              />

              {/* ── Photo frame ── */}
              <div
                className="absolute rounded-full overflow-hidden"
                style={{
                  inset: '50px',
                  border: '3px solid rgba(176,38,255,0.7)',
                  boxShadow: '0 0 0 2px rgba(224,64,251,0.3), 0 0 50px rgba(176,38,255,0.4), inset 0 0 20px rgba(176,38,255,0.1)',
                }}
              >
                <img
                  src={profileImg}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollToSection('about')}
        >
          <span className="text-xs text-textMuted font-mono tracking-widest">SCROLL</span>
          <FiArrowDown className="text-accent animate-bounce-y" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
