import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../lib/gsap";
import { useLanguage } from "../i18n/LanguageContext";

const chips = ["Node.js", "NestJS", "Python", "Django", ".NET", "React", "Docker", "Kubernetes", "Azure"];

const Hero = () => {
  const ref = useRef(null);
  const { t, lang } = useLanguage();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(ref);
        const heading = q("h1")[0];
        const split = new SplitText(heading, { type: "chars,words", mask: "chars", charsClass: "split-char" });

        gsap.set(ref.current, { autoAlpha: 1 });

        // Entrance choreography
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(q(".cine-eyebrow"), { autoAlpha: 0, y: 14, duration: 0.6 })
          .from(
            split.chars,
            { yPercent: 105, autoAlpha: 0, duration: 0.8, stagger: 0.018 },
            "-=0.3"
          )
          .from(q(".hero-desc"), { autoAlpha: 0, y: 24, duration: 0.7 }, "-=0.45")
          .from(q(".hero-ctas > *"), { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.1 }, "-=0.4")
          .from(q(".cine-chip"), { autoAlpha: 0, y: 12, duration: 0.35, stagger: 0.04 }, "-=0.35")
          .from(
            q(".hero-card"),
            { autoAlpha: 0, y: 40, rotateX: 8, duration: 0.9, ease: "power2.out" },
            "-=0.9"
          )
          .from(q(".hero-stat"), { autoAlpha: 0, x: 24, duration: 0.5, stagger: 0.09 }, "-=0.5");

        // Cinematic exit: hero is pinned while the scene recedes.
        // fromTo with explicit start values so scrolling back up always
        // restores full opacity (a plain .to() can capture dim mid-entrance
        // values as its starting point). Fades use power1.in so the scene
        // stays readable for most of the pin and only dims near the end.
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: "top top",
              end: "+=60%",
              scrub: 0.8,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
            },
          })
          .fromTo(
            q(".hero-copy"),
            { yPercent: 0, autoAlpha: 1, scale: 1 },
            { yPercent: -12, autoAlpha: 0.45, scale: 0.96, ease: "power1.in", immediateRender: false },
            0
          )
          .fromTo(
            q(".hero-card"),
            { yPercent: 0, autoAlpha: 1, rotate: 0 },
            { yPercent: -20, autoAlpha: 0.55, rotate: -2, ease: "power1.in", immediateRender: false },
            0
          )
          .to(q(".hero-scroll"), { autoAlpha: 0, ease: "none" }, 0);

        return () => split.revert();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { autoAlpha: 1 });
      });
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <header className="hero" id="top" ref={ref} style={{ visibility: "hidden" }}>
      <div className="cine-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="cine-eyebrow">{t.hero.eyebrow}</p>
            {/* Key by language: SplitText mutates the DOM, so force a fresh node on switch */}
            <h1 className="cine-display cine-silver split-mask" key={lang}>
              {t.hero.greeting}
              <br />
              {t.hero.name}
            </h1>
            <p className="cine-lead hero-desc">{t.hero.bio}</p>

            <div className="hero-ctas">
              <a className="cine-btn-light" href="#projects">
                {t.hero.ctaWork}
              </a>
              <a className="cine-btn-dark" href="#contact">
                {t.hero.ctaContact}
              </a>
            </div>

            <div className="hero-chips">
              {chips.map((chip) => (
                <span className="cine-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="cine-premium hero-card">
            <div className="hero-card-head">
              <div className="hero-monogram">MB</div>
              <span className="cine-eyebrow">{t.hero.trackRecord}</span>
            </div>
            <div className="hero-stats">
              {t.hero.stats.map((item) => (
                <div className="hero-stat" key={item.strong}>
                  <strong>{item.strong}</strong>
                  <span>{item.soft}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="hero-scroll">{t.hero.scroll}</span>
    </header>
  );
};

export default Hero;
