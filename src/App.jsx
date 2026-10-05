import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">VP</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-resume" href="#contact">
          Resume
        </a>
      </nav>

      {/* Hero */}
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-label">FULL-STACK DEVELOPER</p>

            <h1>
              Hi, I'm <span>Vathsa Ponnappa.</span>
            </h1>

            <h2>
              Full Stack Development, Cloud Deployment &amp; CI/CD.
            </h2>

            <p className="hero-description">
              Computer Science Engineering graduate with internship
              experience in full-stack development, mobile app development,
              cloud deployment and DevOps.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>AWS</span>
              <span>Docker</span>
              <span>DevOps</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-card">
              <div className="code-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const developer = {
  name: "Vathsa Ponnappa",
  role: "Full-Stack Developer",
  focus: [
    "Full Stack",
    "Cloud",
    "DevOps",
    "CI/CD"
  ],
  project: "AidConnect"
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building technology with purpose.
          </h2>

          <div className="about-grid">
            <div>
              <p>
                I'm a Computer Science Engineering graduate from East Point
                College of Engineering &amp; Technology with an interest in
                full-stack development, cloud deployment and DevOps.
              </p>

              <p>
                I have internship experience across two Bengaluru-based
                companies, working on professional LMS and e-commerce
                products. I enjoy building REST APIs, responsive interfaces,
                mobile applications and deployment pipelines.
              </p>
            </div>

            <div className="about-highlight">
              <div>
                <strong>01</strong>
                <span>Full-Stack Development</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Cloud &amp; DevOps</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Mobile Applications Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2 className="section-title">
            Technologies I work with.
          </h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages</h3>
              <p>JavaScript · Dart · Python · SQL</p>
            </div>

            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML · CSS · React.js · Flutter</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js · Express.js · REST APIs</p>
            </div>

            <div className="skill-card">
              <h3>Database</h3>
              <p>MongoDB · MySQL</p>
            </div>

            <div className="skill-card">
              <h3>DevOps</h3>
              <p>
                Git · Docker · Jenkins · GitHub Actions · Azure DevOps ·
                CI/CD
              </p>
            </div>

            <div className="skill-card">
              <h3>Cloud &amp; Design</h3>
              <p>AWS EC2 · Linux Ubuntu · Visily</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">
            Industry experience.
          </h2>

          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Full-Stack Intern</h3>
                  <p>Cherry Techsoft Pvt Ltd · Bengaluru, India</p>
                </div>

                <span>Dec 2025 – May 2026</span>
              </div>

              <ul>
                <li>
                  Developed a cross-platform e-commerce mobile application
                  using Flutter and Dart.
                </li>

                <li>
                  Built and integrated RESTful backend APIs using Node.js
                  and Express.
                </li>

                <li>
                  Designed UI/UX screens using Visily before implementation.
                </li>

                <li>
                  Worked with Azure DevOps for sprint planning, Git,
                  work-item tracking and CI/CD.
                </li>

                <li>
                  Collaborated directly with the client to gather
                  requirements and deliver features.
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Full-Stack Developer Trainee</h3>
                  <p>
                    Suprmentr Technologies Pvt Ltd · Online Training Program
                  </p>
                </div>

                <span>Feb 2026 – May 2026</span>
              </div>

              <ul>
                <li>
                  Completed a structured MERN stack training program.
                </li>

                <li>
                  Built a full-stack Learning Management System as the
                  capstone project.
                </li>

                <li>
                  Developed RESTful APIs using Node.js and Express.
                </li>

                <li>
                  Built React.js components for course listings, progress
                  tracking and dashboards.
                </li>

                <li>
                  Designed MongoDB schemas and practised Git-based
                  version control and agile workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Project — AidConnect */}
        <section id="projects" className="section featured-project">
          <p className="section-label">FEATURED PROJECT</p>

          <div className="project-header">
            <div>
              <h2 className="section-title">
                AidConnect
              </h2>

              <p className="project-subtitle">
                Emergency assistance platform
              </p>
            </div>

            <span className="live-badge">
              ● LIVE
            </span>
          </div>

          <div className="project-content">
            <div className="project-info">
              <p>
                AidConnect is an emergency and community assistance
                platform designed to connect people requesting help with
                nearby verified responders and civilians.
              </p>

              <p>
                The application combines SOS assistance, real-time
                location, voice recording, AI analysis, authentication
                and responder workflows.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>AI</span>
                <span>Capacitor</span>
                <span>Render</span>
              </div>

              <div className="project-buttons">
                <a
                  href="https://aidconnect-1.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/vathsa-ponnappa/AidConnect"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="project-visual">
              <div className="sos-circle">
                <span>SOS</span>
                <small>AIDCONNECT</small>
              </div>
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="section">
          <p className="section-label">OTHER PROJECTS</p>

          <h2 className="section-title">
            More things I've built.
          </h2>

          <div className="projects-grid">
            <article className="project-card">
              <span>01</span>

              <h3>E-Commerce Platform</h3>

              <p>
                Full-stack e-commerce mobile application with product
                listings, cart management, order tracking and user
                authentication.
              </p>

              <div className="project-card-tech">
                MERN Stack · Docker · Jenkins · AWS EC2
              </div>
            </article>

            <article className="project-card">
              <span>02</span>

              <h3>Learning Management System</h3>

              <p>
                Multi-role LMS supporting Student, Instructor and Admin
                workflows with JWT authentication, RBAC, course creation,
                enrollment, progress tracking and quizzes.
              </p>

              <div className="project-card-tech">
                MERN Stack · JWT · Docker · Jenkins
              </div>
            </article>

            <article className="project-card">
              <span>03</span>

              <h3>Vehicle Service Slot Reservation System</h3>

              <p>
                Web application for booking vehicle service slots with
                time-based availability, user registration, bookings and
                garage management.
              </p>

              <div className="project-card-tech">
                React · Node.js · Express · MongoDB
              </div>
            </article>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section">
          <p className="section-label">CERTIFICATIONS</p>

          <h2 className="section-title">
            Certifications.
          </h2>

          <div className="certifications">
            <div className="cert-card">
              <span>01</span>
              <h3>Introduction to Generative AI</h3>
              <p>Google</p>
            </div>

            <div className="cert-card">
              <span>02</span>
              <h3>AWS Cloud Practitioner Essentials</h3>
              <p>AWS</p>
            </div>

            <div className="cert-card">
              <span>03</span>
              <h3>Database and SQL</h3>
              <p>Infosys</p>
            </div>

            <div className="cert-card">
              <span>04</span>
              <h3>Overview of Agile and DevOps</h3>
              <p>Infosys</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I'm open to full-stack, software engineering, cloud and
            DevOps opportunities.
          </p>

          <div className="contact-buttons">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=lingerivathsa@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="primary-button"
>
  Email Me
</a>

            <a
              href="tel:+919380554417"
              className="secondary-button"
            >
              9380554417
            </a>

            <a
              href="https://www.linkedin.com/in/vathsa-ponnappa/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/vathsa-ponnappa"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Vathsa Ponnappa</p>
        <p>Built with React.</p>
      </footer>
    </div>
  )
}

export default App