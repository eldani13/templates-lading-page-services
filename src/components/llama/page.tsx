import { FaPhone } from "react-icons/fa6";

export default function LlamaAhoraComponent() {
    return (
      <section className="text-center py-12">
        <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">¡Llama Ahora!</h2>
  
        <p className="text-gray-600 mt-2">
          Obtén una reparación rápida y confiable para tus electrodomésticos.
          <br /> ¡Estamos aquí para ayudarte!
        </p>
  
        <div className="mt-6 flex justify-center items-center gap-4">
          <button className="bg-text text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Contáctanos
          </button>
          <a href="#" className="text-gray-900 flex items-center gap-1 hover:text-gray-700 transition">
            Conoce Más <span> 
            <FaPhone size={20} />

            </span>
          </a>
        </div>
      </section>
    );
  }
  