import React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { navigate } from "gatsby";
import type { TeamData } from "../../types";

function AnimationFranjas() {
  return (
    <>
      {[0, 75, 125, 150].map((top, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="absolute w-[300%] h-[100px] bg-primary"
            style={{
              top: `${top}`,
              left: `${-150 + i * 50}%`,
              transform: "rotate(-45deg)",
            }}
          />
        </motion.div>
      ))}
    </>
  );
}

type Props = {
  data: TeamData;
};

export default function TeamSection({ data }: Props) {
  const {
    title,
    quote,
    description,
    note,
    members,
    buttonText,
    buttonLink,
    image,
  } = data;

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
          className="text-2xl md:text-3xl font-semibold text-primary text-center md:text-left mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {title}
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-0">
          {/* Imagen con animación y franjas detrás */}
          <div className="relative max-w-xl z-10 overflow-hidden p-6">
            <img
              src={image}
              alt="Nuestro equipo"
              className="w-full h-auto object-cover relative z-10"
            />
            <AnimationFranjas />
          </div>

          {/* Texto y miembros del equipo */}
          <motion.div
            className="max-w-xl space-y-6 text-left text-primary z-10"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="font-bold text-lg text-primary"
              variants={itemVariant}
            >
              {quote}
            </motion.p>

            <motion.p className="text-primary" variants={itemVariant}>
              <strong>{description}</strong>
            </motion.p>

            <motion.p className="text-primary" variants={itemVariant}>
              {note}
            </motion.p>

            <motion.ul
              className="text-primary space-y-1"
              variants={listVariants}
            >
              {members?.map((member, index) => (
                <motion.li key={index} variants={itemVariant}>
                  <strong>{member.name}</strong>
                  <br />
                  {member.role}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariant}>
              <Button variant="primary" onClick={() => navigate(buttonLink)}>
                {buttonText}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
