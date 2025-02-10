import {
  FaHeadset,
  FaChartLine,
  FaCheckCircle,
  FaBox,
  FaShieldAlt,
  FaIdBadge,
} from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";




export default function CardDosComponent() {
  const services = [
    {
      icon: <FaHeadset size={30} className="text-text" />,
      title: "Soporte Dedicado",
      description:
        "Nuestro equipo está aquí para ayudarte en cada paso del proceso.",
    },
    {
      icon: <FaChartLine size={30} className="text-text" />,
      title: "Mejora Continua",
      description:
        "Siempre buscamos mejorar nuestros servicios para ofrecerte lo mejor.",
    },
    {
      icon: <BsFillPersonCheckFill  size={30} className="text-text" />,
      title: "Proceso Sencillo",
      description:
        "Hacemos que la reparación sea un proceso fácil y sin complicaciones.",
    },
    {
      icon: <FaBoxOpen size={30} className="text-text" />,
      title: "Excelencia en Producto",
      description:
        "Nos aseguramos de que cada reparación cumpla con altos estándares de calidad.",
    },
    {
      icon: <TbHeartHandshake size={30} className="text-text" />,
      title: "Calidad Asegurada",
      description:
        "Garantizamos que cada reparación cumple con nuestros estrictos controles de calidad.",
    },
    {
      icon: <FaIdBadge size={30} className="text-text" />,
      title: "Resultados Comprobados",
      description: "Nuestra experiencia y resultados hablan por sí mismos.",
    },
  ];

  return (
    <div className="text-center p-8 flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">
        Expertos en Reparación de Neveras
      </h2>
      <p className="text-gray-500 mt-2">
        Nuestros técnicos están capacitados para reparar neveras de todas las
        marcas y modelos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl justify-center items-center mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-r border-b p-6  flex flex-col items-center text-center"
          >
            <div className=" p-3 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-500 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
