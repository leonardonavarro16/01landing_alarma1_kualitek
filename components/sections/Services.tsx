import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Video,
  Smartphone,
  HardDrive,
  Wifi,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Cámaras IP de Alta Resolución",
    description:
      "Instalación de cámaras IP con resolución 4K y 8MP. Visión nocturna avanzada, detección de movimiento inteligente y ángulos de cobertura optimizados.",
  },
  {
    icon: Video,
    title: "Sistemas DVR/NVR",
    description:
      "Configuración de grabadores digitales con almacenamiento en disco duro y en la nube. Acceso a grabaciones desde cualquier dispositivo.",
  },
  {
    icon: Smartphone,
    title: "Monitoreo desde el Móvil",
    description:
      "Visualiza tus cámaras en tiempo real desde tu smartphone o tablet. Alertas instantáneas ante cualquier incidencia.",
  },
  {
    icon: HardDrive,
    title: "Cableado Estructurado",
    description:
      "Instalación profesional de cableado Cat6/Cat6a y fibra óptica. Infraestructura certificada para máximo rendimiento de tus cámaras.",
  },
  {
    icon: Wifi,
    title: "Cámaras Inalámbricas",
    description:
      "Soluciones WiFi para zonas de difícil acceso. Conexión estable y segura sin necesidad de cableado adicional.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description:
      "Servicio de revisión periódica, limpieza de lentes, actualización de firmware y soporte técnico para mantener tus cámaras siempre operativas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
