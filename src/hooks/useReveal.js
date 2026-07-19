import { useEffect, useRef } from "react";

/**
 * Adds the `is-in` class when the element scrolls into view,
 * driving the `.cine-reveal` CSS transition.
 */
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already visible (e.g. above the fold after language switch)
    const reveal = () => node.classList.add("is-in");

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Failsafe: never leave content invisible
    const failsafe = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return ref;
};

export default useReveal;
