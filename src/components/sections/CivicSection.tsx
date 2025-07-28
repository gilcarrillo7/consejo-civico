import React from "react";
import LogoCircular from "../../images/civico.gif";
import Button from "../shared/Button";
import Page from "../layout/Page";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

export default function CivicSection() {
  return (
    <Page>
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:order-2 relative sm:w-1/2 flex justify-center">
          <motion.div
            className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg"
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
        </div>
        <motion.div
          className="lg:w-1/2 flex flex-col gap-16 xl:pr-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div>
            <h2 className="text-secondary text-2xl md:text-3xl font-semibold text-primary mb-6">
              Nuestra ciudad es resultado de la{" "}
              <br className="hidden sm:block" />
              corresponsabilidad.
            </h2>

            <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold underline underline-offset-4 mb-4">
              Centro de Integración Ciudadana Saltillo
            </h3>

            <p className="text-base md:text-lg lg:text-xl text-primary mb-6">
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
            <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold mb-4 underline">
              Saltillo, ¿Cómo vamos?
            </h3>

            <p className="text-base md:text-lg lg:text-xl text-primary">
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
