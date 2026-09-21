import { motion } from 'framer-motion'
import SocialLinks from '../layout/SocialLinks'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium uppercase tracking-widest text-accent-light"
      >
        Software Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl font-bold tracking-tight text-text sm:text-6xl"
      >
        Parsa Noori
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-lg text-text-muted"
      >
        Curious and passionate about the impact of blockchain and cryptocurrencies on the world.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 pt-2"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-accent-dim px-5 py-2.5 text-sm font-medium text-accent-light transition-colors hover:bg-accent/10"
        >
          View Resume
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-light"
        >
          View CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pt-4"
      >
        <SocialLinks />
      </motion.div>
    </section>
  )
}
