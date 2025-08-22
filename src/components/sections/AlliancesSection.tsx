import React from "react";
import { motion } from "framer-motion";
import Page from "../layout/Page";
import type { AlliancesData } from "../../types";

type Props = {
  data: AlliancesData[];
};

export default function AlliancesSection({ data }: Props) {
  const title = data.find((alianza) => alianza.title)?.title;
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Page className="bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-secondary text-xl md:text-3xl font-semibold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-8 gap-x-4 place-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((logo, idx) => (
            <motion.div
              key={idx}
              variants={logoVariants}
              className="flex justify-center"
            >
              <img
                src={`${logo.logo}`}
                alt={`Aliado ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Page>
  );
}
