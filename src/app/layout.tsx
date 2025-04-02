import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reparaciónes | Blanco Tech",
  description:
    "Reparaciones Express ofrece servicio técnico especializado en reparación de lavadoras, neveras, aires acondicionados y más. Atención rápida y garantizada en Barranquilla.",
  keywords: [
    "reparación de electrodomésticos",
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
