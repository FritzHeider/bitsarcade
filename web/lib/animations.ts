"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const fadeInConfig = {
  y: 60,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out"
} as const;

export const hoverScaleConfig = {
  scale: 1.05,
  duration: 0.18,
  ease: "power1.out"
} as const;

export const createStagger = (base = 0.12) => ({ stagger: base });

export const useGsapFadeIn = <T extends HTMLElement>(options?: { trigger?: Element | null; delay?: number }) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power1.out",
            delay: options?.delay ?? 0,
            scrollTrigger: {
              trigger: options?.trigger ?? el,
              start: "top 80%"
            }
          }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(el, {
          ...fadeInConfig,
          delay: options?.delay ?? 0,
          scrollTrigger: {
            trigger: options?.trigger ?? el,
            start: "top 80%"
          }
        });
      });
    }, el);

    return () => {
      ctx.revert();
      mm.kill();
    };
  }, [options?.trigger, options?.delay]);

  return ref;
};

export const useGsapTimeline = <T extends HTMLElement>(animation: (timeline: gsap.core.Timeline, element: T) => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const mm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mm.matches) {
      animation(gsap.timeline({ defaults: { duration: 0 } }), el);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      animation(tl, el);
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [animation]);

  return ref;
};

export const useGsapCounter = (
  start: number,
  end: number,
  options?: { duration?: number; delay?: number }
) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const obj = { value: start };
        gsap.to(obj, {
          value: end,
          duration: options?.duration ?? 1.2,
          ease: "linear",
          onUpdate: () => {
            const precision = options?.precision ?? 0;
            if (precision > 0) {
              el.textContent = Number(obj.value).toFixed(precision);
            } else {
              el.textContent = Math.round(obj.value).toLocaleString();
            }
          }
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const obj = { value: start };
        gsap.to(obj, {
          value: end,
          duration: options?.duration ?? 1.8,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toLocaleString();
          }
        });
      });
    }, el);

    return () => {
      ctx.revert();
      mm.kill();
    };
  }, [start, end, options?.duration, options?.delay, options?.precision]);

  return ref;
};

export const useGsapHover = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const quickScale = gsap.quickTo(el, "scale", { duration: 0.2, ease: "power2.out" });
      const onEnter = () => quickScale(1.05);
      const onLeave = () => quickScale(1);

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("focus", onEnter);
      el.addEventListener("blur", onLeave);

      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("focus", onEnter);
        el.removeEventListener("blur", onLeave);
      };
    }, el);

    return () => {
      ctx.revert();
      mm.kill();
    };
  }, []);

  return ref;
};
