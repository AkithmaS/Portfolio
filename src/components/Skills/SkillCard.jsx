import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Tooltip({ name, color, targetRef }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!targetRef.current) return
    const rect = targetRef.current.getBoundingClientRect()
    setPos({
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + window.scrollY - 12,
    })
  }, [targetRef])

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'absolute',
        top: pos.y,
        left: pos.x,
        transform: 'translate(-50%, -100%)',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
      className="whitespace-nowrap px-3 py-1.5 rounded-lg
                 bg-[#1e1e2e] border border-white/10
                 text-xs font-medium text-white shadow-xl"
    >
      {name}
      {/* Arrow */}
      <span
        className="absolute left-1/2 -translate-x-1/2 -bottom-[5px]
                   block w-2.5 h-2.5 bg-[#1e1e2e]
                   border-r border-b border-white/10 rotate-45"
      />
    </motion.div>,
    document.body
  )
}

export default function SkillCard({ skill }) {
  const { name, Icon, color } = skill
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.1, y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className="relative flex-shrink-0 w-[72px] h-[72px] rounded-2xl
                 bg-white/[0.04] border border-white/[0.08]
                 flex items-center justify-center
                 cursor-default group
                 hover:border-white/20 transition-colors duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 120%, ${color}30, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <span
        className="relative z-10 text-[1.75rem] leading-none transition-all duration-300
                   group-hover:scale-110"
        style={{
          color,
          filter: hovered ? `drop-shadow(0 0 7px ${color}aa)` : 'none',
        }}
      >
        <Icon />
      </span>

      {/* Tooltip rendered into body — escapes all overflow */}
      <AnimatePresence>
        {hovered && <Tooltip name={name} color={color} targetRef={ref} />}
      </AnimatePresence>
    </motion.div>
  )
}
