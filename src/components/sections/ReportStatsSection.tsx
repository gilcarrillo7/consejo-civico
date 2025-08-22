// components/sections/ReportStatsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import type { ReportStatsData } from "../../types";

type Props = { data: string };

export default function ReportStatsSection({ data }: Props) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.5 },
  };

  return (
    <div className="bg-white text-primary px-4 py-16 text-lg md:text-xl">
      <motion.div
        {...fadeUp}
        className="container space-y-6"
        dangerouslySetInnerHTML={{ __html: data }}
      ></motion.div>
    </div>
  );
}
