import type { Metadata } from "next";
import "./../globals.css";



export const metadata: Metadata = {
  title: "Servicios - Reparaciones",
  description: "Servicios - Reparaciones",
  keywords: ["reparación de electrodomésticos", "servicio técnico", "lavadoras", "neveras"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
