import { FaArrowRightLong } from "react-icons/fa6";

export default function UnaseButtoms() {
  const phoneNumber = "+573003350138";
  const message = encodeURIComponent(
    "Hola, estoy interesado en conocer más sobre sus servicios. ¿Podrían darme más información?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black flex items-center gap-2 text-sm hover:underline"
    >
      Únase a nosotros
      <FaArrowRightLong size={15} />
    </a>
  );
}
