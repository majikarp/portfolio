import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Expertise</p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i}>
              <p className="skill-category-name">{group.category}</p>
              <ul className="skill-list">
                {group.skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
