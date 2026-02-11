"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Grainient from "@/components/Grainient";
import { gsap } from "@/lib/gsap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Camera,
  CheckCircle,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Wifi,
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6 })
        .from(".hero-heading", { y: 30, opacity: 0, duration: 0.7 }, "-=0.3")
        .from(".hero-description", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-feature", { y: 30, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.2");
    }, leftRef);

    const ctx2 = gsap.context(() => {
      gsap.from(rightRef.current, {
        x: 40,
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });
    });

    return () => {
      ctx.revert();
      ctx2.revert();
    };
  }, []);

  // Capitalizar primera letra de cada palabra
  function capitalizeWords(text: string): string {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  // Manejar cambio de nombre con capitalización
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Solo capitalizar cuando termine de escribir una palabra (cuando escribe un espacio o sale del input)
    setFormData({ ...formData, nombre: value });
  }

  // Capitalizar al salir del input
  function handleNameBlur(e: React.FocusEvent<HTMLInputElement>) {
    const capitalized = capitalizeWords(e.target.value);
    setFormData({ ...formData, nombre: capitalized });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    // Asegurar que el nombre esté capitalizado antes de enviar
    const dataToSend = {
      ...formData,
      nombre: capitalizeWords(formData.nombre),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative min-h-screen bg-neutral-900">
      {/* Temporary background (replace with video later) */}
      <div className="absolute inset-0">
        <Grainient className="h-full w-full" />
      </div>

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 px-4 py-16 sm:py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: Copy */}
        <div ref={leftRef} className="text-center lg:text-left">
         

          <h1 className="hero-heading text-3xl font-extrabold leading-normaltracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Instalación de{" "}
            <span className="text-brand-cream">
              alarmas y sistemas de seguridad
            </span>{" "}
            para proteger lo que más importa
          </h1>

          <p className="hero-description mt-4 sm:mt-6 text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Protege tu empresa con sistemas de videovigilancia CCTV de última
            generación. Instalación profesional, configuración remota y soporte
            técnico en Barcelona y Madrid.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
            {[
              { icon: Camera, label: "Cámaras IP/HD" },
              { icon: ShieldCheck, label: "Monitoreo 24/7" },
              { icon: Wifi, label: "Acceso remoto" },
            ].map((item) => (
              <div
                key={item.label}
                className="hero-feature flex items-center gap-2 sm:gap-2.5 rounded-lg border border-white/10 bg-white/10 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md"
              >
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-brand-cream" />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <Card ref={rightRef} className="border-white/15 bg-black/40 shadow-2xl backdrop-blur-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-2xl font-bold text-white">
              Presupuesto gratuito
            </CardTitle>
            <p className="text-center text-sm text-white/60">
              Te respondemos en menos de 24 horas
            </p>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/20">
                  <CheckCircle className="h-8 w-8 text-brand-emerald" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Mensaje enviado
                </h3>
                <p className="text-white/60">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Nombre *"
                  required
                  value={formData.nombre}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  className="border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
                />
                <Input
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
                />
                <PhoneInput
                  international
                  defaultCountry="ES"
                  placeholder="Teléfono *"
                  value={formData.telefono}
                  onChange={(value) =>
                    setFormData({ ...formData, telefono: value || "" })
                  }
                  className="phone-input-custom border-white/10 bg-white/10 text-white rounded-md"
                  required
                />
                <textarea
                  placeholder="Cuéntanos qué necesitas (n.º de cámaras, tipo de local, etc.)..."
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="flex w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-brand-primary text-base font-semibold text-white shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-dark transition-colors"
                  size="lg"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Presupuesto Gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Hubo un error. Inténtalo de nuevo.
                  </p>
                )}
                <p className="text-center text-xs text-white/40">
                Tus datos están protegidos.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
