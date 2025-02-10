"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import imagen2 from "../../../public/imagen2.webp";
import imagen3 from "../../../public/imagen3.webp";
import imagen4 from "../../../public/imagen4.webp";
import DescubreServiciosButtoms from "../buttons/descubreServicios/page";

export default function GarantiaComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 lg:p-16">
      <div className="max-w-[570px] ml-44">
        <h3 className="text-text text-lg font-[500] mb-10">Satisfacción</h3>
        <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
          ¡Garantía de Satisfacción!
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Confía en nosotros para reparar tus electrodomésticos con eficacia.
        </p>
        <p className="text-gray-600 mb-6 text-lg">
          Nuestro compromiso es ofrecerte un servicio de calidad que supere tus
          expectativas.
        </p>
        <DescubreServiciosButtoms />
      </div>

      <div className="relative w-full lg:w-1/2 h-[40vh] bg-slate-800 rounded-lg overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          <div className="w-full flex-shrink-0 flex items-center justify-center">
            <Image
              src={imagen2.src}
              alt="Imagen 2"
              width={800}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full flex-shrink-0 flex items-center justify-center">
            <Image
              src={imagen3.src}
              alt="Imagen 3"
              width={800}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="w-full flex-shrink-0 flex items-center justify-center">
            <Image
              src={imagen4.src}
              alt="Imagen 4"
              width={800}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                activeSlide === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
