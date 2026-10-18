import React, { useEffect, useState } from "react";
import CertificateCard from "./components/CertificateCard.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ContactLinkCard from "./components/ContactLinkCard.jsx";
import EducationCard from "./components/EducationCard.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import SkillCard from "./components/SkillCard.jsx";
import { ArrowIcon, CheckIcon, CodeIcon, ShieldIcon } from "./components/Icons.jsx";
import {
  certificates,
  contactLinks,
  education,
  experiences,
  projects,
  skillGroups,
} from "./data/portfolioData.js";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.15, 0.4],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="site-shell">
      <SiteHeader
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main>
        <section className="hero-section page-width" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              HOME <span>/</span> BLUE TEAM / WEB SYSTEMS
              <span className="location-label">KATHMANDU, NEPAL</span>
            </p>

            <p className="intro-name">
              Janit Saru Magar <span>/</span> Cybersecurity undergraduate
            </p>

            <h1 className="hero-title">
              Building for
              <br />
              the <span className="blue-text">web.</span>
              <br />
              <span className="muted-title">Defending</span>
              <br />
              the digital world.
            </h1>

            <p className="hero-description">
              A web developer and QA/QC tester learning to make digital systems
              more reliable, resilient, and secure.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button hover-card"
                type="button"
                onClick={() => scrollToSection("projects")}
              >
                EXPLORE CONTRIBUTIONS <ArrowIcon />
              </button>
              <button
                className="text-button"
                type="button"
                onClick={() => scrollToSection("contact")}
              >
                LET'S CONNECT <span aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="scroll-prompt">
              <span className="small-label">01—08</span>
              <span className="scroll-line" />
              <span>Scroll to inspect</span>
              <span className="blue-text" aria-hidden="true">↓</span>
            </div>
          </div>

          <div className="console-column">
            <div className="defense-console hover-card">
              <div className="console-heading">
                <div className="console-name">
                  <CodeIcon />
                  <span>DEFENSE_CONSOLE</span>
                </div>
                <span className="small-label">SESSION / JSM-02</span>
              </div>

              <div className="console-lines">
                <p><span>01</span> <b>focus</b> = "secure, usable web"</p>
                <p><span>02</span> <b>role</b> = "QA/QC Tester at Void Nepal"</p>
                <p><span>03</span> <b>study</b> = "Cybersecurity / year 02"</p>
                <div className="console-rule" />
                <p className="console-note"><span>04</span> <i>●</i> Defensive mindset initialized</p>
                <p className="console-note"><span>05</span> <i>●</i> Quality checks in progress</p>
                <p className="systems-badge"><span className="status-dot" /> SYSTEMS UNDER WATCH</p>
              </div>

              <div className="console-footer">
                <div><span>BUILD</span><strong>Web</strong></div>
                <div><span>TEST</span><strong>Quality</strong></div>
                <div><span>DEFEND</span><strong>Blue Team</strong></div>
              </div>
            </div>

            <div className="based-in hover-card">
              <span className="small-label">BASED IN</span>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="about">
          <div className="section-layout">
            <SectionHeading number="01" title="ABOUT" />
            <div className="section-content">
              <p className="lead-copy">
                I work at the meeting point of <span className="blue-text">web development</span>,
                software quality, and defensive security.
              </p>
              <p className="body-copy">
                I am a second-year Cybersecurity undergraduate at Herald College
                Kathmandu. I am interested in web application security and Blue
                Team operations, and in understanding how the systems we build
                can be made more dependable.
              </p>
              <p className="body-copy">
                My QA/QC role is with Void Nepal Private Limited. Separately,
                with the Ethical HCK Community, I support marketing, platform
                operations, and web management.
              </p>

              <div className="about-notes">
                <div className="note-item">
                  <ShieldIcon />
                  <div>
                    <h3>Defensive by default</h3>
                    <p>Learning to protect the systems people rely on.</p>
                  </div>
                </div>
                <div className="note-item">
                  <CheckIcon />
                  <div>
                    <h3>Quality in the details</h3>
                    <p>Testing as part of building with care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tinted-section" id="skills">
          <div className="page-width content-section">
            <div className="section-layout section-intro">
              <SectionHeading number="02" title="SKILLS" />
              <p className="section-summary">
                A growing toolkit shaped by web work, hands-on quality checks,
                and a practical interest in digital defense.
              </p>
            </div>

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <SkillCard group={group} key={group.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="experience">
          <div className="section-layout">
            <SectionHeading number="03" title="EXPERIENCE" />
            <div className="experience-list">
              {experiences.map((experience) => (
                <ExperienceCard experience={experience} key={experience.number} />
              ))}
            </div>
          </div>
        </section>

        <section className="tinted-section" id="projects">
          <div className="page-width content-section">
            <div className="section-layout section-intro">
              <SectionHeading number="04" title="PROJECTS" />
              <p className="section-summary">
                Selected work and contributions from web development and the
                cybersecurity community.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  featured={index === 0}
                  key={project.number}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="education">
          <div className="section-layout">
            <SectionHeading number="05" title="EDUCATION" />
            <div className="education-list">
              {education.map((item) => (
                <EducationCard item={item} key={item.school} />
              ))}
            </div>
          </div>
        </section>

        <section className="tinted-section" id="certificates">
          <div className="page-width content-section">
            <div className="section-layout section-intro">
              <SectionHeading number="06" title="CERTIFICATES" />
              <p className="section-summary">
                Certificates for completed training and community volunteering.
              </p>
            </div>

            <div className="certificate-grid">
              {certificates.map((certificate) => (
                <CertificateCard
                  certificate={certificate}
                  key={certificate.number}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="contact">
          <div className="contact-section-heading">
            <SectionHeading number="07" title="CONTACT" />
            <p className="contact-intro">SEND A MESSAGE DIRECTLY.</p>
          </div>

          <div className="contact-grid">
            <article className="contact-window hover-card">
              <div className="contact-window-bar">
                <div className="contact-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>~/contact_info.sh</span>
              </div>

              <div className="contact-window-body">
                <h3 className="contact-terminal-title">$ cat contact_info</h3>
                <div className="contact-link-list">
                  {contactLinks.map((link) => (
                    <ContactLinkCard key={link.name} link={link} />
                  ))}
                </div>

                <div className="contact-security-note">
                  <p><span aria-hidden="true">✓</span> Secure communication</p>
                  <span>For sensitive information, use encrypted channels.</span>
                </div>
              </div>
            </article>

            <article className="contact-window hover-card">
              <div className="contact-window-bar">
                <div className="contact-window-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>~/send_message.sh</span>
              </div>
              <ContactForm />
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <button
          className="footer-brand"
          type="button"
          onClick={() => scrollToSection("home")}
        >
          <ShieldIcon /> JANIT SARU MAGAR <span>↑</span>
        </button>
        <p>BUILD FOR THE WEB. DEFEND THE DIGITAL WORLD.</p>
        <p>KATHMANDU / NEPAL</p>
      </footer>
    </div>
  );
}

export default App;
