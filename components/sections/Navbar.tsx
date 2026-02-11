"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, { y: -20, opacity: 0, duration: 0.6, ease: "power2.out" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-gray-50 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/logos/logoalarmasbarcelona.png"
            alt="Alarmas Barcelona Logo"
            className="h-45 w-auto mt-2"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-brand-primary font-semibold text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primary-dark transition-colors"
          >
            <a href="#contacto">Pedir Presupuesto</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-neutral-700 hover:bg-neutral-100">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-neutral-200 bg-white">
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-neutral-700 transition-colors hover:text-brand-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-brand-primary font-semibold text-white hover:bg-brand-primary-dark"
              >
                <a href="#contacto" onClick={() => setOpen(false)}>
                  Pedir Presupuesto
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
