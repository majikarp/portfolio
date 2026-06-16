import { projects } from '../data'

export default function Work() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <ul className="work-list">
          {projects.map((project, i) => (
            <li key={i} className="work-item">
              <div className="work-header">
                <div className="work-meta">
                  <span className="work-product">{project.product}</span>
                  <span className="work-company">{project.company}</span>
                </div>
                <span className="work-period">{project.period}</span>
              </div>
              <p className="work-description">{project.description}</p>
              <a
                href={project.url}
                className="work-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.url.replace('https://', '').replace('www.', '')} ↗
              </a>
              {project.image && (
                <div className="work-image-wrap">
                  <img
                    src={project.image}
                    alt={project.product}
                    className="work-image"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
