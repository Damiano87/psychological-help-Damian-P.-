import consult from "../public/consultations.webp";
import trauma from "../public/traumatology.webp";
import tsr from "../public/tsrtherapy.webp";
import workshops from "../public/workshops.webp";

export const IMAGES = {
  homeHero: "/mainbg.webp",
  aboutMeHero: "/about.jpg",
  damianHome: "/damian-home.webp",
  damianAboutMe: "/damian-aboutme.webp",
  damianBricks: "/damian-bricks.webp",
  psychConsultsHero: consult,
  psychTraumatologyHero: trauma,
  tsrTherapyHero: tsr,
  workshopsHero: workshops,
} as const;

export const CARDS = [
  {
    image: consult,
    title: "Konsultacje psychologiczne",
    description:
      "Konsultacja psychologiczna to spotkanie, podczas którego zrozumiesz swoje wyzwania i kontekst sytuacyjny wraz z afektami im towarzyszącymi.",
    href: "/offer/konsultacje-psychologiczne",
  },
  {
    image: trauma,
    title: "Psychotraumatologia",
    description:
      "Jako dyplomowany psycholog i psychotraumatolog zajmuję się leczeniem osób z objawami stresu pourazowego.",
    href: "/offer/psychotraumatologia",
  },
  {
    image: tsr,
    title: "Terapia TSR",
    description:
      "Jestem terapeutą w trakcie szkolenia w zakresie Terapii Skoncentrowanej na Rozwiązaniach. W swojej pracy wykorzystuję techniki TSR, których celem jest uruchomienie zasobów Klienta.",
    href: "/offer/terapia-tsr",
  },
  {
    image: workshops,
    title: "Warsztaty i szkolenia",
    description:
      "Przeprowadziłem szereg szkoleń i warsztatów dla rodziców, opiekunów oraz pracowników korporacji i instytucji. Do każdego spotkania ustalam scenariusz indywidualnie, uwzględniając oczekiwania grupy oraz jej dynamikę.",
    href: "/offer/warsztaty-szkolenia",
  },
] as const;

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
      delayChildren: 0.1,
    },
  },
} as const;

export const itemVariants = {
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

export const cardVariants = {
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
