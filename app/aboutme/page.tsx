"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
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
      damping: 4,
    },
  },
} as const;

export default function AboutMe() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with overlay for readability */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/aboutme.webp"
          alt="Damian Piwowarczyk"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-neutral-800/30 dark:bg-neutral-800/30 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
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
          Damian Piwowarczyk
        </motion.h1>
      </motion.div>
    </div>
  );
}
