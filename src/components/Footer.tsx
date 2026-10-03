import React from 'react'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolio'
import './Footer.css'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">PK</span>
          <span className="footer__name">{personalInfo.name}</span>
        </div>

        <p className="footer__tagline">
          Full Stack Developer · Bengaluru, India
        </p>

        <div className="footer__social">
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer__social-link"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name}. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  )
}

export default Footer
