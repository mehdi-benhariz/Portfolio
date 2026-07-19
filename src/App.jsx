import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "./lib/gsap";

import { LanguageProvider } from "./i18n/LanguageContext";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Thin progress bar tied to overall scroll
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        // The aurora drifts and slowly shifts hue as you travel down the page,
        // so each scene gets its own atmosphere.
        gsap.to(".cine-aurora", {
          yPercent: 24,
          filter: "blur(40px) saturate(120%) hue-rotate(70deg)",
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.2 },
        });

        gsap.to(".cine-grid-bg", {
          backgroundPosition: "0px 240px",
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.5 },
        });
      });
    },
    { scope: ref }
  );

  return (
    <LanguageProvider>
      <div ref={ref}>
        <div className="scroll-progress" aria-hidden="true" />
        <div className="cine-grain" aria-hidden="true" />
        <div className="cine-grid-bg" aria-hidden="true" />
        <div className="cine-aurora" aria-hidden="true" />

        <Nav />
        <main>
          <Hero />
          <hr className="cine-divider" />
          <About />
          <hr className="cine-divider" />
          <Experience />
          <hr className="cine-divider" />
          <Education />
          <hr className="cine-divider" />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
