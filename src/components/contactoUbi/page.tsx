export default function ContactoUbicacionComponent() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-16 py-12">
      <div className="mb-12 flex flex-col items-center text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">
            Mantente en Contacto
          </h2>
          <p className="text-gray-600 mt-2">
            Nuestro equipo está listo para resolver tus dudas y <br />
            brindarte la mejor asistencia. ¡Hablemos!
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6 md:flex-row">
          <div className="bg-secundary p-6 rounded-lg ">
            <h3 className="text-xl md:text-2xl text-gray-800">
              Asistencia Técnica
            </h3>
            <a
              href="mailto:soporte@reparacionesexpress.com"
              className="text-text font-medium"
            >
              soporte@reparacionesexpress.com
            </a>
            <p className="text-gray-700">+57 123 456 789</p>
          </div>

          <div className="bg-secundary p-6 rounded-lg ">
            <h3 className="text-xl md:text-2xl text-gray-800">
              Consultas Generales
            </h3>
            <a
              href="mailto:info@reparacionesexpress.com"
              className="text-text font-medium"
            >
              info@reparacionesexpress.com
            </a>
            <p className="text-gray-700">+57 987 654 321</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      <div className="mb-12 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-4xl md:text-6xl text-gray-800 mb-4">
            Nuestras <br /> Ubicaciones
          </h2>
          <p className="text-gray-600 mt-2">
            Visítanos en nuestra sede principal en Madrid.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-6 md:flex-row">
          <div className="bg-secundary p-6 rounded-lg w-72 h-40 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl text-gray-800 text-center">
              Soledad
            </h3>
            <p className="text-gray-700 text-center">Soledad</p>
          </div>

          <div className="bg-secundary p-6 rounded-lg w-72 h-40 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl text-gray-800 text-center">
              Barranquilla
            </h3>
            <p className="text-gray-700 text-center">Barranquilla</p>
          </div>
        </div>
      </div>
    </section>
  );
}