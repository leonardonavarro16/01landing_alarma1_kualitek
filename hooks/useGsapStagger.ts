"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export interface StaggerOptions {
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  childSelector?: string;
}

export function useGsapStagger<T extends HTMLElement = HTMLDivElement>(
  options: StaggerOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const {
      y = 50,
      x = 0,
      duration = 0.7,
      stagger = 0.15,
      ease = "power2.out",
      start = "top 85%",
      childSelector = ":scope > *",
    } = options;

    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, { y, x, opacity: 0 });

    const tween = gsap.to(children, {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
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
