"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export interface CounterOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  start?: string;
}

export function useGsapCounter(options: CounterOptions) {
  const ref = useRef<HTMLElement>(null);
  const { end, duration = 2, suffix = "", prefix = "", start = "top 85%" } = options;
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const rounded = Math.round(obj.val);
        const formatted = rounded.toLocaleString("es-ES");
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return { ref, display };
}
