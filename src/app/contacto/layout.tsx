import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Contacto | Blanco Tech",
  description:
    "Contáctanos para reparar tu lavadora, nevera o aire acondicionado en Barranquilla. Servicio técnico rápido, confiable y garantizado.",
  keywords: [
    "contacto servicio técnico",
    "reparación de electrodomésticos",
    "reparación de lavadoras",
    "reparación de neveras",
    "técnico de refrigeración",
    "mantenimiento de aires acondicionados",
    "técnico especializado en Barranquilla",
    "soporte técnico electrodomésticos",
  ],
  openGraph: {
    title: "Contacto | Blanco Tech",
    description:
      "Agenda tu servicio técnico con expertos en reparación de electrodomésticos. ¡Atención rápida y garantizada en Barranquilla!",
    url: "https://blancotech.co/contacto",
    siteName: "Reparaciones Express",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Contacta a Reparaciones Express en Barranquilla",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TuCuenta",
    title: "Contacto | Reparación de Electrodomésticos en Barranquilla",
    description:
      "Repara tu lavadora, nevera o aire acondicionado con expertos en Barranquilla. ¡Atención rápida y profesional!",
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
