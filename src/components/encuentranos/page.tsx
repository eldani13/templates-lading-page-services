import { FaLocationDot } from "react-icons/fa6";

export default function EncuentranosComponent() {
  return (
    <section className="flex flex-col items-center justify-center py-12 text-center md:flex-row md:text-left">
      <div className="max-w-md mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
          Encuéntranos Aquí
        </h2>
        <p className="text-gray-600 mt-2">
          Visítanos en nuestra oficina en Barranquilla para una consulta
          personalizada.
        </p>

        <div className="mt-4 flex flex-col items-center gap-2 md:flex-row">
          <span className="text-text">
            <FaLocationDot size={20} />
          </span>
          <a
            href="https://www.google.com/maps/place/Barranquilla,+Atl%C3%A1ntico,+Colombia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text font-medium hover:underline"
          >
            Reparaciones Express Barranquilla - Blanco Tech
          </a>
        </div>
      </div>

      <div className="w-[90%] h-64 rounded-lg overflow-hidden shadow-lg md:w-96">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4813981558613!2d-74.80097238553105!3d10.987654292181334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d9b11a6b0b9%3A0x1d3f4d99f3eaa6e!2sBarranquilla%2C%20Atl%C3%A1ntico%2C%20Colombia!5e0!3m2!1ses!2sco!4v1648600123456!5m2!1ses!2sco"
        ></iframe>
      </div>
    </section>
  );
}
