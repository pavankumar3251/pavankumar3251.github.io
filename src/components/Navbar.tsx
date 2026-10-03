import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, FileText } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useScrollSpy } from '../hooks/useInView'
import { personalInfo } from '../data/portfolio'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner container">
          <button className="navbar__logo" onClick={() => scrollTo('home')} aria-label="Go to top">
            <span className="navbar__logo-mark">PK</span>
          </button>

          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`navbar__link${activeSection === link.id ? ' navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              className="navbar__icon-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline navbar__resume-btn"
            >
              <FileText size={15} />
              Resume
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`mobile-menu__link${activeSection === link.id ? ' mobile-menu__link--active' : ''}`}
              onClick={() => scrollTo(link.id)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}
          <div className="mobile-menu__footer">
            <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}
    </>
  )
}

export default Navbar
