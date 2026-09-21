import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import { GITHUB_USERNAME, FEATURED_REPOS } from '../../data/projects'

interface Repo {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    Promise.all(
      FEATURED_REPOS.map((name) =>
        fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`).then((r) => {
          if (!r.ok) throw new Error('fetch failed')
          return r.json() as Promise<Repo>
        }),
      ),
    )
      .then((data) => {
        if (!cancelled) setRepos(data)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-3xl font-bold text-text"
      >
        Projects
      </motion.h2>

      {error && (
        <p className="text-text-muted">
          Couldn't load projects from GitHub right now — check back later or visit{' '}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="text-accent-light underline"
          >
            github.com/{GITHUB_USERNAME}
          </a>
          .
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {(repos ?? FEATURED_REPOS.map((name) => ({ name } as Partial<Repo>))).map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.html_url ?? `https://github.com/${GITHUB_USERNAME}/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent-dim"
          >
            <div>
              <div className="flex items-center gap-2 text-text">
                <FaGithub />
                <h3 className="font-semibold">{repo.name}</h3>
              </div>
              <p className="mt-2 min-h-[2.5rem] text-sm text-text-muted">
                {repo.description ?? (repos ? '' : 'Loading…')}
              </p>
            </div>
            {repos && (
              <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
                {repo.language && <span>{repo.language}</span>}
                <span className="flex items-center gap-1">
                  <FaStar size={11} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch size={11} /> {repo.forks_count}
                </span>
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
