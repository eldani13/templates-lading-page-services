export default function HorariosComponent() {
  return (
    <section className="bg-secundary py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center md:flex-row md:text-left">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
            Nuestros Horarios
          </h2>
          <p className="text-gray-700 mt-2">
            Estamos disponibles para ayudarte de lunes a viernes, de 
            8:00 a 16:00.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-6 w-full md:flex-row md:w-auto md:items-center">
          <div className="p-6 text-center flex flex-col justify-center items-center ">
            <p className="text-4xl md:text-5xl text-gray-800 mb-4">8:00 - 16:00</p>
            <p className="text-text font-semibold">Lunes a Viernes</p>
          </div>

          <div className="hidden md:block w-[2px] bg-gray-300"></div>

          <div className="p-6 text-center flex flex-col justify-center items-center  ">
            <p className="text-4xl md:text-5xl text-gray-800 mb-4">09:00 - 13:00</p>
            <p className="text-text font-semibold">Sábados</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-36 text-center">
        <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
          Preguntas Frecuentes
        </h2>

        <div className="mt-14 space-y-6 text-left">
          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              01. ¿Qué servicios ofrece Reparaciones Express?
            </h3>
            <p className="text-gray-700 mt-2">
              Nos especializamos en la reparación de lavadoras y neveras con
              garantía y atención personalizada.
            </p>
          </div>

          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              02. ¿Cómo puedo solicitar una reparación?
            </h3>
            <p className="text-gray-700 mt-2">
              Puedes contactarnos a través de nuestro formulario en línea o
              llamarnos directamente para agendar una visita.
            </p>
          </div>

          <div className="border-b border-gray-300 pb-4">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              03. ¿Ofrecen servicio a domicilio?
            </h3>
            <p className="text-gray-700 mt-2">
              Sí, realizamos reparaciones a domicilio para tu comodidad y
              conveniencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
