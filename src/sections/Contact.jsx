import React from "react";
import Reveal from "../components/Reveal";
import { greetings, socialLinks } from "../portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  meduim: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
  blogger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
};

const labels = {
  github: "GitHub",
  linkedin: "LinkedIn",
  meduim: "Medium",
  blogger: "Blog",
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="cine-section" id="contact">
      <div className="cine-container">
        <Reveal>
          <div className="cine-premium cine-sheen contact-card">
            <p className="cine-eyebrow">{t.contact.eyebrow}</p>
            <h2 className="cine-display cine-silver">{t.contact.title}</h2>
            <div className="contact-ctas">
              <a
                className="cine-btn-light"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {t.contact.ctaContact}
              </a>
              <a className="cine-btn-dark" href={greetings.resumeLink} target="_blank" rel="noreferrer">
                {t.contact.ctaResume}
              </a>
            </div>
            <div className="socials">
              {Object.entries(socialLinks).map(([key, url]) => (
                <a
                  key={key}
                  className="social-link"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={labels[key] || key}
                  title={labels[key] || key}
                >
                  {icons[key] || labels[key]}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className="cine-footer">
          © {new Date().getFullYear()} {greetings.name} — {t.contact.footer}
        </footer>
      </div>
    </section>
  );
};

export default Contact;
