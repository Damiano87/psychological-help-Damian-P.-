export const IMAGES = {
  homeHero: "/mainbg.webp",
  aboutMeHero: "/about.jpg",
  psychConsultsHero:
    "https://images.pexels.com/photos/7176076/pexels-photo-7176076.jpeg",
  psychTraumatologyHero:
    "https://images.pexels.com/photos/5699418/pexels-photo-5699418.jpeg",
  tsrTherapyHero:
    "https://images.pexels.com/photos/1073054/pexels-photo-1073054.jpeg",
  workshopsHero:
    "https://images.pexels.com/photos/3931562/pexels-photo-3931562.jpeg",
} as const;

export const CARDS = [
  {
    image: "https://images.pexels.com/photos/7176076/pexels-photo-7176076.jpeg",
    title: "Konsultacje psychologiczne",
    description:
      "Konsultacja psychologiczna to spotkanie, podczas którego zrozumiesz swoje wyzwania i kontekst sytuacyjny wraz z afektami i emocjami im towarzyszącymi. Wspólnie wypracujemy  rozwiązanie oraz konkretny plan działania.",
    href: "/offer/konsultacje-psychologiczne",
  },
  {
    image: "https://images.pexels.com/photos/5699418/pexels-photo-5699418.jpeg",
    title: "Psychotraumatologia",
    description:
      "Jako dyplomowany psycholog i psychotraumatolog zajmuję się leczeniem osób z objawami stresu pourazowego.",
    href: "/offer/psychotraumatologia",
  },
  {
    image: "https://images.pexels.com/photos/1073054/pexels-photo-1073054.jpeg",
    title: "Terapia TSR",
    description:
      "Jestem terapeutą w trakcie szkolenia w zakresie Terapii Skoncentrowanej na Rozwiązaniach. W swojej pracy wykorzystuję techniki TSR, których celem jest uruchomienie zasobów Klienta, wzmocnienie jego mocnych stron oraz zidentyfikowanie wewnętrznych strategii, które są nieskuteczne i nieadaptacyjne.",
    href: "/offer/terapia-tsr",
  },
  {
    image: "https://images.pexels.com/photos/3931562/pexels-photo-3931562.jpeg",
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
