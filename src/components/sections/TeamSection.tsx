import React from "react";
import Page from "../layout/Page";
import EquipoImage from "../../images/equipo.png";
import Button from "../shared/Button";
import { motion } from "framer-motion";

export default function TeamSection() {
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Page className="bg-secondary text-primary">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-primary text-center md:text-left sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Nuestro equipo
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="relative max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative z-10">
              <img
                src={EquipoImage}
                alt="Nuestro equipo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 z-0 flex justify-between items-center px-4">
              <div className="h-full w-[20px] bg-primary clip-diagonal-left" />
              <div className="h-full w-[20px] bg-primary clip-diagonal-right" />
            </div>
          </motion.div>

          <motion.div
            className="max-w-xl space-y-6 text-left text-primary"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="font-bold text-lg text-[#2C1A84]"
              variants={itemVariant}
            >
              La sociedad organizada tiene el poder de cambiar lo que sea que se
              proponga.
            </motion.p>

            <motion.p className="text-[#2C1A84]" variants={itemVariant}>
              <strong>
                Nuestro equipo impulsa los cambios que la ciudadanía de Saltillo
                necesita.
              </strong>{" "}
              Para representarte, necesitamos que tú y tu entorno social
              participen en nuestros programas.
            </motion.p>

            <motion.p className="text-[#2C1A84]" variants={itemVariant}>
              ¡La ciudad y tu comunidad se verán beneficiadas por tu acción!
            </motion.p>

            <motion.ul
              className="text-[#2C1A84] space-y-1"
              variants={listVariants}
            >
              <motion.li variants={itemVariant}>
                <strong>Sara Martha Arizpe Ramos</strong>
                <br />
                Directora Ejecutiva
              </motion.li>
              <motion.li variants={itemVariant}>
                <strong>Edgar Alejandro Calvillo Cepeda</strong>
                <br />
                Coordinador Administrativo
              </motion.li>
              <motion.li variants={itemVariant}>
                <strong>Felipe de Jesús López Delgado</strong>
                <br />
                Coordinador de Innovación
              </motion.li>
              <motion.li variants={itemVariant}>
                <strong>Ana Izel Fraire González</strong>
                <br />
                Coordinadora de Comunicación
              </motion.li>
            </motion.ul>

            <motion.div variants={itemVariant}>
              <Button variant="primary">Contacto</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
