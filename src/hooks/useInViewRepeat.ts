import { useEffect, useRef, useState } from 'react';

/**
 * Like useInView, but re-triggers every time the element enters OR leaves
 * the viewport — so animations replay on every scroll pass.
 */
export function useInViewRepeat(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
