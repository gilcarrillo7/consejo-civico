import React from "react";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-16 md:py-32 text-primary">
      <div className="container mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
            Misión:
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">
            Contribuir a la consolidación de un mejor país y sus instituciones a
            través de la participación ciudadana para la incidencia en políticas
            públicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-3/4"
        >
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
            Visión:
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">
            Ser una organización de representación y activación ciudadana, líder
            en el desarrollo de iniciativas estratégicas e innovadoras para la
            incidencia en políticas públicas en materia de Seguridad, Justicia,
            Ciudadanía, Transparencia y Rendición de Cuentas, en el Estado de
            Coahuila y en México.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
