import { motion } from 'framer-motion'
import { hardSkills, softSkills, type Skill } from '../../data/skills'

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-text">{skill.name}</span>
        <span className="text-text-muted">{skill.value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: index * 0.06, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent-light"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-bold text-text"
      >
        Skills
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="mb-6 text-lg font-semibold text-accent-light">Technical</h3>
          <div className="flex flex-col gap-5">
            {hardSkills.map((s, i) => (
              <SkillBar key={s.name} skill={s} index={i} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-semibold text-accent-light">Soft Skills</h3>
          <div className="flex flex-col gap-5">
            {softSkills.map((s, i) => (
              <SkillBar key={s.name} skill={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
