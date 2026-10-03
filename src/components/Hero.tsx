import React from 'react'
import { ArrowDown, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo, techStrip } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Hero.css'

const Hero: React.FC = () => {
  const { ref: heroRef, inView } = useInView(0.1)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={heroRef as React.RefObject<HTMLElement>}>
      {/* Dot grid background */}
      <div className="hero__dot-grid" aria-hidden="true" />

      {/* Animated floating orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      <div className="container hero__container">
        <div className={`hero__content animate-fade-up ${inView ? 'in-view' : ''}`}>
          <div className="hero__status">
            <span className="hero__status-dot" />
            <span>Open to new opportunities</span>
          </div>

          <h1 className="hero__name">
            {personalInfo.name}
          </h1>

          <div className="hero__role">
            {personalInfo.role}
          </div>

          <p className="hero__headline">
            Building scalable web applications across frontend, backend, APIs, databases, and cloud.
          </p>

          <p className={`hero__bio animate-fade-up delay-2 ${inView ? 'in-view' : ''}`}>
            Application Developer with 2 years of experience building and enhancing enterprise web
            applications, developing APIs and backend services, integrating databases and external
            systems, troubleshooting production issues, and delivering solutions across cloud
            environments.
          </p>

          <div className={`hero__actions animate-fade-up delay-3 ${inView ? 'in-view' : ''}`}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
              <ArrowDown size={15} />
            </button>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          <div className={`hero__social animate-fade-up delay-4 ${inView ? 'in-view' : ''}`}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={`hero__tech-strip animate-fade-up delay-5 ${inView ? 'in-view' : ''}`}>
          <span className="hero__tech-label">Core stack</span>
          <div className="hero__tech-tags">
            {techStrip.map(tech => (
              <span key={tech} className="hero__tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy section divider */}
      <div className="hero__divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--bg-surface)" />
        </svg>
      </div>

      <div className="hero__scroll-hint">
        <button
          className="hero__scroll-btn"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  )
}

export default Hero
