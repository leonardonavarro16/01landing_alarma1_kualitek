import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          ¿Listo para proteger tu negocio?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
          Solicita una visita gratuita y recibe un presupuesto personalizado
          para la instalación de cámaras de seguridad en tu empresa.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-brand-primary text-base font-semibold text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primary-dark transition-colors"
          >
            <a href="#contacto">
              Pedir Presupuesto Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-base text-white hover:bg-white/10"
          >
            <a href="tel:+34900000000">
              <Phone className="mr-2 h-4 w-4" />
              Llámanos ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
