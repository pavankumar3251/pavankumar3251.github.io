import React from 'react'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Contact.css'

const Contact: React.FC = () => {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="contact-section">
      <div className="container">
        <div className={`contact__inner animate-fade-up ${inView ? 'in-view' : ''}`}>
          <div className="contact__heading">
            <p className="section-label">Contact</p>
            <h2 className="contact__title">
              Let's build something<br />meaningful.
            </h2>
            <p className="contact__subtitle">
              Interested in working together or discussing an opportunity?
              Feel free to reach out.
            </p>
          </div>

          <div className={`contact__links animate-fade-up delay-2 ${inView ? 'in-view' : ''}`}>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link-card contact__link-card--primary"
            >
              <div className="contact__link-icon">
                <Mail size={20} />
              </div>
              <div className="contact__link-body">
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">{personalInfo.email}</span>
              </div>
              <ArrowRight size={16} className="contact__link-arrow" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link-card"
            >
              <div className="contact__link-icon">
                <GithubIcon size={20} />
              </div>
              <div className="contact__link-body">
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">github.com/pavankumar3251</span>
              </div>
              <ArrowRight size={16} className="contact__link-arrow" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link-card"
            >
              <div className="contact__link-icon">
                <LinkedinIcon size={20} />
              </div>
              <div className="contact__link-body">
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">LinkedIn Profile</span>
              </div>
              <ArrowRight size={16} className="contact__link-arrow" />
            </a>

            <div className="contact__link-card contact__link-card--static">
              <div className="contact__link-icon">
                <MapPin size={20} />
              </div>
              <div className="contact__link-body">
                <span className="contact__link-label">Location</span>
                <span className="contact__link-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
