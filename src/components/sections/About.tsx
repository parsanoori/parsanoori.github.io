import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold text-text"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-6 sm:flex-row sm:items-start"
      >
        <img
          src="/parsa.jpeg"
          alt="Parsa Noori"
          className="h-32 w-32 shrink-0 rounded-2xl border border-border object-cover sm:h-40 sm:w-40"
        />
        <p className="text-left leading-relaxed text-text-muted">
          I'm a Software Developer with recent works on fintech projects. I have recently focused on
          developing Stellar Blockchain and contributing to Iran's CBCD project. I have proven skill
          in Golang, Python and C++. Interested in learning new things, travelling and meeting new
          people.
        </p>
      </motion.div>
    </section>
  )
}
