import React from 'react'
import { Code2, Server, Database, Cloud, Wrench, Bug } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './About.css'

const highlights = [
  {
    icon: <Code2 size={18} />,
    title: 'Frontend Development',
    desc: 'React.js, TypeScript, JavaScript — building responsive, component-driven interfaces.',
  },
  {
    icon: <Server size={18} />,
    title: 'Backend & APIs',
    desc: 'GraphQL APIs, REST services, Node.js backend logic, and system integrations.',
  },
  {
    icon: <Database size={18} />,
    title: 'Database Integration',
    desc: 'MySQL and other data sources — schema design, queries, and data troubleshooting.',
  },
  {
    icon: <Cloud size={18} />,
    title: 'Cloud Development',
    desc: 'Azure cloud environments, CI/CD pipelines, and multi-environment deployments.',
  },
  {
    icon: <Bug size={18} />,
    title: 'Production Support',
    desc: 'Defect investigation, log analysis, API debugging, and monitoring with Dynatrace.',
  },
  {
    icon: <Wrench size={18} />,
    title: 'Agile Delivery',
    desc: 'Collaborating across teams in Agile workflows using Jira and ServiceNow.',
  },
]

const About: React.FC = () => {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`animate-fade-up ${inView ? 'in-view' : ''}`}>
          <p className="section-label">About</p>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about__grid">
          <div className={`about__bio animate-fade-up delay-1 ${inView ? 'in-view' : ''}`}>
            <p>
              I'm a Full Stack Developer based in Bengaluru, India, currently working at IBM
              through iBridge Techsoft Pvt Ltd. My work involves building and enhancing enterprise
              web applications — from React.js frontends and TypeScript backend services to GraphQL
              APIs and database integrations.
            </p>
            <p>
              I enjoy working across the full stack: implementing frontend features, writing API
              resolvers and backend logic, and connecting it all with data layers. I also spend
              significant time on production support — analyzing logs, debugging API responses,
              and resolving application issues in multi-environment setups.
            </p>
            <p>
              I'm pursuing a Master of Computer Applications with a specialization in AI/ML at
              Lovely Professional University and have a growing interest in generative AI and its
              practical engineering applications.
            </p>
            <div className="about__meta">
              <div className="about__meta-item">
                <span className="about__meta-label">Location</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Role</span>
                <span>{personalInfo.role}</span>
              </div>
              <div className="about__meta-item">
                <span className="about__meta-label">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="about__email">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className={`about__highlights animate-fade-up delay-2 ${inView ? 'in-view' : ''}`}>
            {highlights.map((item, i) => (
              <div key={i} className="about__highlight-card">
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <div className="about__highlight-title">{item.title}</div>
                  <div className="about__highlight-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
