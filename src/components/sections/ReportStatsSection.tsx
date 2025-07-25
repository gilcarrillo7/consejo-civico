import React from "react";
import { motion } from "framer-motion";

export default function ReportStatsSection() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.5 },
  };

  return (
    <div className="bg-white text-primary px-4 py-16 text-lg md:text-xl">
      <div className="container space-y-6">
        <motion.p {...fadeUp}>
          De 2022 a 2024, hemos logrado canalizar exitosamente más de{" "}
          <strong>2,700 reportes ciudadanos</strong>.
        </motion.p>

        <motion.p
          className="font-bold"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Gracias a nuestra intervención se han reparado:
        </motion.p>

        <motion.p
          className="whitespace-pre-line"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          - 1,381 luminarias
          {"\n"}- 576 semáforos descompuestos
          {"\n"}- 352 baches
          {"\n"}- 133 fugas de agua
          {"\n"}- Mover 474 autos abandonados
          {"\n"}- Tapar 49 alcantarillas
        </motion.p>

        <motion.p
          className="text-secondary font-semibold"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          Sé parte de la solución y comienza a enviar tus reportes. ¡Es muy
          fácil!
        </motion.p>

        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
          Lo puedes hacer a través de nuestra cuenta en{" "}
          <a
            href="https://x.com/CICsal"
            className="font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>{" "}
          o a través de nuestro{" "}
          <a
            href="https://wa.me/5218445060242"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Whatsapp
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}
