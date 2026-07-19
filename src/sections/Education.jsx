import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import SectionHead from "../components/SectionHead";
import { educationInfo } from "../portfolio";
import { useLanguage } from "../i18n/LanguageContext";

const Education = () => {
  const ref = useRef(null);
  const { t, tEdu, lang } = useLanguage();

  // Most recent first, matching the experience section
  const entries = [...educationInfo].reverse();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The spine draws itself as you scroll through the timeline
        gsap.from(".timeline-line-fill", {
          scaleY: 0,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        });

        gsap.utils.toArray(".timeline-item").forEach((item) => {
          const fromLeft = item.classList.contains("is-left");
          const tl = gsap.timeline({
            scrollTrigger: { trigger: item, start: "top 78%", once: true },
          });
          tl.from(item.querySelector(".timeline-dot"), {
            scale: 0,
            duration: 0.4,
            ease: "back.out(2.5)",
          }).from(
            item.querySelector(".timeline-card"),
            {
              autoAlpha: 0,
              x: fromLeft ? -48 : 48,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.15"
          );
        });
      });
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <section className="cine-section" id="education" ref={ref}>
      <div className="cine-container">
        <SectionHead eyebrow={t.edu.eyebrow} title={t.edu.title} lead={t.edu.lead} />

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true">
            <div className="timeline-line-fill" />
          </div>

          {entries.map((edu, i) => {
            const localized = tEdu(edu.subHeader, edu);
            const subHeader = localized.subHeader || edu.subHeader;
            const desc = localized.desc || edu.desc;
            const bullets = localized.bullets ?? edu.descBullets;
            const side = i % 2 === 0 ? "is-left" : "is-right";

            return (
              <div className={`timeline-item ${side}`} key={`${edu.schoolName}-${edu.subHeader}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <article className="cine-glass cine-tilt timeline-card">
                  <p className="xp-date">{edu.duration}</p>
                  <h3 className="edu-school">{edu.schoolName}</h3>
                  <p className="edu-degree">{subHeader}</p>
                  <p className="edu-desc">{desc}</p>
                  {bullets.length > 0 && (
                    <ul className="edu-bullets">
                      {bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
