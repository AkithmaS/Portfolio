import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiSend } from 'react-icons/fi'
import { EMAILJS_CONFIG } from '@/utils/constants'

const initialState = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form,     setForm]     = useState(initialState)
  const [loading,  setLoading]  = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    setLoading(true)
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      )
      toast.success('Message sent! I\'ll get back to you soon.')
      setForm(initialState)
    } catch {
      toast.error('Failed to send message. Please try again or email directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-1.5">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-sm text-textPrimary
                       placeholder:text-textMuted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
                       transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-1.5">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-sm text-textPrimary
                       placeholder:text-textMuted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
                       transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-textSecondary mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="Internship opportunity / Project collaboration..."
          className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-sm text-textPrimary
                     placeholder:text-textMuted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
                     transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-1.5">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell me about the opportunity or project..."
          required
          className="w-full bg-primary border border-border rounded-xl px-4 py-3 text-sm text-textPrimary
                     placeholder:text-textMuted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
                     transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <FiSend size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
