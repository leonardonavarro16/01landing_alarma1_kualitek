"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function CTA() {
  const headingRef = useGsapReveal({ y: 40, duration: 0.7 });
  const paragraphRef = useGsapReveal({ y: 30, duration: 0.6, delay: 0.15 });
  const buttonsRef = useGsapReveal({ y: 20, duration: 0.5, delay: 0.3 });
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = blobsRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(".cta-blob-left", {
        y: -20,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".cta-blob-right", {
        y: 20,
        scale: 1.1,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-28">
      {/* Background accents */}
      <div ref={blobsRef} className="pointer-events-none absolute inset-0">
        <div className="cta-blob-left absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-[120px]" />
        <div className="cta-blob-right absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 ref={headingRef} className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          ¿Listo para proteger lo que más importa?
        </h2>
        <p ref={paragraphRef} className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300">
          Solicita una visita gratuita y recibe un presupuesto personalizado
          para la instalación de alarmas profesionales en tu hogar o negocio.
        </p>

        <div ref={buttonsRef} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </Button>
        </div>
      </div>
    </section>
  );
}
