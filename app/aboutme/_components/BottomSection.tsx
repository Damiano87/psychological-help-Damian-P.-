"use client";

import { motion, Variants } from "framer-motion";

const words = [
  "Moja",
  "filozofia",
  "działania,",
  "inspiracje",
  "oraz",
  "wartości",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariant: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const BottomSection = () => {
  return (
    <section className="py-16 md:py-24 font-roboto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-neutral-600">
        <h3 className="text-xl sm:text-3xl font-bold mb-4">
          <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex flex-wrap gap-x-1.5"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariant}>
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h3>
        <p className="text-sm md:text-lg leading-relaxed text-neutral-600 mb-4">
          W swojej filozofii pracy czerpię inspirację od największych myślicieli
          i reformatorów psychologii oraz psychoanalizy. Na moje podejście
          wpływają szczególnie poglądy Carla Rogersa, Rollo Maya, Viktora
          Frankla oraz Alexandra Lowena na temat istnienia człowieka, jego
          naturalnej tendencji do spójności i koherencji, oraz przekonanie o
          wyjątkowości każdej osoby. Stawiam na budowanie autentycznej relacji
          terapeutycznej z Klientem, ponieważ to ona, staje się wehikułem
          zmiany. Liczy się dla mnie realny i autentyczny wpływ na życie
          Klienta, poparty sprawdzonymi technikami i narzędziami
          terapeutycznymi.
        </p>
      </div>
    </section>
  );
};

export default BottomSection;
