"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, HardDrive, Wifi, Wrench, ShieldCheck } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { useGsapStagger } from "@/hooks/useGsapStagger";

const services = [
  {
    icon: ShieldCheck,
    title: "Alarmas conectadas a CRA",
    description:
      "Sistemas de alarma con conexión a central receptora para respuesta profesional y verificación de incidencias 24/7.",
  },
  {
    icon: Smartphone,
    title: "Notificaciones y control desde el móvil",
    description:
      "Recibe alertas instantáneas y controla tu alarma desde la app: armar/desarmar, historial de eventos y notificaciones push.",
  },
  {
    icon: Wrench,
    title: "Sensores de movimiento y contacto",
    description:
      "Tecnología avanzada de detección para interiores y perímetros: sensores volumétricos, magnéticos de puerta/ventana y detectores perimetrales.",
  },
  {
    icon: HardDrive,
    title: "Integración con CCTV y domótica",
    description:
      "Conectamos la alarma con tu sistema de cámaras y soluciones domóticas para una gestión de seguridad unificada.",
  },
  {
    icon: Wifi,
    title: "Opciones cableadas e inalámbricas",
    description:
      "Soluciones sin obra o con cableado profesional según tu espacio y necesidades de seguridad.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y soporte",
    description:
      "Contratos de mantenimiento, revisiones periódicas y atención técnica para garantizar que tu sistema siempre funcione.",
  },
];

export default function Services() {
  const headerRef = useGsapReveal({ y: 40, duration: 0.7 });
  const gridRef = useGsapStagger({ y: 50, stagger: 0.12, duration: 0.6, start: "top 80%" });

  return (
    <section id="servicios" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Todo lo que necesitas en videovigilancia
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Desde la instalación hasta el mantenimiento, cubrimos cada aspecto
            de tu sistema de cámaras de seguridad.
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-transparent bg-white shadow-sm transition-all duration-300 hover:border-brand-primary/20 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary">
                  <service.icon className="h-6 w-6 text-brand-primary transition-colors group-hover:text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
