export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-name">Sophia Dao</h1>
        <p className="hero-title">Senior Frontend Engineer</p>
        <p className="hero-bio">
          I build UI infrastructure that designers trust and engineers maintain —
          design systems, accessible components, and high-performance interfaces
          that hold up at scale. 11+ years at the intersection of design and engineering.
        </p>
        <div className="hero-links">
          <a
            href="https://linkedin.com/in/sodao"
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/majikarp"
            className="hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:hello@sophdao.com" className="hero-link">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
