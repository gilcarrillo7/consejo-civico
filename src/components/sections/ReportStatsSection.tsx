// components/sections/ReportStatsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import type { ReportStatsData } from "../../types";

type Props = { data: ReportStatsData };

export default function ReportStatsSection({ data }: Props) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true, amount: 0.5 },
  };

  return (
    <div className="bg-white text-primary px-4 py-16 text-lg md:text-xl">
      <div className="container space-y-6">
        <motion.p {...fadeUp}>
          {data.intro
            ? data.intro
            : `De ${data.period}, hemos logrado canalizar exitosamente más de`}{" "}
          <strong>
            {data.totalReports.toLocaleString("es-MX")} reportes ciudadanos
          </strong>
          .
        </motion.p>

        {data.repairedTitle && (
          <motion.p
            className="font-bold"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            {data.repairedTitle}
          </motion.p>
        )}

        <motion.p
          className="whitespace-pre-line"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          {data.breakdown
            .map(
              (item) =>
                `- ${item.prefix ?? ""}${item.value.toLocaleString("es-MX")} ${
                  item.label
                }`
            )
            .join("\n")}
        </motion.p>

        {data.ctaLine && (
          <motion.p
            className="text-secondary font-semibold"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            {data.ctaLine}
          </motion.p>
        )}

        <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
          {data.whatsappText ?? "Lo puedes hacer a través de nuestro"}{" "}
          <a
            href={data.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Whatsapp
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}
