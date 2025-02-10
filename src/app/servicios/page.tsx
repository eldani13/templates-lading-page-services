import FooterComponent from "@/components/Footer/page";
import HeaderComponent from "@/components/Header/page";
import CardUnoComponent from "@/components/cards/cardsUno/page";
import CardDosComponent from "@/components/cards/cardDos/page";
import RespuestoComponent from "@/components/repuestos/page";
import PrecioComponent from "@/components/precio/page";

export default function ServiciosPage() {
  return (
   <div
      className="relative bg-white min-h-screen overflow-hidden"
    >
      <div className="absolute top-10 left-[400px] w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-3xl -translate-x-20 -translate-y-20"></div>
      <div className="absolute top-56 left-[1000px] w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-2xl"></div>

      <HeaderComponent />

      <main className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 pt-20">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 opacity-50 rounded-full blur-3xl translate-x-20 translate-y-20"></div>

        <h1 className="text-4xl md:text-6xl text-gray-800 mb-4">
        Soluciones Rápidas y Eficientes
        </h1>

        <p  className="text-gray-600 text-lg mb-8">
        En Reparaciones Express, nos encargamos de que tus electrodomésticos <br />
         vuelvan a funcionar como nuevos. ¡Confía en nuestros expertos!
        </p>

      </main>

      <CardUnoComponent/>
      <CardDosComponent/>
      <RespuestoComponent/>
      <PrecioComponent/>


      <FooterComponent />
    </div>
  );
}
