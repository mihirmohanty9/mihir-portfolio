import './App.css';

const skills = [
  'Java',
  'Python',
  'JavaScript',
  'SQL',
  'Spring Boot',
  'Spring MVC',
  'Spring Framework',
  'REST APIs',
  'Microservices',
  'OpenFeign',
  'Spring AI',
  'Gemini API',
  'LLMs',
  'Prompt Engineering',
  'RAG',
  'Embeddings',
  'Vector Databases',
  'MCP'
];

const projectHighlights = [
  'Room booking and reservation system',
  'Guest and staff management workflow',
  'Billing, invoices, and payment tracking',
  'Admin dashboard and operational reporting'
];

const stats = [
  { value: '18+', label: 'Core skills' },
  { value: '100%', label: 'Job-ready focus' }
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Mihir</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section-card">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer</p>
            <h1>Building scalable backend systems with modern AI integrations.</h1>
            <p className="subtitle">
              I create scalable Java applications and integrate modern AI capabilities like Spring AI, Gemini API, LLMs, RAG, and vector databases to solve real-world business problems.
            </p>
            <div className="cta-row">
              <a className="primary-btn" href="#projects">View Project</a>
              <a className="secondary-btn" href="#contact">Contact Me</a>
            </div>
            <ul className="mini-list">
              <li>Backend engineering</li>
              <li>AI integrations</li>
              <li>Scalable design</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="profile-card">
              <div className="avatar-ring">
                <div className="avatar">M</div>
              </div>
              <div className="panel-content">
                <span className="status-dot" />
                Available for opportunities
              </div>
            </div>
          </div>
        </section>

        <section className="stats-row">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="content-grid">
          <div className="section-card about-card">
            <p className="section-label">About</p>
            <h2>Developing reliable software and practical AI-driven experiences.</h2>
            <p>
              I focus on Java-based backend systems, REST APIs, and modern AI-powered application workflows. My interest lies in combining enterprise-grade engineering with intelligent automation, retrieval systems, and data-driven decision support.
            </p>
          </div>

          <div className="section-card info-card">
            <ul>
              <li><span>Specialization</span> Java + AI</li>
              <li><span>Focus</span> Backend systems</li>
              <li><span>Core stack</span> Spring Boot, Java, SQL</li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section-card skills-card">
          <p className="section-label">Skills</p>
          <h2>Technologies I work with.</h2>
          <div className="chip-list">
            {skills.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <p className="section-label">Projects</p>
          <h2>Featured project</h2>
          <article className="project-card feature-project">
            <div className="project-topline">
              <span className="project-badge">Hotel Management System</span>
              <span className="project-type">Backend Project</span>
            </div>
            <h3>Smart hotel operations platform</h3>
            <p>
              A complete hotel management solution designed to streamline room booking, reservation handling, guest records, billing, and daily operational activities across the hotel workflow.
            </p>
            <ul className="project-highlights">
              {projectHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="section-label">Contact</p>
          <h2>Let’s build something impactful.</h2>
        </div>
        <div className="footer-actions">
          <a href="mailto:mihirmohanty2005@gmail.com" className="primary-btn">mihirmohanty2005@gmail.com</a>
          <a href="https://github.com/mihirmohanty9" target="_blank" rel="noreferrer" className="secondary-btn">GitHub</a>
          <a href="https://www.linkedin.com/in/mihir-mohanty-072722376" target="_blank" rel="noreferrer" className="secondary-btn">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
