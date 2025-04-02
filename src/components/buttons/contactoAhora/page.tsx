export default function ContactoAhoraButtoms() {
  const telefono = '+573003350138';
  const mensaje = '¡Hola!%20Estoy%20interesado%20en%20recibir%20información%20sobre%20reparaciones%20de%20lavadoras.%20¿Pueden%20ayudarme%20con%20más%20detalles%20y%20disponibilidad?';
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-text text-white px-6 py-3 rounded-lg text-xs md:text-lg hover:bg-blue-700">
        Contáctanos Ahora
      </button>
    </a>
  );
}
