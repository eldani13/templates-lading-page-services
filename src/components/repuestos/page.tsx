import { BiCloudUpload } from "react-icons/bi";
import { IoMdLock } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import Image from "next/image";
import imagen6 from "../../../public/imagen6.jpeg";

export default function RespuestoComponent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-24 bg-white">
      <div className="md:w-1/2 text-center md:text-left md:ml-52">
        <div className="flex flex-col gap-1 mb-16">
          <h3 className="text-text text-lg font-[500] mb-10">
            Repuestos Originales
          </h3>
          <h2 className="text-3xl md:text-5xl font-[500] text-gray-800 mb-4">
            Calidad y Durabilidad
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Utilizamos únicamente repuestos originales para asegurar <br />
            que cada reparación sea duradera y confiable.
          </p>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex  gap-4">
            <BiCloudUpload size={30} className="text-text" />
            <div className="flex flex-col">
              <span className="text-black text-lg font-[500]">
                Despliegue Instantáneo
              </span>
              <p className="text-gray-400">
                Asegúrate de que tus electrodomésticos vuelvan a funcionar{" "}
                <br />
                rápidamente.
              </p>
            </div>
          </div>
          <div className="flex  gap-4">
            <IoMdLock size={30} className="text-text" />
            <div className="flex flex-col">
              <span className="text-black text-lg font-[500]">SSL Seguro</span>
              <p className="text-gray-400">
                Tu seguridad es nuestra prioridad. Disfruta de un servicio{" "}
                <br />
                confiable y seguro.
              </p>
            </div>
          </div>
          <div className="flex  gap-4">
            <FaDatabase size={30} className="text-text" />
            <div className="flex flex-col">
              <span className="text-black text-lg font-[500]">
                Respaldo Eficiente
              </span>
              <p className="text-gray-400">
                Nunca pierdas tu tranquilidad. Nuestro servicio asegura que tus{" "}
                <br />
                electrodomésticos funcionen sin problemas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src={imagen6.src}
          alt="Técnico reparando lavadora"
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-auto h-[70vh] object-cover"
        />
      </div>
    </section>
  );
}
