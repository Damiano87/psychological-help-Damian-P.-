"use client";

import { motion } from "framer-motion";

const UnderlineAnimation = ({ width = "110%" }: { width?: string }) => {
  return (
    <motion.div
      className="h-1 bg-teal-600 rounded-full mt-1.5"
      initial={{ width: 0 }}
      whileInView={{ width: width }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};

export default UnderlineAnimation;
