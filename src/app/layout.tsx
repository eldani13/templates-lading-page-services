import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inicio - Blanco Tech",
  description:
    "Servicio técnico especializado en reparación de electrodomésticos en Barranquilla: lavadoras, neveras, aires acondicionados. Atención rápida, repuestos originales y garantía.",
  keywords: [
    "reparación de electrodomésticos Barranquilla",
    "reparación de electrodomésticos",
    "técnico de lavadoras",
    "técnico de neveras",
    "reparación de aires acondicionados",
    "técnico a domicilio",
    "lavadoras Samsung LG Mabe Challenger",
    "reparaciones garantizadas Barranquilla",
    "reparación técnica urgente",
    "servicio técnico",
    "reparación de lavadoras",
    "reparación de neveras",
    "mantenimiento de aires acondicionados",
    "técnico de electrodomésticos",
    "servicio a domicilio",
    "Barranquilla",
    "servicio garantizado",
    "técnico especializado",
  ],
  openGraph: {
    title: "Reparaciónes | Blanco Tech",
    description:
      "Expertos en reparación de neveras, lavadoras y aires acondicionados en Barranquilla. Atención inmediata y precios competitivos.",
    url: "https://blancotech.co/",
    siteName: "Reparaciones Express",
    images: [
      {
        url: "https://blancotech.co/logo1.png",
        width: 1200,
        height: 630,
        alt: "Reparación de electrodomésticos en Barranquilla",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TuCuenta",
    title: "Reparación de Electrodomésticos | Blanco Tech",
    description:
      "Expertos en reparación de neveras, lavadoras y aires acondicionados en Barranquilla. Atención inmediata y precios competitivos.",
    images: ["https://blancotech.co/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Reparaciones Express" />
        <meta name="geo.region" content="CO-ATL" />
        <meta name="geo.placename" content="Barranquilla, Colombia" />
        <meta name="geo.position" content="10.9639;-74.7964" />
        <meta name="ICBM" content="10.9639, -74.7964" />
      </head>
      <body>{children}</body>
    </html>
  );
}
