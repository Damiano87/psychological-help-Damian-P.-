"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES, containerVariants, itemVariants } from "@/lib/constants";

const PsychologicalConsultations = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.psychConsultsHero}
            alt="Terapia z dorosłym"
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
            Konsultacje psychologiczne
          </motion.h1>
        </motion.div>
      </section>

      {/* Consultation Details Section */}
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
                Konsultacja psychologiczna to spotkanie, podczas którego
                zrozumiesz swoje wyzwania i kontekst sytuacyjny wraz z afektami
                im towarzyszącymi. Wspólnie wypracujemy rozwiązanie oraz konkretny plan działania. 

              </p>

              {/* <p className="text-neutral-700 text-lg leading-relaxed">
                Proponuję konsultacje, które mają zawsze określoną strukturę:
                wywiad, rozwiązanie oraz plan działania. W przypadku sytuacji, w
                których zdiagnozuję konieczność dodatkowych działań, jestem
                gotowy pokierować Cię do innych miejsc, w których uzyskasz
                dalszą pomoc.
              </p> */}

              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mb-4 font-jost">
                  Zakres konsultacji:
                </h2>
                <ul className="flex flex-col gap-3">
                  {[
                    "interwencja kryzysowa",
                    "trudności w relacjach interpersonalnych",
                    "zaburzenia osobowości",
                    "budowanie poczucia wewnętrznej spójności i koherencji",
                    "wyzwania rodzicielskie i opiekuńcze",
                    "wypalenie zawodowe i rodzicielskie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                      <span className="text-neutral-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
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
                  src="https://images.pexels.com/photos/7176036/pexels-photo-7176036.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dwie osoby w trakcie rozmowy"
                  fill
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

export default PsychologicalConsultations;
