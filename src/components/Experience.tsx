import React from 'react'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Experience.css'

const Experience: React.FC = () => {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="experience-section">
      <div className="container">
        <div className={`animate-fade-up ${inView ? 'in-view' : ''}`}>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work experience</h2>
          <p className="section-subtitle">
            Professional experience in enterprise application development.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className={`experience__card animate-fade-up delay-${idx + 1} ${inView ? 'in-view' : ''}`}
            >
              <div className="experience__card-header">
                <div className="experience__left">
                  <div className="experience__timeline-dot" />
                  <div>
                    <h3 className="experience__title">{job.title}</h3>
                    <div className="experience__company">{job.company}</div>
                  </div>
                </div>
                <div className="experience__meta">
                  <span className="experience__meta-item">
                    <Calendar size={13} />
                    {job.period}
                  </span>
                  <span className="experience__meta-item">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="experience__responsibilities">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="experience__resp-item">
                    <CheckCircle2 size={14} className="experience__check" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
