import React from "react";
import Button from "../shared/Button";
import { motion } from "framer-motion";

export default function ProgramsSection() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto space-y-10">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nuestros programas
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 font-normal"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg text-secondary mb-1">
              Centro de Integración Ciudadana Saltillo
            </h3>
            <p className="mb-4">
              Un puente entre ciudadanía y gobierno, entre reportes ciudadanos y
              soluciones.
            </p>
            <Button variant="outline-secondary">Leer más</Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg text-secondary mb-1">
              Saltillo, ¿Cómo vamos?
            </h3>
            <p>Aportamos datos para mejorar la toma de decisiones públicas.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
