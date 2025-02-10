"use client";

import React from "react";
import Image from "next/image";
import svg1 from "../../../public/svg1.svg";
import svg2 from "../../../public/svg2.svg";
import svg3 from "../../../public/svg3.svg";
import FormContactoComponent from "../forms/page";

export default function SatisfaccionComponent() {


  return (
    <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div
              className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg"
            >
              <FormContactoComponent />
              <div>
                <span
                  
                  className="absolute -top-10 -right-9 z-[-1]"
                >
                  <Image src={svg3.src} width={100} height={100} alt="" />
                </span>

                <span
                 
                  className="absolute -right-10 top-[90px] z-[-1]"
                >
                  <Image src={svg2.src} width={40} height={40} alt="" />
                </span>
                <span
                 
                  className="absolute -left-7 -bottom-7 z-[-1]"
                >
                  <Image src={svg1.src} width={100} height={100} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div  className="max-w-[570px] mb-12 lg:mb-0">
              <h3 className="text-text text-lg font-[500] mb-10">
                Contactanos
              </h3>
              <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
                Ponte en contacto con nosotros
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Estamos aquí para ayudarte. Si tienes alguna pregunta, inquietud
                o necesitas más información sobre nuestros servicios, no dudes
                en contactarnos. Nuestro equipo estará encantado de atenderte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
