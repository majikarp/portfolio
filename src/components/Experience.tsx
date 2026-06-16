import { experience } from '../data'

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Experience</p>
        <ul className="experience-list">
          {experience.map((role, i) => (
            <li key={i} className="experience-item">
              <span className="experience-company">{role.company}</span>
              <span className="experience-period">{role.period}</span>
              <span className="experience-role">{role.role}</span>
              {role.highlights && (
                <ul className="experience-highlights">
                  {role.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
