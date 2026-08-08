import type { Metadata } from "next";
import ConsultationsContent from "./_components/ConsultationsContent";

export const metadata: Metadata = {
  title: "Konsultacje psychologiczne",
  description:
    "Indywidualne konsultacje psychologiczne. Pomoc w kryzysie, trudnościach w relacjach, zaburzeniach osobowości oraz wypaleniu zawodowym i rodzicielskim.",
  keywords: [
    "konsultacje psychologiczne",
    "interwencja kryzysowa",
    "wypalenie zawodowe",
    "trudności w relacjach",
    "pomoc psychologiczna online",
    "psycholog online",
  ],
  alternates: {
    canonical:
      "https://miejscespotkanzmiana.pl/offer/konsultacje-psychologiczne",
  },
  openGraph: {
    title: "Konsultacje psychologiczne | Miejsce spotkań ZMIANA",
    description:
      "Spotkania konsultacyjne ukierunkowane na zrozumienie wyzwań i wypracowanie konkretnego planu działania.",
    url: "https://miejscespotkanzmiana.pl/offer/konsultacje-psychologiczne",
  },
};

export default function PsychologicalConsultationsPage() {
  return <ConsultationsContent />;
}
