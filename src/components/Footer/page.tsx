import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secundary py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:gap-4">
        <div>
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Reparaciones Express. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 md:mb-0">
          <a href="#" className="hover:text-text">
            Sobre Nosotros
          </a>
          <a href="#" className="hover:text-text">
            Nuestros Servicios
          </a>
          <a href="#" className="hover:text-text">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-text">
            Términos y Condiciones
          </a>
          <a href="#" className="hover:text-text">
            Soporte
          </a>
        </div>
        <div className="flex gap-4 text-gray-600">
          <a href="#" className="hover:text-text">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-text">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-text">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
