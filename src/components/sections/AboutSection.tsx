import React from "react";
import Page from "../layout/Page";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Page className="bg-secondary text-white relative py-24">
      <div className="mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* SVG animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="350"
              height="256"
              viewBox="0 0 350 256"
              fill="none"
            >
              <path
                d="M0 255.511H93.6992L349.238 0H255.539L0 255.511Z"
                fill="#312783"
              />
            </svg>
          </motion.div>

          {/* Texto animado */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 ml-auto"
          >
            <p className="text-lg leading-relaxed">
              Somos una asociación civil sin fines de lucro conformada por
              instituciones, cámaras empresariales, academia y organizaciones de
              la sociedad civil. Juntos, sumamos esfuerzos para construir una
              mejor sociedad apoyando las causas de nuestros miembros, y a su
              vez, representando a la ciudadanía ante las autoridades y las
              instituciones prestadoras de servicios ciudadanos.
            </p>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
