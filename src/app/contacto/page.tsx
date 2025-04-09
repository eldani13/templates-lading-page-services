import FooterComponent from "@/components/Footer/page";
import HeaderComponent from "@/components/Header/page";
import ContactoUbicacionComponent from "@/components/contactoUbi/page";
import LlamaAhoraComponent from "@/components/llama/page";
import EncuentranosComponent from "@/components/encuentranos/page";
import HorariosComponent from "@/components/horarios/page";
import { FaTools, FaUserCog, FaShieldAlt } from "react-icons/fa";

const banner = "/banner.webp";

export default function ContactoPage() {
  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      <HeaderComponent />

      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>

        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl text-white mb-4">
          Contacto | Servicio Técnico de Electrodomésticos en Barranquilla
          </h1>
          <p className="text-gray-300 text-lg mb-8">
          Contáctanos para reparar <strong>lavadoras, neveras y aires acondicionados</strong> 
  en <strong>Barranquilla</strong>. Nuestro equipo ofrece atención inmediata, servicio a domicilio 
  y <strong>garantía en cada reparación</strong>. ¡Estamos listos para ayudarte hoy mismo!
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-6 mt-10">
          <div className="bg-white bg-opacity-5 border border-[#405c8a] backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-left">
            <div className="flex items-center space-x-3">
              <FaTools className="text-2xl text-text" />
              <h3 className="text-xl font-semibold">Reparación de Lavadoras y Neveras</h3>
            </div>
            <p className="mt-2 text-gray-300 text-base">
              Solucionamos problemas de lavadoras <br /> y neveras en un abrir y
              cerrar de ojos.
            </p>
          </div>

          <div className="bg-white bg-opacity-5 border border-[#405c8a] backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-left">
            <div className="flex items-center space-x-3">
              <FaUserCog className="text-2xl text-text" />
              <h3 className="text-xl font-semibold">Atención Personalizada con Garantía</h3>
            </div>
            <p className="mt-2 text-gray-300 text-base">
              Atención adaptada a tus necesidades <br />
              específicas y con garantía.
            </p>
          </div>

          <div className="bg-white bg-opacity-5 border border-[#405c8a] backdrop-blur-md p-6 rounded-lg shadow-lg text-white text-left">
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-2xl text-text" />
              <h3 className="text-xl font-semibold">Soporte Técnico Confiable en Barranquilla</h3>
            </div>
            <p className="mt-2 text-gray-300 text-base">
              Estamos aquí para ayudarte en cada <br />
              paso del camino con total confianza.
            </p>
          </div>
        </div>
      </section>
      <ContactoUbicacionComponent/>
      <LlamaAhoraComponent/>
      <EncuentranosComponent/>
      <HorariosComponent/>

      <FooterComponent />
    </div>
  );
}
