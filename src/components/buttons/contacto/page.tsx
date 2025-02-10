import { FaArrowRightLong } from "react-icons/fa6";


export default function ContactoButtoms(){
    return (
        <button className="bg-text text-white px-4 py-2 rounded-full hover:bg-blue-700 flex justify-center items-center gap-2">
            Contáctenos
            <FaArrowRightLong size={15} />
          </button>
    )
}