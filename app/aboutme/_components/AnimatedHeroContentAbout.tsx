"use client";

import { containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";

const AnimatedHeroContentAbout = ({ name }: { name: string }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm leading-tight font-jost"
      >
        {name}
      </motion.h1>
    </motion.div>
  );
};

export default AnimatedHeroContentAbout;
