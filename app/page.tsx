"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Link from "next/link";

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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] pb-6 sm:pb-0 w-full flex flex-col items-center justify-center overflow-hidden">
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
            {/* <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-teal-600 hover:bg-teal-500 active:bg-teal-700 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              Zarezerwuj wizytę
            </a> */}
            <a
              href="/offer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              Dowiedz się więcej
            </a>
          </motion.div>
        </motion.div>
      </section>
      {/* Offer section */}
      <section className="py-20 md:py-28 transition-colors duration-300 font-jost bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-2xl font-semibold uppercase tracking-wider text-teal-600">
            Jak mogę pomóc
          </span>
          {/* <h2 className="text-3xl sm:text-5xl font-bold font-jost text-neutral-900 mt-2 mb-4">
            Oferta leczenia psychologicznego
          </h2> */}
          <p className="text-neutral-600 max-w-2xl mx-auto mt-12 mb-12 md:mb-16 font-roboto leading-relaxed">
            Dostosowuję metody terapeutyczne do Twoich indywidualnych potrzeb,
            zapewniając bezpieczną i pełną empatii przestrzeń do rozwoju oraz
            radzenia sobie z trudnościami.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
              <Image
                src="https://images.pexels.com/photos/4100684/pexels-photo-4100684.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Terapia indywidualna"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
              <div className="relative z-20 text-left">
                <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  Terapia indywidualna
                </h3>
                <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
                  Wsparcie w radzeniu sobie z lękiem, depresją, stresem oraz
                  kryzysami życiowymi. Pomogę Ci odnaleźć wewnętrzną siłę i
                  równowagę w bezpiecznej atmosferze.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
              <Image
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Terapia par i małżeństw"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
              <div className="relative z-20 text-left">
                <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  Terapia par i małżeństw
                </h3>
                <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
                  Pomoc w odbudowywaniu bliskości, rozwiązywaniu konfliktów i
                  poprawie komunikacji. Przejdźmy wspólnie przez trudności w
                  Waszej relacji.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
              <Image
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Grupy wsparcia i warsztaty"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
              <div className="relative z-20 text-left">
                <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                  Grupy wsparcia i warsztaty
                </h3>
                <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
                  Przestrzeń do dzielenia się doświadczeniami z osobami o
                  podobnych wyzwaniach. Rozwijaj swoje umiejętności osobiste i
                  społeczne w grupie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* info and image section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block mb-6 relative">
              <h2 className="text-3xl font-bold font-roboto">
                Damian Piwowarczyk
              </h2>
              <motion.div
                className="h-1 bg-teal-600 rounded-full mt-1.5"
                initial={{ width: 0 }}
                whileInView={{ width: "110%" }}
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
            <Link
              className="inline-block text-teal-600 border border-teal-600 hover:text-white hover:bg-teal-600 duration-300 px-4 py-2 mt-10 rounded-md text-lg font-jost"
              href="/aboutme"
            >
              <span> Więcej... </span>
            </Link>
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
      {/* Register for therapy session */}
      <section className="py-16 md:py-24 bg-teal-300">
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
      </section>
    </div>
  );
}
