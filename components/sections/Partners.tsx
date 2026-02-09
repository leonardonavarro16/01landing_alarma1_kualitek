"use client";

import { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const partners = [
  { name: "Yealink", logo: "/yealink_logo.png" },
  { name: "Dahua", logo: "/dahua_logo.png" },
  { name: "Hikvision", logo: "/hikvision_logo.png" },
  { name: "Ubiquiti", logo: "/ubiquiti_logo.png" },
  { name: "Google Partner", logo: "/googlePartnersLogo.png" },
  { name: "Cisco", logo: "/ciscoLogo.png" },
  { name: "MikroTik", logo: "/mikrorik logo.png" },
  { name: "ZoiPer", logo: "/zoiper.png" },
  { name: "Amazon Web Services", logo: "/awsLogo.png" },
];

export default function Partners() {
  const headerRef = useGsapReveal({ y: 30, duration: 0.7 });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
    },
    [
      AutoPlay({
        delay: 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
    // Autoplay se inicia automáticamente
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-primary sm:text-3xl">
            Nuestros Partners Tecnológicos:
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Trabajamos con las mejores marcas del sector
          </p>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {/* Duplicamos los partners para crear efecto infinito visual */}
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="embla__slide relative flex min-w-45 flex-shrink-0 items-center justify-center sm:min-w-[220px]"
              >
                <div className="group flex h-20 w-full items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 transition-all duration-300 hover:border-brand-primary/30 hover:shadow-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={60}
                    className="h-auto w-auto max-h-14 object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
