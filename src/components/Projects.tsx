import React from 'react'
import { ExternalLink, Clock, CheckCircle, Briefcase } from 'lucide-react'
import { GithubIcon } from './Icons'
import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Projects.css'

const Projects: React.FC = () => {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="projects-section">
      <div className="container">
        <div className={`animate-fade-up ${inView ? 'in-view' : ''}`}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle">
            A selection of personal and academic projects demonstrating full-stack development across different domains.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className={`project-card noise-card animate-fade-up delay-${Math.min(idx + 1, 6)} ${inView ? 'in-view' : ''}`}
            >
              <div className="project-card__header">
                <div className="project-card__status-row">
                  <span className={`project-card__status project-card__status--${
                    project.status === 'In Progress' ? 'progress'
                    : project.status === 'Work Project' ? 'work'
                    : 'done'
                  }`}>
                    {project.status === 'In Progress'
                      ? <><Clock size={11} /> In Progress</>
                      : project.status === 'Work Project'
                      ? <><Briefcase size={11} /> Work Project</>
                      : <><CheckCircle size={11} /> Completed</>
                    }
                  </span>
                  {idx === 0 && (
                    <span className="project-card__featured">Featured</span>
                  )}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
              </div>

              <div className="project-card__stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="project-card__links">
                {project.links.map((link, li) => {
                  const isGithub = link.label.toLowerCase().includes('github')
                  const isDemo = link.label.toLowerCase().includes('demo')
                  return (
                    <a
                      key={li}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-card__link${link.placeholder ? ' project-card__link--placeholder' : ''}`}
                      title={link.placeholder ? 'Link will be updated soon' : link.label}
                    >
                      {isGithub && <GithubIcon size={13} />}
                      {isDemo && <ExternalLink size={13} />}
                      {!isGithub && !isDemo && <ExternalLink size={13} />}
                      <span>{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
