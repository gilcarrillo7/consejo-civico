// components/sections/ProgramsSection.tsx
import React from "react";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import type { ProgramsData } from "../../types";

type Props = { data: ProgramsData[] };

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProgramsSection({ data }: Props) {
  const sectionTitle = data.find(
    (program) => program.sectionTitle
  )?.sectionTitle;

  const handleClick = (item: ProgramsData) => {
    if (!item.buttonLink) return;
    // Navegación interna si parece ruta relativa; externa si es URL absoluta
    if (item.buttonLink.startsWith("http")) {
      window.location.href = item.buttonLink;
    } else {
      navigate(item.buttonLink);
    }
  };

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
          {sectionTitle}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-24 lg:gap-36 font-normal text-lg md:text-xl lg:text-2xl font-light"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {data.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h3 className="text-secondary mb-1">{item.title}</h3>
              <p className="mb-4">{item.description}</p>

              {item.buttonText && item.buttonLink && (
                <Button
                  variant="outline-secondary"
                  onClick={() => handleClick(item)}
                >
                  {item.buttonText}
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
