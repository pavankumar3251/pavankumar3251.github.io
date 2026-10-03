import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education, certifications } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Education.css'

const Education: React.FC = () => {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`animate-fade-up ${inView ? 'in-view' : ''}`}>
          <p className="section-label">Education</p>
          <h2 className="section-title">Education & certifications</h2>
        </div>

        <div className="education__layout">
          {/* Education */}
          <div className={`education__col animate-fade-up delay-1 ${inView ? 'in-view' : ''}`}>
            <div className="education__col-header">
              <GraduationCap size={18} />
              <span>Academic</span>
            </div>
            <div className="education__entries">
              {education.map((edu, idx) => (
                <div key={idx} className="education__entry">
                  <div className="education__entry-icon">
                    <BookOpen size={15} />
                  </div>
                  <div className="education__entry-body">
                    <h3 className="education__degree">{edu.degree}</h3>
                    {edu.specialization && (
                      <div className="education__specialization">{edu.specialization}</div>
                    )}
                    <div className="education__institution">{edu.institution}</div>
                    <div className="education__meta">
                      {edu.mode && <span className="tag">{edu.mode}</span>}
                      <span className="education__period">{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className={`education__col animate-fade-up delay-2 ${inView ? 'in-view' : ''}`}>
            <div className="education__col-header">
              <Award size={18} />
              <span>Certifications</span>
            </div>
            <div className="education__certs">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-card__icon">
                    <Award size={16} />
                  </div>
                  <div>
                    <div className="cert-card__title">{cert.title}</div>
                    <div className="cert-card__issuer">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
