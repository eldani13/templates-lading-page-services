"use client";

import React from "react";
import { FaTools } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import DescubreServiciosButtoms from "../buttons/descubreServicios/page";
import Image from "next/image";
import imagen1 from "../../../public/imagen1.webp";

export default function ElegirnosComponent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-24 bg-white w-full max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left md:ml-10">
        <div className="flex flex-col gap-1 mb-10 md:mb-16">
          <h3 className="text-text text-start text-lg font-[500] mb-4 md:mb-10">
            Tu Mejor Opción
          </h3>
          <section className="">
            <h2 className="text-3xl text-start md:text-5xl font-[500] text-gray-800 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-600 text-start mb-6 text-lg">
              En <strong>Blanco Tech</strong> ofrecemos un{" "}
              <strong>servicio técnico especializado</strong> en la{" "}
              <strong>
                reparación de lavadoras, neveras y aires acondicionados
              </strong>{" "}
              en <strong>Barranquilla</strong>. Nuestros técnicos altamente
              capacitados trabajan con <strong>repuestos originales</strong> y
              ofrecen <strong>garantía por escrito</strong> en todos los
              servicios.
            </p>
            <p className="text-gray-600 text-start text-lg">
              Atendemos a domicilio en toda el área metropolitana. Contamos con
              atención inmediata, diagnóstico preciso y precios competitivos. Si
              necesitas un <strong>técnico de lavadoras</strong>,{" "}
              <strong>reparación de neveras</strong> o{" "}
              <strong>mantenimiento de aire acondicionado</strong>, ¡somos tu
              mejor opción!
            </p>
          </section>
        </div>
        <hr className="mb-6 md:mb-10 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-start gap-4">
            <FaTools size={24} className="text-black" />
            <p className="text-black font-bold text-base md:text-sm text-justify">
              Técnicos altamente <br className="hidden md:block" /> capacitados
              listos para <br className="hidden md:block" />
              ayudarte.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaGears size={30} className="text-black" />
            <p className="text-black font-bold text-base md:text-sm text-justify">
              Repuestos originales para <br className="hidden md:block" />{" "}
              asegurar la calidad.
            </p>
          </div>
        </div>
        <DescubreServiciosButtoms />
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src={imagen1.src}
          alt="Técnico reparando lavadora"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
        />
      </div>
    </section>
  );
}
