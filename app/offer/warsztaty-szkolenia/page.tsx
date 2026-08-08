import type { Metadata } from "next";
import WorkshopsContent from "./_components/WorkshopsContent";

export const metadata: Metadata = {
  title: "Warsztaty i szkolenia",
  description:
    "Szkolenia i warsztaty psychologiczne dla rodziców, opiekunów, korporacji i instytucji. Indywidualny scenariusz i dynamika pracy z grupą.",
  keywords: [
    "warsztaty psychologiczne",
    "szkolenia dla rodziców",
    "szkolenia dla firm",
    "warsztaty korporacyjne",
    "odporność psychiczna",
    "resilience",
  ],
  alternates: {
    canonical: "https://miejscespotkanzmiana.pl/offer/warsztaty-szkolenia",
  },
  openGraph: {
    title: "Warsztaty i szkolenia psychologiczne | Miejsce spotkań ZMIANA",
    description:
      "Autorskie warsztaty i szkolenia dostosowane do potrzeb rodziców, opiekunów oraz zespołów firmowych.",
    url: "https://miejscespotkanzmiana.pl/offer/warsztaty-szkolenia",
  },
};

export default function WorkshopsPage() {
  return <WorkshopsContent />;
}
