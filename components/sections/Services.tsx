"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  ShieldCheck,
  Smartphone,
  Radar,
  HeadphonesIcon,
  ArrowDown,
  ImageIcon,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const services = [
  {
    problemIcon: AlertTriangle,
    solutionIcon: ShieldCheck,
    problem: "¿Te preocupa no enterarte de una intrusión a tiempo?",
    title: "Alarma conectada a CRA",
    solution:
      "Alarmas conectadas a central receptora (CRA) con verificación y respuesta profesional 24/7. Si salta tu alarma, actuamos en minutos.",
  },
  {
    problemIcon: AlertTriangle,
    solutionIcon: Smartphone,
    problem: "¿No puedes estar pendiente de tu casa o negocio todo el día?",
    title: "Control total desde el móvil",
    solution:
      "Controla tu alarma desde el móvil: armar, desarmar, ver el historial y recibir alertas instantáneas estés donde estés.",
  },
  {
    problemIcon: AlertTriangle,
    solutionIcon: Radar,
    problem: "¿Tienes puntos ciegos o accesos sin proteger?",
    title: "Sensores inteligentes",
    solution:
      "Sensores de movimiento, contacto magnético en puertas y ventanas, y detectores perimetrales que cubren cada rincón de tu espacio.",
  },
  {
    problemIcon: AlertTriangle,
    solutionIcon: HeadphonesIcon,
    problem: "¿Y si algo falla y no te das cuenta?",
    title: "Mantenimiento y soporte 24/7",
    solution:
      "Revisiones periódicas, monitorización del estado del sistema y soporte técnico disponible las 24 horas para que nunca te quedes desprotegido.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <div
      className={`service-card group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl`}
    >
      {/* Imagen placeholder */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-neutral-400">
          <ImageIcon className="h-10 w-10" />
          <span className="text-xs">Imagen {index + 1}</span>
        </div>
        {/* Cuando tengas las imagenes, reemplaza el div de arriba con:
            <Image src="/images/servicio-X.jpg" alt={service.title} fill className="object-cover" /> */}
      </div>

      {/* Problema */}
      <div className="relative bg-neutral-900 px-5 py-4">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20">
          <service.problemIcon className="h-4 w-4 text-red-400" />
        </div>
        <p className="text-sm font-medium leading-relaxed text-white/80">
          {service.problem}
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary shadow-md">
            <ArrowDown className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* Solucion */}
      <div className="bg-white px-5 pb-5 pt-6">
        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary">
          <service.solutionIcon className="h-4.5 w-4.5 text-brand-primary transition-colors group-hover:text-white" />
        </div>
        <h3 className="text-base font-semibold text-black">
          {service.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
          {service.solution}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" className="relative overflow-hidden bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          >
            Protección integral
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Problemas reales, soluciones profesionales
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Cada espacio tiene vulnerabilidades. Nosotros las identificamos y las
            cubrimos con tecnología de alarma de última generación.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
