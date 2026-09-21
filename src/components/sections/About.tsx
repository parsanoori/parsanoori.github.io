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
          I'm a graduated student from Shahid Beheshti University, extremely interested in
          blockchain, cryptocurrencies, and the philosophy behind them. As a liberalist, I
          believe blockchain will give the world the opportunity to achieve the necessary
          values. I've worked in the blockchain labs of our university and co-authored a paper
          on the use of blockchain for privacy in VANET systems. I started learning about
          Bitcoin and other cryptocurrencies before beginning my undergraduate program, and
          I've looked forward to taking related courses throughout my university years.
        </p>
      </motion.div>
    </section>
  )
}
