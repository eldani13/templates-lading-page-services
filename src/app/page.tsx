"use client";

import React from "react";
import HeaderComponent from "@/components/Header/page";
import FooterComponent from "@/components/Footer/page";
import ContactoAhoraButtoms from "@/components/buttons/contactoAhora/page";
import ConoceMasButtoms from "@/components/buttons/conoceMas/page";
import ElegirnosComponent from "@/components/elegirnos/page";
import SatisfaccionComponent from "@/components/satisfaccion/page";
import GarantiaComponent from "@/components/garantia/page";
import PreguntasComponent from "@/components/preguntas/page";

const Home: React.FC = () => {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <div className="absolute top-10 left-[400px] w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute top-56 left-[1000px] w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-2xl"></div>

      <HeaderComponent />

      <main className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 pt-20">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

        <section className="flex flex-col items-center">
          <div className="pb-10">
            <span className="text-text border border-text rounded-full p-3 text-sm hidden md:block">
              ¡Bienvenidos a Reparaciones Blanco Tech! Tu solución confiable
              para electrodomésticos.
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl text-gray-800 mb-4">
            Servicios tecnico de lavadoras <br /> Blanco Tech
          </h1>

          <p className="text-gray-600 text-sm md:text-lg max-w-72 md:max-w-full mb-8">
            ¿Tu lavadora o nevera dejó de funcionar? En Blanco Tech ofrecemos
            servicio técnico especializado en electrodomésticos con repuestos
            originales y garantía en Barranquilla.
          </p>
        </section>

        <div className="flex gap-4">
          <ContactoAhoraButtoms />
          <ConoceMasButtoms />
        </div>
      </main>

      <ElegirnosComponent />
      <SatisfaccionComponent />
      <GarantiaComponent />
      <PreguntasComponent />

      <FooterComponent />
    </div>
  );
};

export default Home;
