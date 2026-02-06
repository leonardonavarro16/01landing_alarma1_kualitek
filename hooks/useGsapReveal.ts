"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export interface RevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      x = 0,
      duration = 0.8,
      delay = 0,
      ease = "power2.out",
      start = "top 85%",
    } = options;

    gsap.set(el, { y, x, opacity: 0 });

    const tween = gsap.to(el, {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}
