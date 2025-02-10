import { FaLocationDot } from "react-icons/fa6";

export default function EncuentranosComponent() {
  return (
    <section className="flex items-center justify-center py-12">
      <div className="max-w-md">
        <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
          Encuéntranos Aquí
        </h2>
        <p className="text-gray-600 mt-2">
          Visítanos en nuestra oficina en Madrid para una consulta
          personalizada.
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-text">
            <FaLocationDot size={20} />
          </span>
          <a
            href="https://www.google.com/maps/place/Reparaciones+Express+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text font-medium hover:underline"
          >
            Reparaciones Express Madrid
          </a>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-96 h-64 rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.144219526967!2d-3.656006284610932!3d40.44598377936225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42262dfcd6f9f3%3A0x1e4b3c6b60bb5e0e!2sReparaciones%20Express%20Madrid!5e0!3m2!1sen!2ses!4v1679615123456!5m2!1sen!2ses"
        ></iframe>
      </div>
    </section>
  );
}
