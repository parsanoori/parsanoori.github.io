import SocialLinks from './SocialLinks'
import { social } from '../../data/social'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <SocialLinks />
        <a
          href={`mailto:${social.email}`}
          className="text-sm text-text-muted transition-colors hover:text-accent-light"
        >
          {social.email}
        </a>
        <p className="text-xs text-text-muted/70">
          © {new Date().getFullYear()} Parsa Noori. Built with React, Tailwind & Framer Motion.
        </p>
      </div>
    </footer>
  )
}
