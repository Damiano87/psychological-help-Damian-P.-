"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 6,
    },
  },
} as const;

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with overlay for readability */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.webp"
          alt="Psychologiczna pomoc i wsparcie"
          fill
          priority
          className="object-center"
        />
        <div className="absolute inset-0 bg-neutral-700/40 dark:bg-neutral-700/65 backdrop-blur-[1px]" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl sm:mt-0 mt-4 mx-auto flex flex-col items-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6 backdrop-blur-sm"
        >
          Profesjonalne wsparcie psychologiczne
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-sm max-w-3xl leading-tight"
        >
          Odzyskaj spokój i równowagę w swoim życiu
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-neutral-200 mb-10 max-w-2xl leading-relaxed drop-shadow-sm"
        >
          Zrób pierwszy krok w stronę lepszego jutra. Oferujemy profesjonalną
          terapię indywidualną, partnerską oraz wsparcie w kryzysie w
          bezpiecznej i pełnej empatii atmosferze.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            Zarezerwuj wizytę
          </a>
          <a
            href="#uslugi"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            Dowiedz się więcej
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
