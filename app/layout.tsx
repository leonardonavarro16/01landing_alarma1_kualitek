import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Kualitek | Instaladores Profesionales de Cámaras de Seguridad CCTV en Barcelona y Madrid",
  description:
    "Instalación profesional de cámaras de vigilancia, sistemas CCTV, grabadores de video y cableado estructurado para empresas. Presupuesto gratuito. Cobertura en Barcelona, Madrid y toda España.",
  keywords: [
    "instalación cámaras seguridad",
    "CCTV Barcelona",
    "CCTV Madrid",
    "cámaras de vigilancia empresas",
    "instaladores CCTV",
    "videovigilancia profesional",
    "cámaras IP",
    "sistemas de grabación",
    "cableado estructurado",
    "Kualitek",
  ],
  openGraph: {
    title: "Kualitek | Instaladores Profesionales de Cámaras CCTV",
    description:
      "Protege tu negocio con sistemas de videovigilancia de última generación. Instalación profesional en Barcelona y Madrid.",
    type: "website",
    locale: "es_ES",
    url: "https://kualitek.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
