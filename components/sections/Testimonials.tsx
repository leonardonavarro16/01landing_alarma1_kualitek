"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Director de Operaciones",
    company: "LogiTrans S.L.",
    content:
      "Kualitek instaló un sistema de alarma conectado a central receptora en nuestro almacén. Desde entonces tenemos detección temprana y respuesta profesional. Servicio impecable.",
    rating: 5,
  },
  {
    name: "Ana García",
    role: "Gerente",
    company: "Clínica Dental Sonríe",
    content:
      "Necesitábamos una alarma sin obras complicadas. El equipo de Kualitek instaló sensores inalámbricos y nos dejaron todo funcionando en un día. Muy profesionales.",
    rating: 5,
  },
  {
    name: "Miguel Fernández",
    role: "Propietario",
    company: "Restaurante El Fogón",
    content:
      "Tras varios intentos de acceso no autorizado, instalamos alarma y sensores perimetrales con Kualitek. Hemos reducido incidentes y dormimos más tranquilos.",
    rating: 5,
  },
  {
    name: "Laura Romero",
    role: "Administradora",
    company: "Farmacia Romero",
    content:
      "Desde que Kualitek instaló el sistema de alarma con sensores de movimiento y conexión a CRA, la farmacia está protegida las 24 horas. El equipo fue rápido y muy profesional.",
    rating: 5,
  },
  {
    name: "Javier Sánchez",
    role: "Director General",
    company: "AutoTech Talleres",
    content:
      "Teníamos robos recurrentes en el taller fuera de horario. Con la alarma perimetral y las cámaras que instaló Kualitek, no hemos vuelto a tener un solo incidente en más de un año.",
    rating: 5,
  },
 
];

export default function Testimonials() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonios" className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          >
            Testimonios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Clientes que ya confían en nosotros
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Más de 500 clientes han elegido Kualitek para proteger sus
            hogares y negocios con sistemas de alarma y monitorización profesional.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12 sm:mt-16">
          {/* Navigation arrows - desktop */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-opacity hover:bg-neutral-50 disabled:opacity-30 lg:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-neutral-700" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-opacity hover:bg-neutral-50 disabled:opacity-30 lg:flex"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5 text-neutral-700" />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <Card className="h-full border-neutral-200 bg-white shadow-sm transition-all hover:shadow-lg">
                    <CardContent className="pt-6">
                      {/* Stars */}
                      <div className="mb-3 sm:mb-4 flex gap-0.5 sm:gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed text-neutral-700">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs sm:text-sm font-bold text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-black">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-6 bg-brand-primary"
                    : "w-2 bg-neutral-300"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
