import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaChevronDown } from 'react-icons/fa'
import { timeline } from '../../data/timeline'

export default function Timeline() {
  const [openId, setOpenId] = useState<string | null>(timeline[0]?.id ?? null)

  return (
    <section id="timeline" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-bold text-text"
      >
        Experience & Education
      </motion.h2>

      <div className="relative flex flex-col gap-6 border-l border-border pl-8">
        {timeline.map((entry, i) => {
          const isOpen = openId === entry.id
          const Icon = entry.type === 'work' ? FaBriefcase : FaGraduationCap

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span
                className={`absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full border ${
                  entry.type === 'work'
                    ? 'border-accent-light bg-accent-dim/40 text-accent-light'
                    : 'border-text-muted bg-surface-2 text-text-muted'
                }`}
              >
                <Icon size={11} />
              </span>

              <button
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                className="w-full rounded-xl border border-border bg-surface p-5 text-left transition-colors hover:border-accent-dim"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-text">{entry.title}</h3>
                    <p className="text-sm text-text-muted">
                      {entry.place} · {entry.date}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-1 shrink-0 text-text-muted"
                  >
                    <FaChevronDown size={12} />
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-text-muted">
                        {entry.description}
                      </p>
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent-light">
                          Skills learned
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {entry.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-accent-dim/60 bg-accent/10 px-3 py-1 text-xs text-accent-light"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
