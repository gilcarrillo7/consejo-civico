import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Page from "../layout/Page";

export default function CentroSection() {

  return (
    <Page className="bg-primary text-white px-4 py-24 py-sm-16">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          className="w-full lg:w-1/2 sm:px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="aspect-video rounded overflow-hidden shadow-lg">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url={"https://vimeo.com/1103510859"}
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-lg sm:text-xl md:pl-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-secondary font-bold">
            Centro de Integración Ciudadana Saltillo
          </h2>
          <p>
            Un reporte ciudadano es la documentación de un problema que será
            canalizado por nuestro equipo a las autoridades responsables.
          </p>
          <p>
            Es posible reportar en tiempo real cualquier inconveniente que se
            detecte en el espacio público, como baches, luminarias defectuosas,
            semáforos descompuestos y residuos acumulados, entre otros.
          </p>
          <p className="font-bold text-secondary">
            Contribuir para el bienestar de tu comunidad nunca fue tan fácil y
            rápido.
          </p>
        </motion.div>
      </div>
    </Page>
  );
}
