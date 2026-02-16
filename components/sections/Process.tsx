"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  ClipboardCheck,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Visita técnica gratuita",
    description:
      "Analizamos tu espacio, puntos vulnerables y proponemos la mejor solución de alarma y sensores.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Presupuesto claro y sin sorpresas",
    description:
      "Recibes una propuesta detallada con opciones según riesgo y presupuesto, incluido tiempo de instalación.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Instalación profesional",
    description:
      "Técnicos certificados montan sensores, central y conexionado a la central receptora (si aplica).",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Formación y mantenimiento",
    description:
      "Te formamos, activamos la monitorización y ofrecemos planes de mantenimiento y soporte 24/7.",
  },
];

export default function Process() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power2.out" },
      });

      steps.forEach((_, i) => {
        tl.from(`.process-step-${i}`, { y: 50, opacity: 0, duration: 0.3 }, i === 0 ? undefined : "-=0.1");
        if (i < steps.length - 1) {
          tl.from(`.process-connector-${i}`, { scaleX: 0, duration: 0.4, transformOrigin: "left center" }, "-=0.1");
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proceso" className="bg-black py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/10 text-brand-primary"
          >
            Cómo trabajamos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Instalación de alarmas en 4 pasos
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Un proceso claro y eficiente para que tu alarma esté operativa y
            tu espacio protegido cuanto antes.
          </p>
        </div>

        <div ref={gridRef} className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className={`process-step-${index} relative text-center`}>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`process-connector-${index} absolute left-1/2 top-10 hidden h-0.5 w-full bg-linear-to-r from-brand-primary/30 to-transparent md:block`} />
              )}

              <div className="relative mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
                <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-brand-cream" />
                <span className="absolute -right-1.5 sm:-right-2 -top-1.5 sm:-top-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-brand-primary text-[10px] sm:text-xs font-bold text-white">
                  {step.step}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
