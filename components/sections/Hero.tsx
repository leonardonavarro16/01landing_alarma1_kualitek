"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Grainient from "@/components/Grainient";
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
    empresa: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="relative min-h-screen overflow-hidden">
      {/* Grainient animated background */}
      <div className="absolute inset-0">
        <Grainient className="h-full w-full" />
      </div>

      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/40" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <Badge
            variant="secondary"
            className="mb-6 border-white/20 bg-white/10 text-brand-cream backdrop-blur-sm"
          >
            <Camera className="mr-1.5 h-3.5 w-3.5" />
            Instaladores Profesionales de CCTV
          </Badge>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Instalación de{" "}
            <span className="text-brand-cream">
              cámaras de seguridad
            </span>{" "}
            para tu negocio
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Protege tu empresa con sistemas de videovigilancia CCTV de última
            generación. Instalación profesional, configuración remota y soporte
            técnico en Barcelona y Madrid.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: Camera, label: "Cámaras IP/HD" },
              { icon: ShieldCheck, label: "Monitoreo 24/7" },
              { icon: Wifi, label: "Acceso remoto" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
              >
                <item.icon className="h-5 w-5 shrink-0 text-brand-cream" />
                <span className="text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <Card className="border-white/15 bg-black/40 shadow-2xl backdrop-blur-xl">
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Nombre *"
                    required
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
                  />
                  <Input
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={(e) =>
                      setFormData({ ...formData, empresa: e.target.value })
                    }
                    className="border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
                  />
                </div>
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
                <Input
                  type="tel"
                  placeholder="Teléfono *"
                  required
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="border-white/10 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-primary"
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
                  Sin compromiso. Tus datos están protegidos.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
