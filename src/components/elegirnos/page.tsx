"use client";

import React from "react";
import { FaTools } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import DescubreServiciosButtoms from "../buttons/descubreServicios/page";
import imagen1 from "../../../public/imagen1.webp";


export default function ElegirnosComponent() {

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-24 bg-white"
    >
      <div className="md:w-1/2 text-center md:text-left ml-52">
        <div className="flex flex-col gap-1 mb-16">
          <h3 className="text-text text-lg font-[500] mb-10">Tu Mejor Opción</h3>
          <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Ofrecemos un servicio técnico especializado con garantía y <br />
            atención personalizada.
          </p>
        </div>
        <hr className="mb-10 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-4">
            <FaTools size={20} className="text-black" />
            <p className="text-black font-bold">
              Técnicos altamente <br /> capacitados listos para <br />
              ayudarte.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaGears size={30} className="text-black" />
            <p className="text-black font-bold">
              Repuestos originales para <br /> asegurar la calidad.
            </p>
          </div>
        </div>
        <DescubreServiciosButtoms />
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={imagen1.src}
          alt="Técnico reparando lavadora"
          className="rounded-lg shadow-lg w-auto h-[70vh] object-cover"
        />
      </div>
    </section>
  );
}
