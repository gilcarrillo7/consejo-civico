import React from "react";
import { motion } from "framer-motion";
import Page from "../layout/Page";
import Button from "../shared/Button";
import { navigate } from "gatsby";

const HeroSection = () => {
  return (
    <Page className="bg-primary overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 py-16">
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="629"
            height="237"
            viewBox="0 0 629 237"
            fill="none"
            className="scale-75 sm:scale-90 lg:scale-100 transition-transform duration-300"
          >
            <path
              d="M0.0800781 236.457H86.5047L322.203 0.773529H235.779L0.0800781 236.457ZM153.239 236.457H239.663L475.362 0.773529H388.941L153.239 236.457ZM305.917 236.457H392.342L628.036 0.773529H541.62L305.917 236.457Z"
              fill="#00A75D"
            />
          </svg>
        </motion.div>

        <motion.div
          className="lg:max-w-[550px] order-2 md:order-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-8 text-white">
            Promovemos la vinculación y{" "}
            <span className="text-secondary font-semibold">
              participación ciudadana
            </span>{" "}
            para construir una mejor sociedad.
          </h1>
          <Button
            variant="outline"
            onClick={() => navigate("/quienes_somos")}
          >
            Conoce más
          </Button>
        </motion.div>
      </div>
    </Page>
  );
};

export default HeroSection;
