import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { personal } from '@/assets/data/personal'
import { NAV_LINKS } from '@/utils/constants'
import { scrollToSection } from '@/utils/scrollTo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection('home')}
              className="font-mono text-xl font-bold gradient-text mb-3 block"
            >
              &lt;YN /&gt;
            </button>
            <p className="text-sm text-textSecondary leading-relaxed">
              Software Engineering undergraduate passionate about building
              impactful digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-textPrimary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-textSecondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-textPrimary mb-4">Contact</h4>
            <p className="text-sm text-textSecondary mb-1">{personal.email}</p>
            <p className="text-sm text-textSecondary mb-4">{personal.location}</p>
            <div className="flex gap-3">
              {[
                { href: personal.social.github,   Icon: FiGithub,   label: 'GitHub'   },
                { href: personal.social.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, Icon: FiMail,   label: 'Email'    },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center
                             text-textSecondary hover:border-accent hover:text-accent transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FiHeart size={12} className="text-red-400" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
