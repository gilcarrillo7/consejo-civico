// components/sections/CentroSection.tsx
import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Page from "../layout/Page";
import type { CentroData } from "../../types";

type Props = { data: CentroData };

export default function CentroSection({ data }: Props) {
  const { title, videoUrl, paragraphs, highlightIndices = [] } = data;

  return (
    <Page className="bg-primary text-white px-4 py-24 sm:py-16">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          className="w-full lg:w-1/2 lg:px-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="aspect-video rounded overflow-hidden shadow-lg">
            <ReactPlayer width="100%" height="100%" controls url={videoUrl} />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-lg sm:text-xl lg:pl-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-secondary font-bold">{title}</h2>

          {paragraphs.map((p, i) => {
            const isHighlight = highlightIndices.includes(i);
            return (
              <p
                key={i}
                className={isHighlight ? "font-bold text-secondary" : undefined}
              >
                {p}
              </p>
            );
          })}
        </motion.div>
      </div>
    </Page>
  );
}
