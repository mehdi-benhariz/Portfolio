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
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      const markReady = () => root.classList.add("is-ready");

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heading = root.querySelector("h2");
        const split = new SplitText(heading, {
          type: "words",
          mask: "words",
          wordsClass: "split-word",
        });

        gsap.set(root, { autoAlpha: 1 });
        markReady();

        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 82%", once: true },
        });

        tl.from(root.querySelector(".cine-eyebrow"), {
          autoAlpha: 0,
          y: 14,
          duration: 0.45,
          ease: "power2.out",
        })
          .from(
            split.words,
            {
              yPercent: 105,
              autoAlpha: 0,
              duration: 0.65,
              stagger: 0.05,
              ease: "expo.out",
            },
            "-=0.2"
          )
          .from(
            root.querySelector(".cine-lead"),
            { autoAlpha: 0, y: 16, duration: 0.55, ease: "power2.out" },
            "-=0.35"
          );

        return () => split.revert();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(root, { autoAlpha: 1 });
        markReady();
      });
    },
    { scope: ref, dependencies: [lang], revertOnUpdate: true }
  );

  return (
    <div className="section-head gsap-cloak" ref={ref}>
      <p className="cine-eyebrow">{eyebrow}</p>
      <h2 className="cine-display cine-silver split-mask" key={lang}>
        {title}
      </h2>
      {lead && <p className="cine-lead">{lead}</p>}
    </div>
  );
};

export default SectionHead;
