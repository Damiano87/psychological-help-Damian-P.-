import type { Metadata } from "next";
import UnderlineAnimation from "@/components/UnderlineAnimation";
import CardContainer from "./_components/CardContainer";

export const metadata: Metadata = {
  title: "Oferta wsparcia psychologicznego",
  description:
    "Sprawdź pełną ofertę wsparcia psychologicznego: konsultacje psychologiczne, psychotraumatologia, terapia TSR oraz warsztaty i szkolenia.",
  keywords: [
    "oferta psychologiczna",
    "konsultacje psychologiczne",
    "psychotraumatologia",
    "terapia TSR",
    "warsztaty i szkolenia",
    "pomoc psychologiczna",
  ],
  openGraph: {
    title: "Oferta wsparcia psychologicznego | Miejsce spotkań ZMIANA",
    description:
      "Konsultacje psychologiczne, leczenie traumy (psychotraumatologia), terapia TSR oraz dedykowane warsztaty i szkolenia.",
    url: "/offer",
  },
};

export default function Offer() {
  return (
    <div className="relative py-20 md:py-28 bg-teal-50 min-h-screen transition-colors duration-300 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h1 className="text-4xl sm:text-6xl font-bold font-jost text-neutral-900">
              Oferta
            </h1>
            {/* It's client component */}
            <UnderlineAnimation width="100%" />
          </div>
        </div>

        {/* Grid Cards Container (It's client Component) */}
        <CardContainer />
      </div>
    </div>
  );
}
