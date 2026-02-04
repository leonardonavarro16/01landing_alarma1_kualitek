import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Director de Operaciones",
    company: "LogiTrans S.L.",
    content:
      "Kualitek nos instaló 24 cámaras en nuestro almacén logístico. La calidad de imagen es impresionante y poder ver todo desde el móvil nos da total tranquilidad. Servicio impecable.",
    rating: 5,
  },
  {
    name: "Ana García",
    role: "Gerente",
    company: "Clínica Dental Sonríe",
    content:
      "Necesitábamos cámaras en la clínica sin obras complicadas. El equipo de Kualitek instaló un sistema inalámbrico perfecto. Rápidos, limpios y muy profesionales.",
    rating: 5,
  },
  {
    name: "Miguel Fernández",
    role: "Propietario",
    company: "Restaurante El Fogón",
    content:
      "Después de un robo decidimos instalar CCTV. Kualitek nos asesoró con el mejor sistema para nuestro presupuesto y ahora tenemos cobertura total. 100% recomendados.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          >
            Testimonios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Empresas que ya confían en nosotros
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Más de 500 empresas han elegido Kualitek para proteger sus
            instalaciones con cámaras de seguridad.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-neutral-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-neutral-700">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
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
