import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Luis Hernández — Portafolio",
  description:
    "Proyectos de desarrollo web, e-commerce, finanzas y contenido de Luis Antonio Hernández Cotero: tiendas en línea, sitios de afiliados, herramientas financieras y automatización.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Luis Hernández — Portafolio",
    description: "Tiendas en línea, sitios de afiliados, herramientas financieras y automatización.",
    images: ["/proyectos/aetherium.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans bg-bg text-ink antialiased`}>{children}</body>
    </html>
  );
}
