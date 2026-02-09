"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Smartphone,
  Radar,
  HeadphonesIcon,
  CheckCircle,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { GridPattern } from "@/components/ui/patterns";

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Monitoreo Profesional 24/7 Conectado a Central Receptora",
    subtitle: "Nunca estás solo ante una emergencia",
    descriptions: [
      "Tu alarma está conectada a una central receptora (CRA) con operadores profesionales que reciben señales en tiempo real, 24/7, los 365 días del año.",
      "Cuando salta tu alarma, verificamos la situación, te contactamos inmediatamente y si es necesario, enviamos ayuda: policía, bomberos o servicios médicos.",
    ],
    features: [
      "Verificación profesional antes de actuar",
      "Contacto inmediato con autoridades",
      "Protocolo anti-falsas alarmas",
      "Tiempo de respuesta < 2 minutos",
    ],
    placeholderType: "gradient" as const,
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Control Total Desde Tu Smartphone, Estés Donde Estés",
    subtitle: "Tu seguridad en la palma de tu mano",
    descriptions: [
      "Con nuestra app móvil controlas tu sistema desde cualquier lugar: arma/desarma zonas, consulta historial completo y recibe notificaciones push instantáneas.",
      "Tecnología IoT de última generación que te mantiene conectado y en control absoluto, sin importar dónde estés.",
    ],
    features: [
      "App iOS/Android intuitiva",
      "Notificaciones push en tiempo real",
      "Historial de eventos detallado",
      "Control por zonas independientes",
    ],
    placeholderType: "blur" as const,
  },
  {
    number: "03",
    icon: Radar,
    title: "Instalación Profesional Rápida y Sin Obras Molestas",
    subtitle: "Mínima interrupción, máxima protección",
    descriptions: [
      "No necesitas reformas. Técnicos certificados instalan sensores PIR, contactos magnéticos y detectores perimetrales que cubren cada rincón crítico.",
      "Instalación limpia y profesional en pocas horas. Tu día a día apenas se afecta, pero tu seguridad cambia para siempre.",
    ],
    features: [
      "Sensores inalámbricos última generación",
      "Técnicos certificados y asegurados",
      "Instalación en 1-2 días máximo",
      "Cobertura completa sin puntos ciegos",
    ],
    placeholderType: "pattern" as const,
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Soporte 24/7, Mantenimiento y Garantía Extendida",
    subtitle: "Protección continua sin preocupaciones",
    descriptions: [
      "Monitorizamos el estado de tu sistema constantemente: batería, conexión, comunicación con CRA. Si algo falla, lo sabemos antes que tú.",
      "Incluye revisiones periódicas, soporte técnico 24/7 y garantía de 2 años en todos los equipos. Tu inversión está protegida.",
    ],
    features: [
      "Monitorización remota del sistema",
      "Mantenimiento preventivo incluido",
      "Soporte técnico telefónico 24/7",
      "Garantía extendida 2 años",
    ],
    placeholderType: "gradient" as const,
  },
];

function BenefitPlaceholder({
  type,
  Icon,
}: {
  type: "gradient" | "blur" | "pattern";
  Icon: typeof ShieldCheck;
}) {
  if (type === "gradient") {
    return (
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-linear-to-br from-brand-primary/20 via-brand-cream to-brand-primary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-32 w-32 text-brand-primary/30" />
        </div>
      </div>
    );
  }

  if (type === "blur") {
    return (
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-950">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-primary/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-brand-cream/20 blur-3xl" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <Icon className="h-28 w-28 text-white/30" />
        </div>
      </div>
    );
  }

  // pattern
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-900">
      <GridPattern />
      <div className="relative z-10 flex h-full items-center justify-center">
        <Icon className="h-24 w-24 text-brand-cream/40" />
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".header-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".header-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Benefit sections
      document.querySelectorAll(".benefit-section").forEach((section, index) => {
        const image = section.querySelector(".benefit-image");
        const content = section.querySelector(".benefit-content");
        const bullets = section.querySelectorAll(".benefit-bullet");

        // Image: Fade + Scale
        gsap.fromTo(
          image,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 25%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Content: Slide from opposite side
        const slideX = index % 2 === 0 ? 60 : -60;
        gsap.fromTo(
          content,
          { x: slideX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Bullets: Stagger
        gsap.fromTo(
          bullets,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" className="relative overflow-hidden bg-white">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div ref={headerRef} className="header-section mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          >
            Protección integral
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            ¿Por qué elegir nuestro sistema de alarmas?
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-neutral-600">
            Cuatro pilares fundamentales que garantizan la máxima protección
            para tu hogar o negocio, sin complicaciones.
          </p>
        </div>
      </div>

      {/* Benefits Sections */}
      <div ref={sectionsRef}>
        {benefits.map((benefit, index) => {
          const isImageLeft = index % 2 === 0;
          const bgClass = index % 2 !== 0 ? "bg-brand-cream/30" : "";

          return (
            <div key={benefit.number} className={`benefit-section ${bgClass}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 py-12 md:gap-10 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
                  {/* Image */}
                  <div
                    className={`benefit-image ${
                      isImageLeft ? "order-2 lg:order-1" : "order-2"
                    }`}
                  >
                    <BenefitPlaceholder
                      type={benefit.placeholderType}
                      Icon={benefit.icon}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`benefit-content ${
                      isImageLeft ? "order-1 lg:order-2" : "order-1"
                    }`}
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-primary/10 lg:h-20 lg:w-20">
                      <span className="text-4xl font-bold text-brand-primary lg:text-5xl">
                        {benefit.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-base font-medium text-brand-primary sm:mt-4 sm:text-lg">
                      {benefit.subtitle}
                    </p>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-700 sm:mt-6 sm:space-y-4 sm:text-base lg:text-lg">
                      {benefit.descriptions.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </div>
                    <ul className="mt-6 space-y-2 sm:mt-8 sm:space-y-3">
                      {benefit.features.map((feature) => (
                        <li
                          key={feature}
                          className="benefit-bullet flex items-start gap-3"
                        >
                          <CheckCircle className="h-5 w-5 shrink-0 text-brand-primary sm:h-6 sm:w-6" />
                          <span className="text-sm text-neutral-700 sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
