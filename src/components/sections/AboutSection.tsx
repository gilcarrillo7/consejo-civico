// components/sections/AboutSection.tsx
import React from "react";
import Page from "../layout/Page";
import { motion } from "framer-motion";
import type { AboutData } from "../../types";

type Props = {
  text: string;
};

export default function AboutSection({ text }: Props) {
  return (
    <Page className="bg-secondary text-white relative py-24">
      <div className="mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-12 ">
          <div className="lg:w-1/2">
            <motion.svg
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:scale-[125%]"
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
            </motion.svg>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 ml-auto"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              {text}
            </p>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
