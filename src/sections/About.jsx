import React from "react";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { skillsSection, SkillBars } from "../portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const pointIcons = [
  // rocket
  <svg key="0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // pipeline / infinity
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.6 6.62a5 5 0 0 1 0 7.07 4.9 4.9 0 0 1-7.03 0L8.4 10.62a4.9 4.9 0 0 0-7.03 0 5 5 0 0 0 0 7.07 4.9 4.9 0 0 0 7.03 0l3.17-3.07a4.9 4.9 0 0 1 7.03 0" transform="scale(0.95) translate(0.6 0.6)" />
  </svg>,
  // sparkles / AI
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
  </svg>,
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="cine-section" id="about">
      <div className="cine-container">
        <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.lead} />

        <div className="about-grid">
          <Reveal>
            <div className="about-points">
              {t.about.points.map((skill, i) => (
                <div className="cine-glass about-point" key={skill}>
                  <div className="about-point-icon">{pointIcons[i % pointIcons.length]}</div>
                  <p>{skill}</p>
                </div>
              ))}
            </div>

            <div className="prof-bars">
              {SkillBars.map((bar) => (
                <div key={bar.Stack}>
                  <div className="prof-bar-label">
                    <span>{bar.Stack}</span>
                    <span>{bar.progressPercentage}%</span>
                  </div>
                  <div className="prof-bar-track">
                    <div
                      className="prof-bar-fill"
                      style={{ width: `${bar.progressPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="tech-grid">
              {skillsSection.softwareSkills.map((skill) => (
                <div className="tech-item" key={skill.skillName} title={skill.skillName}>
                  <span
                    className="iconify"
                    data-icon={skill.fontAwesomeClassname}
                    data-inline="false"
                  ></span>
                  <span className="tech-name">{skill.skillName}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
