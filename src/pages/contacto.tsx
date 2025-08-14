import React from "react";
import { motion } from "framer-motion";
import Page from "../components/layout/Page";
import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";
import { SocialIcons } from "../components/layout/Footer";
import { HeadFC } from "gatsby";
import { SEO } from "../components/layout/SEO";

export default function Contacto() {
  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.4 },
  });

  return (
    <Layout hideFooter={true}>
      <Page className="bg-secondary text-white px-4 pt-24 pb-16 mx-auto">
        <motion.h2
          className="text-center text-xl md:text-2xl lg:text-3xl text-primary mb-12 md:mb-24"
          {...fadeInUp(0)}
        >
          ¡Construyamos en conjunto una mejor sociedad!
        </motion.h2>

        <div className="max-w-4xl mx-auto text-lg lg:text-xl">
          <form className="w-full">
            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-12 md:mb-24">
              <motion.div className="flex flex-col md:w-1/2" {...fadeInUp(0.1)}>
                <input
                  id="name"
                  type="text"
                  className="bg-transparent border-b border-primary focus:outline-none py-2 text-white placeholder-white"
                  placeholder="Nombre"
                />
              </motion.div>
              <motion.div className="flex flex-col md:w-1/2" {...fadeInUp(0.2)}>
                <input
                  id="email"
                  type="email"
                  className="bg-transparent border-b border-primary focus:outline-none py-2 text-white placeholder-white"
                  placeholder="Email"
                />
              </motion.div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 mb-12 md:mb-24">
              <motion.div className="flex flex-col md:w-1/2" {...fadeInUp(0.3)}>
                <textarea
                  id="message"
                  rows={1}
                  className="bg-transparent border-b border-primary focus:outline-none py-2 text-white placeholder-white resize-none"
                  placeholder="Mensaje"
                />
              </motion.div>
              <motion.div
                className="text-center flex md:w-1/2"
                {...fadeInUp(0.4)}
              >
                <Button
                  type="submit"
                  variant="primary"
                  containerClassName="w-full"
                >
                  Enviar
                </Button>
              </motion.div>
            </div>
          </form>

          <motion.div
            className="text-base md:text-lg flex flex-col md:flex-row justify-between gap-8 text-base max-w-4xl mx-auto"
            {...fadeInUp(0.5)}
          >
            <div className="text-center md:text-left">
              <p>
                Dirección: Huitzilopochtli 745,{" "}
                <br className="hidden md:block" />
                Los Pinos, Saltillo, Coahuila.
                <br />
                Teléfono: 844-485-07-60
                <br />
                Email:{" "}
                <a href="mailto:info@ccic.org.mx" className="hover:underline">
                  info@ccic.org.mx
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-2 items-center md:items-end">
              <p className="mb-4">Síguenos en nuestras redes sociales.</p>
              <SocialIcons className="flex gap-4" />
            </div>
          </motion.div>
        </div>
      </Page>
    </Layout>
  );
}

export const Head: HeadFC = () => <SEO title="Contacto" />;
