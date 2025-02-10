import React from "react";
import ContactoButtoms from "../buttons/contacto/page";
import UnaseButtoms from "../buttons/unase/page";
import logo from "../../../public/logo.png"

export default function HeaderComponent() {
  const navegaciones = [
    { href: "/", label: "Inicio" },
    { href: "servicios", label: "Servicios" },
    { href: "contacto", label: "Contacto" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-5">
      <header className="flex justify-around items-center p-2 w-2/3 bg-white rounded-full border border-[#ccc] shadow-md">
      <div>

        <img src={logo.src} alt="Logo" className="h-12 w-12 " />
      </div>
      <div>
        
      </div>
        <nav className="flex gap-4">
          {navegaciones.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-gray-700 font-medium hover:text-text"
            >
              {nav.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-7">
          <UnaseButtoms />
          <ContactoButtoms />
        </div>
      </header>
    </div>
  );
}
