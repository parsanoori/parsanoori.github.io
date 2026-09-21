import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { social } from '../../data/social'

// TODO: replace with your real Formspree form ID (create one free at https://formspree.io)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_ME'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-3xl font-bold text-text"
      >
        Get In Touch
      </motion.h2>
      <p className="mb-8 text-text-muted">
        I'm currently looking to continue my journey in academia and research by pursuing a
        graduate degree in computer science. Reach out for any purpose — I'd love to hear from
        you.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-muted focus:border-accent-light focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-muted focus:border-accent-light focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="resize-none rounded-md border border-border bg-surface px-4 py-2.5 text-text placeholder:text-text-muted focus:border-accent-light focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p className="text-sm text-emerald-400">Thanks — your message is on its way.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-400">
            Something went wrong. Email me directly at{' '}
            <a href={`mailto:${social.email}`} className="underline">
              {social.email}
            </a>
            .
          </p>
        )}
      </motion.form>
    </section>
  )
}
