"use client";

import { containerVariants, itemVariants } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedHeroContent = () => {
  return (
    <motion.div
      className="relative z-10 px-4 max-w-7xl mx-auto sm:mt-20 flex flex-col items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-sm max-w-3xl leading-tight"
        variants={itemVariants}
      >
        Psychologia zmiany, wzmocnienia i wewnętrznej spójności.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-neutral-200 mb-10 max-w-2xl leading-relaxed drop-shadow-sm"
        variants={itemVariants}
      >
        Pomagam znaleźć praktyczne rozwiązania przynoszące realne efekty w
        poprawie jakości życia oraz w przywróceniu równowagi i dobrostanu
        psychicznego.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        variants={itemVariants}
      >
        <Link
          href="/offer"
          className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          Dowiedz się więcej
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeroContent;
