"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useGsapStagger } from "@/hooks/useGsapStagger";

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
];

export default function Testimonials() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });
  const gridRef = useGsapStagger({ y: 50, stagger: 0.2, duration: 0.7, start: "top 80%" });

  return (
    <section id="testimonios" className="bg-brand-cream py-20 sm:py-28">
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

        <div ref={gridRef} className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-neutral-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
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
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-brand-primary text-xs sm:text-sm font-bold text-white">
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
          ))}
        </div>
      </div>
    </section>
  );
}
