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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useReveal;
