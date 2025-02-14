import { FaArrowRightLong } from "react-icons/fa6";

export default function DescubreServiciosButtoms() {
  return (
    <button className="mt-5 bg-text text-white px-6 py-3 rounded-lg text-xs md:text-lg hover:bg-blue-700 flex items-center gap-2">
      Descubre Nuestros Servicios
      <FaArrowRightLong size={15} />
    </button>
  );
}
