"use client";

import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Clock,
  Camera,
  Award,
  LucideIcon,
} from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useGsapStagger } from "@/hooks/useGsapStagger";
import { useGsapCounter } from "@/hooks/useGsapCounter";

const stats = [
  { icon: Camera, numericValue: 2000, suffix: "+", label: "Cámaras instaladas" },
  { icon: Building2, numericValue: 500, suffix: "+", label: "Clientes protegidos" },
  { icon: Clock, numericValue: 15, suffix: "+", label: "Años de experiencia" },
  { icon: Award, numericValue: 99, suffix: "%", label: "Clientes satisfechos" },
];

const reasons = [
  "Técnicos certificados en sistemas CCTV y redes",
  "Atención de urgencias 24/7 los 365 días del año",
  "Presupuestos transparentes y sin letra pequeña",
  "Cobertura en Barcelona, Madrid y toda España",
  "Garantía de 2 años en todas las instalaciones",
  "Marcas líderes: Hikvision, Dahua, Axis y más",
];

function StatCard({
  icon: Icon,
  numericValue,
  suffix,
  label,
}: {
  icon: LucideIcon;
  numericValue: number;
  suffix: string;
  label: string;
}) {
  const { ref, display } = useGsapCounter({ end: numericValue, suffix, duration: 2.5 });
  const cardRef = useGsapReveal({ y: 40, duration: 0.6 });

  return (
    <div
      ref={cardRef}
      className="group flex flex-col items-center rounded-2xl border border-neutral-100 bg-brand-cream p-6 sm:p-8 text-center transition-all hover:border-brand-primary/20 hover:shadow-lg"
    >
      <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-brand-primary/10">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-brand-primary" />
      </div>
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="text-2xl sm:text-3xl font-extrabold text-brand-primary">
        {display}
      </span>
      <span className="mt-1 text-xs sm:text-sm text-neutral-600">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });
  const reasonsRef = useGsapStagger<HTMLUListElement>({ x: -30, y: 0, stagger: 0.1, duration: 0.5, childSelector: "li" });

  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Why choose us */}
          <div>
            <div ref={headerRef}>
              <Badge
                variant="secondary"
                className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
              >
                Por qué elegirnos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Expertos en instalación de alarmas y sistemas de seguridad
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                En Kualitek llevamos más de 10 años instalando sistemas de
                alarmas para hogares, negocios y comunidades. Nuestro equipo
                técnico certificado garantiza una instalación impecable.
              </p>
            </div>

            <ul ref={reasonsRef} className="mt-8 space-y-3 sm:space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                    <svg
                      className="h-3.5 w-3.5 text-brand-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                icon={stat.icon}
                numericValue={stat.numericValue}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
