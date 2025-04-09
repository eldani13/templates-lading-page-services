"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import imagen5 from "../../../public/imagen5.webp";

const faqs = [
  {
    question: "¿Cómo puedo solicitar una reparación de lavadora o nevera?",
    answer:
      "Puedes contactarnos fácilmente por WhatsApp, llamada o a través del formulario en nuestro sitio web. Atendemos en toda Barranquilla y alrededores.",
  },
  {
    question: "¿Qué electrodomésticos reparan y qué marcas atienden?",
    answer:
      "Nos especializamos en la reparación de lavadoras, neveras y aires acondicionados. Trabajamos con marcas como Samsung, LG, Whirlpool, Mabe, Haceb, Challenger, entre otras.",
  },
  {
    question: "¿Ofrecen garantía en sus servicios técnicos?",
    answer:
      "Sí, todas nuestras reparaciones cuentan con garantía por escrito y repuestos originales. Tu tranquilidad está asegurada con Blanco Tech.",
  },
];

export default function PreguntasComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-24 bg-white">
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src={imagen5.src}
          alt="Servicio técnico reparando lavadora en Barranquilla"
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-auto h-[70vh] object-cover"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left ml-0 md:ml-12">
        <div className="flex flex-col gap-1 mb-10">
          <h3 className="text-text text-lg font-[500] mb-4">
            Preguntas Frecuentes
          </h3>
          <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
            Respuestas Rápidas a <br /> Tus Dudas
          </h2>
        </div>

        <div className="space-y-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button
                className="w-full flex justify-between items-center text-xl font-medium text-gray-800 mb-2 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mb-6 text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
