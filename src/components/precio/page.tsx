import { FaCheckCircle, FaLock, FaStar } from "react-icons/fa";
import Image from "next/image";
import perfil2 from "../../../public/perfil2.jpg"

export default function PrecioComponent() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 lg:px-16 lg:py-24 bg-white gap-y-12 lg:gap-x-16">
      <div className="lg:w-1/2 max-w-lg text-center lg:text-left lg:pr-16">
        <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
          Consulta Nuestras Tarifas
        </h2>

        <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-center lg:justify-start">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-text text-xl" />
            ))}
          </div>
          <p className="text-gray-600">
            Elegir Reparaciones Express fue lo mejor que pudimos hacer. La
            rapidez y calidad del servicio superaron nuestras expectativas.
          </p>
        </div>

        <div className="flex items-center justify-center lg:justify-start mt-4">
          <Image
            src={perfil2.src}
            alt="Cliente"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-gray-900">Juan Pérez</p>
            <p className="text-gray-500 text-sm">Cliente Satisfecho</p>
          </div>
        </div>
        </div>
      </div>

      <div className=" bg-white shadow-lg rounded-lg p-8 border">
        <p className="text-text font-semibold text-sm uppercase text-center lg:text-left">
          Paquete Único
        </p>
        <h3 className="text-5xl font-bold text-gray-900 mt-2 text-center lg:text-left">
          $200.000
        </h3>

        <ul className="mt-4 space-y-3">
          {[
            "Reparación de Lavadoras",
            "Reparación de Neveras",
            "Mantenimiento Preventivo",
            "Servicio a Domicilio",
            "Soporte Premium",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-text mr-2" />
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-text hover:bg-blue-600 text-white font-semibold py-3 w-full rounded-lg mt-6 transition-all duration-300">
          Obtener acceso completo
        </button>

        <div className="flex items-center justify-center lg:justify-start text-gray-500 text-sm mt-4">
          <FaLock className="mr-2" />
          Garantía de Devolución de Dinero en 14 Días
        </div>
      </div>
    </section>
  );
}
