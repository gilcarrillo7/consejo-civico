import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import classNames from "classnames";
import { motion } from "framer-motion";

type AxisItem = {
  title: string;
  icon: string;
};

type AxesSectionProps = {
  title: string;
  axes: AxisItem[];
  theme?: "primary" | "secondary";
};

export default function AxesSection({
  title,
  axes,
  theme = "primary",
}: AxesSectionProps) {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? axes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === axes.length - 1 ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true,
    trackMouse: false,
  });

  const bgClass = theme === "primary" ? "bg-primary" : "bg-secondary";
  const circleClass = theme === "primary" ? "bg-secondary" : "bg-white";
  const textColorClass = "text-white";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className={classNames(bgClass, "py-16 px-4 text-center md:text-left")}
    >
      <div className="container mx-auto">
        <motion.h2
          className={classNames(
            "text-2xl md:text-3xl font-semibold mb-12",
            textColorClass
          )}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {title}
        </motion.h2>

        {/* Mobile: Carrusel */}
        <motion.div
          className="flex flex-col items-center md:hidden"
          {...swipeHandlers}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center justify-center gap-6">
            <button onClick={handlePrev} aria-label="Anterior">
              <ChevronLeft size={60} className={textColorClass} />
            </button>

            <div className="flex flex-col items-center">
              <div
                className={classNames(
                  "w-[160px] h-[160px] rounded-full flex items-center justify-center mb-4",
                  circleClass
                )}
              >
                <img
                  src={axes[current]?.icon}
                  alt={axes[current]?.title}
                  className="w-20 h-20"
                />
              </div>
              <span className={classNames("text-xl", textColorClass)}>
                {axes[current]?.title}
              </span>
            </div>

            <button onClick={handleNext} aria-label="Siguiente">
              <ChevronRight size={60} className={textColorClass} />
            </button>
          </div>
        </motion.div>

        {/* Desktop: Grid with equal columns */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {axes.map((axis) => (
            <motion.div
              key={axis.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div
                className={classNames(
                  "w-[160px] h-[160px] rounded-full flex items-center justify-center mb-4",
                  circleClass
                )}
              >
                <img src={axis.icon} alt={axis.title} className="w-20 h-20" />
              </div>
              <span className={classNames("text-xl", textColorClass)}>
                {axis.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
