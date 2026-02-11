import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Instalación de Alarmas y Cámaras de Seguridad en Barcelona | Kualitek - Sistemas CCTV Profesionales",
  description:
    "Expertos en instalación de alarmas, cámaras de seguridad y sistemas CCTV en Barcelona, Madrid y toda España. +15 años de experiencia. Presupuesto gratis en 24h. Atención 24/7. Hikvision, Dahua y Axis certificados.",
  keywords: [
    // Palabras clave principales
    "instalación alarmas Barcelona",
    "cámaras seguridad Barcelona",
    "sistemas CCTV Barcelona",
    "instalación alarmas Madrid",
    "videovigilancia Barcelona",
    "alarmas hogar Barcelona",
    "alarmas negocio Barcelona",
    // Servicios específicos
    "instalación cámaras IP",
    "instalación cámaras HD",
    "sistemas videovigilancia profesional",
    "monitoreo 24/7",
    "acceso remoto cámaras",
    "instalación sensores seguridad",
    // Marcas
    "Hikvision Barcelona",
    "Dahua Barcelona",
    "Axis Barcelona",
    // Long-tail keywords
    "cuanto cuesta instalar alarma Barcelona",
    "mejor empresa alarmas Barcelona",
    "instaladores cámaras certificados",
    "presupuesto alarmas gratis",
    "instalación urgente alarmas",
    "mantenimiento sistemas seguridad",
    // Ubicaciones
    "alarmas Barcelona ciudad",
    "alarmas Madrid centro",
    "sistemas seguridad España",
    // Tipos de clientes
    "alarmas para tiendas",
    "cámaras para oficinas",
    "seguridad para comunidades",
    "videovigilancia industrial",
    "Kualitek",
  ],
  authors: [{ name: "Kualitek" }],
  creator: "Kualitek",
  publisher: "Kualitek",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Instalación de Alarmas y Cámaras de Seguridad en Barcelona | Kualitek",
    description:
      "Expertos en sistemas de seguridad CCTV. +2000 cámaras instaladas, +500 clientes, 15 años de experiencia. Presupuesto gratis en 24h. Cobertura Barcelona, Madrid y España.",
    type: "website",
    locale: "es_ES",
    url: "https://kualitek.com",
    siteName: "Kualitek - Alarmas Barcelona",
    images: [
      {
        url: "/logos/logoalarmasbarcelona.png",
        width: 1200,
        height: 630,
        alt: "Kualitek - Instalación de Alarmas y Cámaras de Seguridad en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instalación de Alarmas y Cámaras de Seguridad en Barcelona",
    description:
      "Expertos en sistemas CCTV. +15 años de experiencia. Presupuesto gratis en 24h.",
    images: ["/logos/logoalarmasbarcelona.png"],
  },
  alternates: {
    canonical: "https://kualitek.com",
  },
  category: "Seguridad y Alarmas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
