"use client";

import { motion, Variants } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariant: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const BottomSection = ({
  myPhilosophyDescription,
  myPhilosophyTitle,
}: {
  myPhilosophyDescription: string;
  myPhilosophyTitle: string;
}) => {
  const words = myPhilosophyTitle.split(" ");

  return (
    <section className="py-16 md:py-24 font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-neutral-600">
        <h3 className="text-xl sm:text-3xl font-bold mb-4">
          <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex flex-wrap gap-x-1.5"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariant}>
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h3>
        <p className="text-sm md:text-lg leading-relaxed text-neutral-600 mb-4">
          {myPhilosophyDescription}
        </p>
      </div>
    </section>
  );
};

export default BottomSection;
