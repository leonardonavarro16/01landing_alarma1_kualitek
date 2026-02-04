import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Clock,
  Camera,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Camera,
    value: "2.000+",
    label: "Cámaras instaladas",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Empresas protegidas",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Años de experiencia",
  },
  {
    icon: Award,
    value: "99%",
    label: "Clientes satisfechos",
  },
];

const reasons = [
  "Técnicos certificados en sistemas CCTV y redes",
  "Atención de urgencias 24/7 los 365 días del año",
  "Presupuestos transparentes y sin letra pequeña",
  "Cobertura en Barcelona, Madrid y toda España",
  "Garantía de 2 años en todas las instalaciones",
  "Marcas líderes: Hikvision, Dahua, Axis y más",
];

export default function Stats() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Why choose us */}
          <div>
            <Badge
              variant="secondary"
              className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
            >
              Por qué elegirnos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Expertos en instalación de cámaras de seguridad
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              En Kualitek llevamos más de 15 años instalando sistemas de
              videovigilancia para empresas de todos los tamaños. Nuestro equipo
              técnico certificado garantiza una instalación impecable.
            </p>

            <ul className="mt-8 space-y-4">
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
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center rounded-2xl border border-neutral-100 bg-brand-cream p-8 text-center transition-all hover:border-brand-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-primary/10">
                  <stat.icon className="h-7 w-7 text-brand-primary" />
                </div>
                <span className="text-3xl font-extrabold text-brand-primary">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-neutral-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
