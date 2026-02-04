import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  ClipboardCheck,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta gratuita",
    description:
      "Visitamos tu local o empresa para analizar las necesidades de seguridad: puntos de cobertura, número de cámaras e infraestructura existente.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Presupuesto a medida",
    description:
      "Diseñamos una solución personalizada con el mejor equipamiento para tu presupuesto. Todo detallado y sin sorpresas.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Instalación profesional",
    description:
      "Nuestros técnicos certificados realizan la instalación completa: cableado, montaje de cámaras, grabadores y configuración del sistema.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Formación y soporte",
    description:
      "Te enseñamos a usar el sistema, configuramos el acceso remoto en tu móvil y te ofrecemos soporte técnico continuo.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/10 text-brand-primary"
          >
            Cómo trabajamos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tu sistema CCTV instalado en 4 pasos
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Un proceso claro y eficiente para que tu negocio esté protegido
            cuanto antes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.step} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-linear-to-r from-brand-primary/30 to-transparent lg:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm">
                <step.icon className="h-8 w-8 text-brand-cream" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-white">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
