import { Separator } from "@/components/ui/separator";
import { Camera, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Kualitek</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Instaladores profesionales de cámaras de seguridad CCTV para
              empresas y negocios. Más de 15 años de experiencia protegiendo
              lo que más importa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Cámaras IP de Alta Resolución
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Sistemas DVR/NVR
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Monitoreo Remoto
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Cableado Estructurado
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Mantenimiento Preventivo
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#nosotros" className="transition-colors hover:text-white">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#proceso" className="transition-colors hover:text-white">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="transition-colors hover:text-white">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
                <span>Barcelona y Madrid, España</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-primary" />
                <a href="tel:+34900000000" className="transition-colors hover:text-white">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-primary" />
                <a
                  href="mailto:info@kualitek.com"
                  className="transition-colors hover:text-white"
                >
                  info@kualitek.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kualitek. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
