import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 */
export default function HeroTyping({ roles = [], speed = 100, pause = 1800 }) {
  const [displayText,  setDisplayText]  = useState('')
  const [roleIndex,    setRoleIndex]    = useState(0)
  const [charIndex,    setCharIndex]    = useState(0)
  const [isDeleting,   setIsDeleting]   = useState(false)

  useEffect(() => {
    if (!roles.length) return
    const current = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles, speed, pause])

  return (
    <span className="gradient-text font-bold">
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}
