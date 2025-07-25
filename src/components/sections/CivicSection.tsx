import React from "react";
import LogoCircular from "../../images/civico.gif";
import Button from "../shared/Button";
import Page from "../layout/Page";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

export default function CivicSection() {
  return (
    <Page>
      <div className="mx-auto flex flex-col lg:flex-row items-start justify-between items-center gap-16">
        <motion.div
          className="md:order-2 relative max-w-100 sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={LogoCircular}
            alt="Consejo Cívico"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-16 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Nuestra ciudad es resultado de la <br />
              corresponsabilidad.
            </h2>

            <h3 className="text-lg md:text-xl text-secondary font-bold underline underline-offset-4 mb-4">
              Centro de Integración Ciudadana Saltillo
            </h3>

            <p className="text-base text-primary mb-6">
              CIC es una plataforma que enlaza a la ciudadanía con las
              autoridades para mejorar su entorno y sus comunidades a través de
              la canalización de tus reportes ciudadanos.
            </p>

            <Button
              variant="secondary"
              onClick={() => navigate("/centro_integracion_ciudadana")}
            >
              Leer más
            </Button>
          </div>

          <div>
            <h3 className="text-lg md:text-xl text-secondary font-bold mb-4 underline">
              Saltillo, ¿Cómo vamos?
            </h3>

            <p className="text-base text-primary">
              Contribuimos al fortalecimiento de la democracia evaluando los
              resultados del gobierno municipal, fomentando la participación
              ciudadana, aportando datos y espacios de rendición de cuentas.
            </p>
          </div>
        </motion.div>
      </div>
    </Page>
  );
}
