"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CARDS, IMAGES } from "@/lib/constants";
import MacbethQuote from "@/components/Quote";

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
      <section className="relative  py-6 w-full overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.homeHero}
            alt="Psychologiczna pomoc i wsparcie"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-700/40 " />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-4 max-w-7xl mx-auto sm:mt-20 flex flex-col items-start"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-sm max-w-3xl leading-tight"
          >
            Psychologia zmiany, wzmocnienia i wewnętrznej spójności.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-neutral-200 mb-10 max-w-2xl leading-relaxed drop-shadow-sm"
          >
            Szukam praktycznych rozwiązań przynoszących realne efekty w poprawie
            jakości życia oraz w przywróceniu równowagi oraz dobrostanu
            psychicznego.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <Link
              href="/offer"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3.5 rounded-full text-xs sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/20 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
            >
              Dowiedz się więcej
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* Offer section */}
      <section className="py-20 md:py-28 transition-colors duration-300 font-jost bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-2xl font-semibold uppercase tracking-wider text-teal-600">
            Jak mogę pomóc
          </span>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-12 mb-12 md:mb-16 font-roboto leading-relaxed">
            Dostosowuję metody terapeutyczne do Twoich indywidualnych potrzeb,
            zapewniając bezpieczną i pełną empatii przestrzeń do rozwoju oraz
            radzenia sobie z trudnościami.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Cards */}
            {CARDS?.map((card, index) => {
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="w-full md:w-[calc(50%-1rem)] max-w-xl min-h-60 sm:min-h-85 relative rounded-3xl overflow-hidden  border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer"
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
                    <div className="relative z-20 text-left">
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
          </div>
        </div>
      </section>
      {/* info and image section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block mb-6 relative">
              <h2 className="text-2xl sm:text-3xl font-bold font-roboto">
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
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              <span className="float-left text-4xl sm:text-5xl leading-none pr-3 mt-1">
                J
              </span>
              estem absolwentem studiów psychologicznych w trybie dziennym na
              Katolickim Uniwersytecie Lubelskim Jana Pawła II (obrona dyplomu w
              2011 roku), psychotraumatologiem oraz psychologiem transportu.
              Jestem w trakcie szkolenia w zakresie Terapii Skoncentrowanej na
              Rozwiązaniach (TSR). Posiadam wieloletnie doświadczenie
              psychologiczne w pracy z dziećmi i młodymi dorosłymi, które
              zdobywałem w poradni psychologiczno-pedagogicznej oraz w szkołach
              podstawowych i ponadpodstawowych. Od wielu lat pracuję z rodzicami
              i opiekunami, prowadząc warsztaty oraz indywidualne konsultacje.
              Cały czas poznaję problemy młodych ludzi, przed którymi świat
              stawia cały skomplikowany wachlarz wyzwań i presji. Wrażliwość
              współczesnych nastolatków, ich świadomość siebie i inteligencja
              emocjonalna sprawiają, że coraz trudniej odnaleźć im satysfakcję i
              sens oraz otoczyć się zdrowymi, wspierającymi relacjami. Czerpię
              ogromną radość z budowania odporności psychicznej i spójności w
              dzieciach, młodzieży oraz dorosłych.
            </p>
            <br />
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              Pracę psychologa traktuję jako misję. W kontakcie z Klientem
              skupiam się na budowaniu bezpiecznej relacji, która jest nośnikiem
              realnej zmiany, a także na poprawie jakości życia psychicznego.
              Stawiam na głębię spotkania oraz prostotę, skupiając się na
              wymiernych efektach, a także uruchamiając zasoby Klienta oraz jego
              naturalną odporność psychiczną. Łączę techniki terapii werbalnej z
              pracą z ciałem, stale pogłębiając wiedzę o funkcjonowaniu
              człowieka, jego jaźni, psychiki i ciała.
            </p>
            <Link
              className="inline-block text-teal-600 border border-teal-600 hover:text-white hover:bg-teal-600 duration-300 px-4 py-2 mt-10 rounded-md text-lg font-jost"
              href="/aboutme"
            >
              <span> Więcej... </span>
            </Link>
          </div>

          {/* Image container */}
          <div className="shrink-0 w-full max-w-[320px] sm:max-w-95 aspect-4/5 relative rounded-2xl overflow-hidden border-4 border-neutral-900 flex items-center justify-center">
            <Image
              src="/damian-home.webp"
              alt="Zdjęcie profilowe"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <MacbethQuote />
    </div>
  );
}

/* Card 2 */

/* <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
  <Image
    src={IMAGES.card2}
    alt="Psychotraumatologia"
    fill
    quality={60}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
  <div className="relative z-20 text-left">
    <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
      Psychotraumatologia
    </h3>
    <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
      Jako dyplomowany psycholog i psychotraumatolog zajmuję się leczeniem ciała
      i umysłu poddanych urazowym doświadczeniom.
    </p>
  </div>
</div>;

{
  /* Card 3 */

/* <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
  <Image
    src={IMAGES.card3}
    alt="Terapia TSR"
    fill
    quality={60}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
  <div className="relative z-20 text-left">
    <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
      Terapia TSR
    </h3>
    <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
      Jestem terapeutą w trakcie szkolenia w zakresie Terapii Skoncentrowanej na
      Rozwiązaniach. W swojej pracy wykorzystuję techniki TSR, których celem
      jest uruchomienie zasobów Klienta, wzmocnienie jego mocnych stron oraz
      zidentyfikowanie wewnętrznych strategii, które są nieskuteczne i
      nieadaptacyjne.
    </p>
  </div>
</div>;
{
  /* Card 4 */

/* <div className="w-full md:w-[calc(50%-1rem)] max-w-xl aspect-16/10 sm:min-h-85 relative rounded-3xl overflow-hidden shadow-lg border border-neutral-100 flex flex-col justify-end p-6 sm:p-10 group cursor-pointer">
  <Image
    src={IMAGES.card4}
    alt="Warsztaty i szkolenia"
    fill
    quality={60}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
  <div className="relative z-20 text-left">
    <h3 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
      Warsztaty i szkolenia
    </h3>
    <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
      Przeprowadziłem szereg szkoleń i warsztatów dla rodziców, opiekunów oraz
      pracowników korporacji i instytucji. Do każdego spotkania ustalam
      scenariusz indywidualnie, uwzględniając oczekiwania grupy oraz jej
      dynamikę.
    </p>
  </div>
</div>; */
