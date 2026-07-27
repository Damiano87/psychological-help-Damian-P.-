"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LeftCard from "./_components/LeftCard";
import RightCard from "./_components/RightCard";
import BottomSection from "./_components/BottomSection";

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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/aboutme.webp"
            alt="Damian Piwowarczyk"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-800/30 backdrop-blur-[1px]" />
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
      </section>
      {/* info and image section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block mb-6 relative">
              <h2 className="text-3xl font-bold font-roboto">O mnie</h2>
              <motion.div
                className="h-1 bg-teal-600 rounded-full mt-1.5"
                initial={{ width: 0 }}
                whileInView={{ width: "120%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <p className="text-lg leading-relaxed text-neutral-600 font-roboto">
              <span className="float-left text-5xl leading-none pr-3 mt-1">
                L
              </span>
              orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
              gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
              tincidunt auctor a ornare odio. Sed non mauris vitae erat
              consequat auctor eu in elit. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Mauris
              in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
              feugiat, velit mauris egestas quam, ut aliquam massa nisl quis
              neque.
            </p>
          </div>

          {/* Image container */}
          <div className="shrink-0 w-full max-w-[320px] sm:max-w-95 aspect-4/5 relative rounded-2xl overflow-hidden border-4 border-neutral-900 shadow-lg flex items-center justify-center">
            <Image
              src="/file.svg"
              alt="Zdjęcie profilowe"
              width={160}
              height={160}
              className="opacity-40 dark:opacity-60 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* my proffesional experience and education */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-fit relative mb-6">
            <h3 className="font-roboto text-xl sm:text-3xl font-bold">
              Moja ścieżka zawodowa
            </h3>
            <motion.div
              className="h-1 bg-teal-600 rounded-full mt-1.5"
              initial={{ width: 0 }}
              whileInView={{ width: "110%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <p className="font-roboto text-lg leading-relaxed text-neutral-600 mb-6">
            <span className="float-left text-5xl leading-none pr-3 mt-1">
              L
            </span>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
            gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
            quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit.
          </p>

          <p className="font-roboto text-lg leading-relaxed text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            officiis mollitia ab fugiat, at esse fugit amet sequi dolore ipsam
            reprehenderit iste nam illo maiores ratione corporis quia aut
            veniam!
          </p>
        </div>
      </section>
      {/* Two columns info */}
      <section className="py-16 md:py-24 bg-teal-100 font-roboto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-start gap-12 md:gap-16">
          {/* Column 1 - Filar psychologiczny */}
          <LeftCard />
          {/* Column 2 - Filar zawodowy */}
          <RightCard />
        </div>
      </section>
      <BottomSection />
    </div>
  );
}

{
  /* Register for therapy session */
}
{
  /* <section className="py-16 md:py-24 bg-teal-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 gap-12 md:gap-16">
          <p className="font-roboto text-lg leading-relaxed text-neutral-700 uppercase">
            - zapraszam do rejestracji
          </p>
          <h3 className="font-roboto text-2xl sm:text-6xl font-bold mt-12 mb-12">
            Jeśli chcesz umówić się na spotkanie, zarejestruj się{" "}
            <span className="relative inline-block px-2 whitespace-nowrap">
              <span className="relative z-10 text-neutral-900">już teraz</span>
              <motion.span
                className="absolute inset-0 bg-yellow-400 block origin-left rounded-md z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              />
            </span>
          </h3>
          <button className="text-lg bg-teal-700 text-white hover:bg-teal-800 font-roboto px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Zarejestruj się
          </button>
        </div>
      </section> */
}
