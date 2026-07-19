import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./lib/gsap";

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
        gsap.to(".scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.35 },
        });

        gsap.to(".cine-aurora", {
          yPercent: 28,
          filter: "blur(48px) saturate(150%) hue-rotate(40deg)",
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.2 },
        });

        gsap.to(".cine-grid-bg", {
          backgroundPosition: "0px 280px",
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.5 },
        });

        // Parallax orbs at different depths
        gsap.to(".cine-orb--a", {
          yPercent: 40,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.4 },
        });
        gsap.to(".cine-orb--b", {
          yPercent: -25,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.1 },
        });
        gsap.to(".cine-orb--c", {
          yPercent: 55,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.6 },
        });
      });

      // Recalc after fonts/images settle so pin spacers don't jump
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      const t = window.setTimeout(refresh, 400);

      return () => {
        window.removeEventListener("load", refresh);
        window.clearTimeout(t);
      };
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
        <div className="cine-orb cine-orb--a" aria-hidden="true" />
        <div className="cine-orb cine-orb--b" aria-hidden="true" />
        <div className="cine-orb cine-orb--c" aria-hidden="true" />

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
