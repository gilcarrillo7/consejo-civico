import { Menu, X } from "lucide-react";
import Logo from "../../images/logo.svg";
import React, { useState } from "react";

const navItems = [
  "Quiénes somos",
  "Centro de integración ciudadana",
  "Equipo",
  "Alianzas",
  "Contacto",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white w-full absolute top-0 left-0 z-50">
      {/* Header base */}
      <div className="container mx-auto flex items-center justify-between py-12 relative z-50">
        <img src={Logo} alt="Logo Consejo Cívico" className="h-12 md:h-16" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none transition-all duration-300"
        >
          <span className="block relative w-12 h-12 sm:w-16 sm:h-16">
            <Menu
              className={`w-12 h-12 sm:w-16 sm:h-16 absolute inset-0 transition-all duration-300 transform ${
                isOpen
                  ? "opacity-0 scale-75 rotate-45"
                  : "opacity-100 scale-100 rotate-0"
              }`}
            />
            <X
              className={`w-12 h-12 sm:w-16 sm:h-16 absolute inset-0 transition-all duration-300 transform ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-75 rotate-45"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-primary text-white z-40 transition-all duration-300 ease-in-out">
          <div className="container mx-auto py-12 flex flex-col gap-10">
            <nav className="flex flex-col gap-12 text-2xl sm:text-3xl lg:text-4xl mt-24 lg:mt-32">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-complementary transition"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
