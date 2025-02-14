import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secundary py-6">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-gray-600 text-sm">© {currentYear} Reparaciones Express. Todos los derechos reservados.</p>
        
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600 md:flex-row md:gap-4">
          <a href="#" className="hover:text-text">Sobre Nosotros</a>
          <a href="#" className="hover:text-text">Nuestros Servicios</a>
          <a href="#" className="hover:text-text">Política de Privacidad</a>
          <a href="#" className="hover:text-text">Términos y Condiciones</a>
          <a href="#" className="hover:text-text">Soporte</a>
        </div>

        <div className="flex gap-4 text-gray-600">
          <a href="#" className="hover:text-text"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-text"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-text"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}