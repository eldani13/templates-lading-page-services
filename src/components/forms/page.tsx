"use client";

import { useEffect, useRef, useState  } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import EnviarButtoms from "../buttons/enviar/page";

export default function FormContactoComponent() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!formRef.current) return;

    const inputs = formRef.current.querySelectorAll("input, textarea, button");

    gsap.fromTo(
      inputs,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);
    setMessage('');

    try {
      const result = await emailjs.sendForm(
        "service_21eetlp",  
        "template_mm5pozu",   
        formRef.current,     
        "F-mGqCco39_NJibSX"        
      );
      console.log(result.text);
      setMessage('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setMessage('Hubo un problema al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSending(false);
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="user_name"
          placeholder="Tu Nombre"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Tu Correo"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <input
          type="text"
          name="user_phone"
          placeholder="Tu Teléfono"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus:border-text"
        />
      </div>
      <div>
        <textarea
          rows={6}
          name="message"
          placeholder="Tu Mensaje"
          className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] resize-none outline-none focus:border-text"
        ></textarea>
      </div>

      {message && <div className="text-center text-sm text-green-500">{message}</div>}

      <div>
        <EnviarButtoms isSending={isSending} />
      </div>
    </form>
  );
}
