import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'projects', label: 'Projects' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const linkClasses =
    'text-sm font-medium text-text-muted transition-colors hover:text-accent-light'

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-text">
          Parsa Noori
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={linkClasses}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <SocialLinks />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-accent-dim px-3 py-1.5 text-sm font-medium text-accent-light transition-colors hover:bg-accent/10"
          >
            Resume
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            CV
          </a>
        </div>

        <button
          className="text-text md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border/60 px-6 py-4 md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={linkClasses}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <div className="flex items-center gap-5 pt-2">
            <SocialLinks />
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className={linkClasses}>
              Resume
            </a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className={linkClasses}>
              CV
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
