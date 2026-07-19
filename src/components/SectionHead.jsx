import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "../lib/gsap";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Section heading with a scroll-triggered word-by-word reveal.
 * Re-splits whenever the language changes.
 */
const SectionHead = ({ eyebrow, title, lead }) => {
  const ref = useRef(null);
  const { lang } = useLanguage();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heading = ref.current.querySelector("h2");
        const split = new SplitText(heading, { type: "words", mask: "words", wordsClass: "split-word" });

        gsap.set(ref.current, { autoAlpha: 1 });
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });

        tl.from(ref.current.querySelector(".cine-eyebrow"), {
          autoAlpha: 0,
          y: 16,
          duration: 0.5,
          ease: "power2.out",
        })
          .from(
            split.words,
            {
              yPercent: 110,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .from(
            ref.current.querySelector(".cine-lead"),
            { autoAlpha: 0, y: 20, duration: 0.6, ease: "power2.out" },
            "-=0.4"
          );

        return () => split.revert();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(ref.current, { autoAlpha: 1 });
      });
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <div className="section-head" ref={ref} style={{ visibility: "hidden" }}>
      <p className="cine-eyebrow">{eyebrow}</p>
      {/* Key by language: SplitText mutates the DOM, so force a fresh node on switch */}
      <h2 className="cine-display cine-silver split-mask" key={lang}>
        {title}
      </h2>
      {lead && <p className="cine-lead">{lead}</p>}
    </div>
  );
};

export default SectionHead;
