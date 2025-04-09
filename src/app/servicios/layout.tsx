import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Servicios - Blanco Tech",
  description:
    "Servicio técnico especializado en reparación de lavadoras, neveras y aires acondicionados. Atención rápida y garantizada en Barranquilla. ¡Solicita tu servicio ahora!",
  keywords: [
    "reparación de electrodomésticos",
    "servicio técnico",
    "reparación de lavadoras",
    "reparación de neveras",
    "técnico de refrigeración",
    "mantenimiento de aires acondicionados",
    "reparación a domicilio",
    "técnico especializado en Barranquilla",
    "servicio rápido y garantizado",
  ],
  openGraph: {
    title: "Servicios de Reparación | Blanco Tech",
    description:
      "Reparación profesional de lavadoras, neveras y aires acondicionados en Barranquilla. ¡Servicio técnico confiable y garantizado!",
      url: "https://blancotech.co/servicios",
    siteName: "Reparaciones Express",
    images: [
      {
        url: "https://blancotech.co/logo1.png",
        width: 1200,
        height: 630,
        alt: "Servicio técnico de reparación en Barranquilla",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TuCuenta",
    title: "Servicios de Reparación | Blanco Tech",
    description:
      "Reparación profesional de lavadoras, neveras y aires acondicionados en Barranquilla. ¡Servicio técnico confiable y garantizado!",
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
