import React, { useState } from 'react'
import { skills } from '../data/portfolio'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const categoryIcons: Record<string, string> = {
  'Languages': '{ }',
  'Frontend': '◱',
  'Backend & APIs': '⬡',
  'Database & CMS': '◫',
  'Cloud & Development': '☁',
  'Engineering': '⚙',
  'Tools': '⊞',
  'AI': '◈',
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView(0.1)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Object.keys(skills)

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={`animate-fade-up ${inView ? 'in-view' : ''}`}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-subtitle">
            A working toolkit built through enterprise development, production support, and personal projects.
          </p>
        </div>

        <div className={`skills__grid animate-fade-up delay-1 ${inView ? 'in-view' : ''}`}>
          {categories.map((category, idx) => {
            const categorySkills = skills[category as keyof typeof skills]
            const isActive = activeCategory === category

            return (
              <div
                key={category}
                className={`skills__card noise-card${isActive ? ' skills__card--active' : ''}`}
                style={{ animationDelay: `${idx * 0.07}s` }}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="skills__card-header">
                  <span className="skills__category-icon" aria-hidden="true">
                    {categoryIcons[category] || '●'}
                  </span>
                  <h3 className="skills__category-name">{category}</h3>
                </div>
                <div className="skills__tags">
                  {categorySkills.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
