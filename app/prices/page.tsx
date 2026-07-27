"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 10,
    },
  },
} as const;

const Prices = () => {
  return (
    <div className="relative py-20 md:py-28 bg-teal-50 min-h-screen transition-colors duration-300 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h1 className="text-4xl sm:text-6xl font-bold font-jost text-neutral-900">
              Cennik
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="text-white w-full sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-center p-6 sm:p-10 group cursor-pointer"
          >
            <Image
              src={IMAGES.card1}
              alt="Konsultacje psychologiczne"
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-left">
              <h3 className="text-md sm:text-3xl font-bold font-jost mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Konsultacje psychologiczne
              </h3>
              <span>(online): </span>
              <strong>230 zł</strong>

              <ul className="mt-4 md:mt-10 text-xs sm:text-base list-disc pl-6 space-y-1 md:space-y-3">
                <li> Czas trwania do 50 min</li>
                <li>Spotkanie raz w tygodniu lub częściej</li>
                <li>Forma: psychoterapia</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="text-white w-full  sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-center p-6 sm:p-10 group cursor-pointer"
          >
            <Image
              src={IMAGES.card2}
              alt="Psychotraumatologia"
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-left">
              <h3 className="text-md sm:text-3xl font-bold font-jost mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Psychotraumatologia
              </h3>
              <span>(online): </span>
              <strong>350 zł</strong>

              <ul className="mt-4 md:mt-10 text-xs sm:text-base list-disc pl-6 space-y-1 md:space-y-3">
                <li> Czas trwania do 50 min</li>
                <li>Spotkanie raz w tygodniu lub częściej</li>
                <li>Forma: psychoterapia</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="text-white w-full sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-center p-6 sm:p-10 group cursor-pointer"
          >
            <Image
              src={IMAGES.card3}
              alt="Terapia TSR"
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-left">
              <h3 className="text-xl sm:text-3xl font-bold font-jost mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Terapia TSR
              </h3>
              <span>(online): </span>
              <strong>350 zł</strong>

              <ul className="mt-4 md:mt-10 text-xs sm:text-base list-disc pl-6 space-y-1 md:space-y-3">
                <li> Czas trwania do 50 min</li>
                <li>Spotkanie raz w tygodniu lub częściej</li>
                <li>Forma: psychoterapia</li>
              </ul>
            </div>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="text-white w-full sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-center p-6 sm:p-10 group cursor-pointer"
          >
            <Image
              src={IMAGES.card4}
              alt="Warsztaty i szkolenia"
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
            <div className="relative z-20 text-left">
              <h3 className="text-xl sm:text-3xl font-bold font-jost mb-2 group-hover:text-teal-300 transition-colors duration-300">
                Warsztaty i szkolenia
              </h3>
              <span>(online): </span>
              <strong>350 zł</strong>

              <ul className="mt-4 md:mt-10 text-xs sm:text-base list-disc pl-6 space-y-1 md:space-y-3">
                <li> Czas trwania do 50 min</li>
                <li>Spotkanie raz w tygodniu lub częściej</li>
                <li>Forma: psychoterapia</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prices;
