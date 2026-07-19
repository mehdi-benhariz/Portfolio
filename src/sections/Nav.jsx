import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";
import { useLanguage, LANGUAGES } from "../i18n/LanguageContext";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop to avoid stuck overlay
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={`cine-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="cine-nav-inner">
        <a href="#top" className="cine-nav-logo" aria-label="Back to top">
          MEHDI<span>.</span>
        </a>

        <ul className={`cine-nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="cine-nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LANGUAGES.map((code) => (
              <button
                key={code}
                className={`lang-btn ${lang === code ? "is-active" : ""}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <a className="cine-btn-light" href={greetings.resumeLink} target="_blank" rel="noreferrer">
            {t.nav.resume}
          </a>

          <button
            className="cine-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
