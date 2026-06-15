import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { NAV_LINKS } from '@/utils/constants'
import { scrollToSection } from '@/utils/scrollTo'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { personal } from '@/assets/data/personal'

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionIds    = NAV_LINKS.map((l) => l.id)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  const socialLinks = [
    { Icon: FiLinkedin,  href: personal.social.linkedin, label: 'LinkedIn'  },
    { Icon: FiGithub,    href: personal.social.github,   label: 'GitHub'    },
    { Icon: FiInstagram, href: personal.social.instagram || '#', label: 'Instagram' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? 'rgba(18,18,18,0.88)'
          : 'rgba(18,18,18,0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-white font-bold text-lg tracking-wide hover:text-accent transition-colors duration-200 select-none"
          >
            Portfolio
          </button>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'}`}
                  >
                    {link.label}
                  </button>
                  {/* Active dot indicator — exactly like reference screenshot */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* ── Right: social icons + CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social icon circles */}
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center
                           border border-white/25 text-gray-300
                           hover:border-accent hover:text-accent
                           transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}

            {/* Let's Connect — purple gradient glow button matching reference site */}
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-1 px-5 py-2 text-sm font-semibold text-white rounded-lg
                         transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #b026ff 0%, #e040fb 100%)',
                boxShadow: '0 0 18px rgba(176,38,255,0.55)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(176,38,255,0.85)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 18px rgba(176,38,255,0.55)'}
            >
              Let's Connect
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-t"
            style={{
              background: 'rgba(14,14,14,0.97)',
              borderColor: 'rgba(255,255,255,0.07)',
            }}
          >
            <ul className="section-container py-3 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-3 py-3 text-sm font-medium transition-colors
                        flex items-center gap-2
                        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      )}
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Mobile socials + CTA */}
            <div className="section-container pb-5 flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center
                             border border-white/25 text-gray-300
                             hover:border-accent hover:text-accent transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="ml-auto px-5 py-2 text-sm font-semibold text-white rounded-lg
                           transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #b026ff 0%, #e040fb 100%)',
                  boxShadow: '0 0 18px rgba(176,38,255,0.55)',
                }}
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
