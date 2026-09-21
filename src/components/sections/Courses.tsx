import { motion } from 'framer-motion'
import { courses } from '../../data/courses'

export default function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-2 text-3xl font-bold text-text"
      >
        Highlight Courses
      </motion.h2>
      <p className="mb-12 text-text-muted">
        Courses I was a teaching assistant for at Shahid Beheshti University.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {courses.map((course, i) => (
          <motion.div
            key={course.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent-dim"
          >
            <h3 className="font-semibold text-text">{course.name}</h3>
            {course.note && <p className="mt-0.5 text-xs text-text-muted">{course.note}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-accent-dim/60 bg-accent/10 px-3 py-1 text-xs text-accent-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
