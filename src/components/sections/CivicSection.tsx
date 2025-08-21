import React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

type Section = {
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
};

type CivicSectionProps = {
  data: {
    sections: Section[];
    image: string;
  };
};

export default function CivicSection({ data }: CivicSectionProps) {
  const { sections, image } = data;

  return (
    <Page>
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Imagen circular */}
        <div className="lg:order-2 relative sm:w-1/2 flex justify-center">
          <motion.div
            className="h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] rounded-full overflow-hidden border-4 border-white shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src={image}
              alt="Consejo Cívico"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Contenido dinámico */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-16 xl:pr-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {sections.map((section, index) => (
            <div key={index} className={index === 0 ? "md:mt-[-5rem]" : ""}>
              <h2 className="text-secondary text-2xl md:text-3xl font-semibold text-primary mb-6">
                {section.title}
              </h2>

              {section.subtitle && (
                <h3 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold underline underline-offset-4 mb-4">
                  {section.subtitle}
                </h3>
              )}

              <p className="text-base md:text-lg lg:text-xl text-primary mb-6">
                {section.description}
              </p>

              {section.buttonText && section.buttonLink && (
                <Button
                  variant="secondary"
                  onClick={() => navigate(section.buttonLink!)}
                >
                  {section.buttonText}
                </Button>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </Page>
  );
}
