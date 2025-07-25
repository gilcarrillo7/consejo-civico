import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Logo from "../../images/logo.svg";
import { Link } from "gatsby";

const navItems = [
  { link: "Quiénes somos", url: "/quienes_somos" },
  {
    link: "Centro de integración ciudadana",
    url: "/centro_integracion_ciudadana",
  },
  { link: "Equipo", url: "/#equipo" },
  { link: "Alianzas", url: "/#alianzas" },
  { link: "Contacto", url: "/contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white w-full absolute top-0 left-0 z-50">
      {/* Header base */}
      <div className="container mx-auto flex items-center justify-between py-4 py-sm-12 relative z-50">
        <Link to="/">
          <img src={Logo} alt="Logo Consejo Cívico" className="h-12 md:h-16" />
        </Link>
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

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-screen bg-primary text-white z-40"
            >
              <div className="container mx-auto py-12 flex flex-col gap-10">
                <motion.nav
                  className="flex flex-col gap-12 text-2xl sm:text-3xl lg:text-4xl mt-24 lg:mt-32"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: 0 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      onClick={() => setIsOpen(false)}
                      role="button"
                    >
                      <Link
                        to={item.url}
                        className="hover:text-complementary hover:font-semibold transition"
                      >
                        {item.link}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>

            <Helmet
              bodyAttributes={{
                class: "overflow-hidden",
              }}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
