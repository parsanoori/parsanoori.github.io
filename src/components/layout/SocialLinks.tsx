import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { social } from '../../data/social'

const links = [
  { href: social.github, label: 'GitHub', Icon: FaGithub },
  { href: social.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: social.instagram, label: 'Instagram', Icon: FaInstagram },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-text-muted transition-colors hover:text-accent-light"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}
