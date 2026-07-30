"use client";

import { IMAGES, containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Psychotraumatology = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.psychTraumatologyHero}
            alt="Psychotraumatologia"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-800/40" />
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
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-sm leading-tight font-jost"
          >
            Psychotraumatologia
          </motion.h1>
        </motion.div>
      </section>
      {/* Psychotraumatology Section */}
      <section className="relative w-full py-20 sm:py-28 bg-linear-to-br from-teal-50 via-teal-100/50 to-teal-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column: text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <p className="text-neutral-700 text-lg leading-relaxed">
                Jako dyplomowany psycholog i psychotraumatolog zajmuję się
                leczeniem osób z objawami stresu pourazowego. Zrozumienie
                tego, jak mózg i ciało przetwarzają sytuacje traumatyczne, jest
                kluczowe dla zastosowania odpowiednich metod terapeutycznych.
                Każdorazowo dostosowuję sposób działania do konkretnego
                przypadku.
              </p>
              {/* <p className="text-neutral-700 text-lg leading-relaxed">
                Trauma jest doświadczeniem psychofizjologicznym, dlatego w swoim
                podejściu do pracy z osobami z objawami stresu pourazowego łączę
                podejście somatyczne z technikami werbalnymi.
              </p> */}

              <div className="flex flex-col gap-2 pt-2">
                <p className="text-neutral-800 text-lg">
                  <span className="font-semibold"> Czas trwania:</span> do 60
                  minut
                </p>
                <p className="text-neutral-800 text-lg">
                  <span className="font-semibold">
                    Liczba i częstotliwość spotkań
                  </span>{" "}
                  dopasowana do Klienta i jego potrzeb
                </p>
              </div>
            </motion.div>

            {/* Right column: image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm aspect-4/5 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/18663603/pexels-photo-18663603.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Uspokajająca roślina oświetlona przez słońce"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 384px, 480px"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Psychotraumatology;
