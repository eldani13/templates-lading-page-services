import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactoButtoms() {
  const phoneNumber = "+573003350138";
  const message = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre sus servicios. ¿Podrían asesorarme?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-text text-white px-4 py-2 rounded-full hover:bg-blue-700 flex justify-center items-center gap-2 transition-all duration-300"
    >
      Contáctenos
      <FaArrowRightLong size={15} />
    </a>
  );
}
