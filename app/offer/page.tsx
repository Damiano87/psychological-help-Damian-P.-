"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CARDS, containerVariants } from "@/lib/constants";
import Link from "next/link";

export default function Offer() {
  return (
    <div className="relative py-20 md:py-28 bg-teal-50 min-h-screen transition-colors duration-300 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h1 className="text-4xl sm:text-6xl font-bold font-jost text-neutral-900">
              Oferta
            </h1>
            <motion.div
              className="h-1 bg-teal-600 rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Grid Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {/* Cards */}
          {CARDS?.map((card, index) => {
            return (
              <Link
                key={index}
                href={card.href}
                className="w-full md:w-[calc(50%-1rem)] max-w-xl min-h-60 sm:min-h-85 relative rounded-3xl overflow-hidden  border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end sm:justify-start p-6 sm:p-10 group cursor-pointer"
              >
                <div>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-700 ${
                      index === 2
                        ? "scale-150 -translate-y-15 group-hover:scale-[1.7]"
                        : "group-hover:scale-105"
                    }`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
                  <div className="relative sm:mt-14 z-20 text-left">
                    <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
