"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import EnviarButtoms from "../buttons/enviar/page";

export default function FormContactoComponent() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    const inputs = formRef.current.querySelectorAll("input, textarea, button");

    gsap.fromTo(
      inputs,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <form ref={formRef} className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Tu Nombre"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Tu Correo"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Tu Teléfono"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <textarea
          rows={6}
          placeholder="Tu Mensaje"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] resize-none outline-none focus:border-text"
        ></textarea>
      </div>
      <div>
        <EnviarButtoms />
      </div>
    </form>
  );
}
