import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../lib/gsap";
import { useLanguage } from "../i18n/LanguageContext";

const chips = ["Node.js", "NestJS", "Python", "Django", ".NET", "React", "Docker", "Kubernetes", "Azure"];

const Hero = () => {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const { t, lang } = useLanguage();

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root, { autoAlpha: 1 });
        root.classList.add("is-ready");
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(ref);
        const heading = q("h1")[0];
        const useWordSplit = lang === "ar";
        const split = new SplitText(heading, {
          type: useWordSplit ? "words" : "chars,words",
          mask: useWordSplit ? "words" : "chars",
          ...(useWordSplit ? { wordsClass: "split-word" } : { charsClass: "split-char" }),
        });

        gsap.set(root, { autoAlpha: 1 });
        root.classList.add("is-ready");

        const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
        intro
          .from(q(".cine-eyebrow"), { autoAlpha: 0, y: 16, duration: 0.55 })
          .from(
            useWordSplit ? split.words : split.chars,
            {
              yPercent: 110,
              autoAlpha: 0,
              rotateX: useWordSplit ? 0 : -28,
              duration: 0.75,
              stagger: useWordSplit ? 0.06 : 0.016,
            },
            "-=0.25"
          )
          .from(q(".hero-desc"), { autoAlpha: 0, y: 22, duration: 0.65 }, "-=0.4")
          .from(q(".hero-ctas > *"), { autoAlpha: 0, y: 16, duration: 0.45, stagger: 0.08 }, "-=0.35")
          .from(
            q(".cine-chip"),
            { autoAlpha: 0, y: 10, scale: 0.96, duration: 0.35, stagger: 0.035 },
            "-=0.3"
          )
          .from(
            q(".hero-card"),
            { autoAlpha: 0, y: 36, rotateX: 10, duration: 0.85, ease: "power2.out" },
            "-=0.85"
          )
          .from(q(".hero-stat"), { autoAlpha: 0, x: 20, duration: 0.45, stagger: 0.08 }, "-=0.45")
          .from(q(".hero-scroll"), { autoAlpha: 0, y: 8, duration: 0.4 }, "-=0.2");

        const card = cardRef.current;
        const cleanups = [() => split.revert()];

        if (card && window.matchMedia("(pointer: fine)").matches) {
          const onMove = (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, {
              rotateY: px * 8,
              rotateX: -py * 8,
              transformPerspective: 900,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          };
          const onLeave = () => {
            gsap.to(card, {
              rotateY: 0,
              rotateX: 0,
              duration: 0.6,
              ease: "expo.out",
              overwrite: "auto",
            });
          };
          card.addEventListener("pointermove", onMove);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointermove", onMove);
            card.removeEventListener("pointerleave", onLeave);
          });
        }

        return () => cleanups.forEach((fn) => fn());
      });

      // Desktop-only cinematic pin — avoids mobile layout jumps
      mm.add(
        "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
        () => {
          const q = gsap.utils.selector(ref);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=55%",
                scrub: 0.85,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              q(".hero-copy"),
              { yPercent: 0, autoAlpha: 1, scale: 1 },
              {
                yPercent: -10,
                autoAlpha: 0.5,
                scale: 0.97,
                ease: "power1.in",
                immediateRender: false,
              },
              0
            )
            .fromTo(
              q(".hero-card"),
              { yPercent: 0, autoAlpha: 1, rotate: 0 },
              {
                yPercent: -16,
                autoAlpha: 0.6,
                rotate: -1.5,
                ease: "power1.in",
                immediateRender: false,
              },
              0
            )
            .to(q(".hero-scroll"), { autoAlpha: 0, ease: "none" }, 0);
        }
      );
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <header className="hero gsap-cloak" id="top" ref={ref}>
      <div className="cine-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="cine-eyebrow">{t.hero.eyebrow}</p>
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

          <div className="cine-premium cine-sheen hero-card" ref={cardRef}>
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
