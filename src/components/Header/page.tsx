"use client";

import React, { useState } from "react";
import ContactoButtoms from "../buttons/contacto/page";
import UnaseButtoms from "../buttons/unase/page";
import Image from "next/image";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const navegaciones = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center pt-5">
      <header className="relative flex justify-between items-center p-4 w-2/3 bg-white rounded-full border border-[#ccc] shadow-md">
        <div>
          <Image src="/logo1.png" alt="Logo" width={48} height={48} />
        </div>
        <nav className="hidden md:flex gap-4">
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
        <div className="hidden md:flex gap-7">
          <UnaseButtoms />
          <ContactoButtoms />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoMdClose size={32} /> : <RiMenu5Fill size={32} />}
        </button>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`absolute top-0 left-0 h-screen w-2/3 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-6 p-6">
          {navegaciones.map((nav, index) => (
            <a
              key={index}
              href={nav.href}
              className="text-gray-700 font-semibold hover:text-blue-600 text-lg px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-100 w-full"
            >
              {nav.label}
            </a>
          ))}
        </div>
        <div className="p-6 flex flex-col items-center gap-4 border-t border-gray-200">
          <UnaseButtoms />
          <ContactoButtoms />
        </div>
      </div>
    </div>
  );
}
