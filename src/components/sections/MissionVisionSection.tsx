import React from "react";
import { motion } from "framer-motion";
import type { MissionVisionData } from "../../types";

type Props = { data: MissionVisionData };

export default function MissionVisionSection({ data }: Props) {
  const {
    missionTitle = "Misión:",
    mission,
    visionTitle = "Visión:",
    vision,
  } = data;

  return (
    <section className="bg-white py-16 md:py-32 text-primary">
      <div className="container mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-2/3"
        >
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
            {missionTitle}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">{mission}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-3/4"
        >
          <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2">
            {visionTitle}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl">{vision}</p>
        </motion.div>
      </div>
    </section>
  );
}
