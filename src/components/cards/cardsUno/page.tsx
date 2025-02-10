import { FaTools } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { IoTime } from "react-icons/io5";
import { RiEmotionHappyFill } from "react-icons/ri";

export default function CardUnoComponent() {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl md:text-6xl text-gray-800 ">
            Caracteristicas
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
            ></line>
          </svg>
          <p className="text-gray-500 mt-2">
            Contenido que viene integrado para que el cliente salga satisfecho.
          </p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <FaTools size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Reparación de Lavadoras
              </h3>
              <p className="text-gray-500">
                Deja que nuestros técnicos expertos revivan tu lavadora.
                Servicio rápido y garantizado.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <MdOutlineSevereCold size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Reparación de Neveras
              </h3>
              <p className="text-gray-500">
                No dejes que tus alimentos se echen a perder. Reparamos neveras
                de todas las marcas.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <MdOutlineSecurity size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Garantía de Calidad
              </h3>
              <p className="text-gray-500">
                Usamos repuestos originales para asegurar la durabilidad de la
                reparación.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <TiHome size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Servicio a Domicilio
              </h3>
              <p className="text-gray-500">
                Te visitamos en casa para tu máxima comodidad y conveniencia.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <IoTime size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Rápido y Eficiente
              </h3>
              <p className="text-gray-500">
                Reparaciones en tiempo récord para que vuelvas a tu rutina sin
                problemas.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-secundary border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-lg">
              <div className="inline-block text-text mb-4 bg-white p-2 rounded-full">
                <RiEmotionHappyFill size={25} />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Atención Personalizada
              </h3>
              <p className="text-gray-500">
                Nos importa tu satisfacción, por eso ofrecemos atención
                personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
