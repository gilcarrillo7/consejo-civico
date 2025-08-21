// components/sections/OrganigramSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Page from "../layout/Page";
import Button from "../shared/Button";
import { navigate } from "gatsby";
import type { OrganigramData } from "../../types";

type Props = { data: OrganigramData };

export default function OrganigramSection({ data }: Props) {
  const {
    title = "Organigrama institucional",
    image,
    subtitle = "¡Escríbenos y sumemos esfuerzos para construir una mejor sociedad!",
    cta,
  } = data;

  const handleCTA = () => {
    if (!cta) return;
    if (cta.link.startsWith("http")) {
      window.location.href = cta.link;
    } else {
      navigate(cta.link);
    }
  };

  return (
    <Page className="bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-12"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={image.src}
            alt={image.alt || title}
            className="w-full max-w-5xl h-auto object-contain"
            loading="lazy"
          />
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary mt-16"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && cta.text && cta.link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full text-center mt-8"
          >
            <Button
              variant="primary"
              containerClassName="!text-center"
              onClick={handleCTA}
            >
              {cta.text}
            </Button>
          </motion.div>
        )}
      </div>
    </Page>
  );
}
