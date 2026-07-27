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
        <p className="text-base md:text-lg leading-relaxed text-neutral-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          laborum alias, rerum aliquid expedita commodi, consectetur ipsa,
          voluptas illo exercitationem quaerat? Deserunt, exercitationem eius?
        </p>
        <p className="text-base md:text-lg leading-relaxed text-neutral-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam
          dolorem consequatur officiis delectus non corporis velit eum, culpa
          rem?
        </p>
      </div>
    </section>
  );
};

export default BottomSection;
