"use client"; 

import { FaPhone } from "react-icons/fa6";

export default function LlamaAhoraComponent() {
  const phoneNumber = "573003350138";

  const handleContactClick = () => {
    const message = encodeURIComponent(
      "Hola, estoy interesado en obtener más información sobre sus servicios de reparación. ¿Podrían brindarme detalles?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleLearnMoreClick = () => {
    const message = encodeURIComponent(
      "Hola, me gustaría conocer más sobre los servicios que ofrecen. ¿Podrían enviarme información detallada?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="text-center py-12">
      <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">¡Llama Ahora!</h2>

      <p className="text-gray-600 mt-2">
        Obtén una reparación rápida y confiable para tus electrodomésticos.
        <br /> ¡Estamos aquí para ayudarte!
      </p>

      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          className="bg-text text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleContactClick}
        >
          Contáctanos
        </button>

        <a
          href="#"
          className="text-gray-900 flex items-center gap-1 hover:text-gray-700 transition"
          onClick={handleLearnMoreClick}
        >
          Conoce Más <FaPhone size={20} />
        </a>
      </div>
    </section>
  );
}
