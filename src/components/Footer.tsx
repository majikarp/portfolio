export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">© 2026 Sophia Dao</span>
          <div className="footer-links">
            <a
              href="https://linkedin.com/in/sodao"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/majikarp"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:hello@sophdao.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
