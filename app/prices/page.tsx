import type { Metadata } from "next";
import PricesContent from "./_components/PricesContent";

export const metadata: Metadata = {
  title: "Cennik usług psychologicznych",
  description:
    "Sprawdź cennik konsultacji psychologicznych, psychotraumatologii oraz terapii TSR online. Przejrzyste warunki i koszty spotkań.",
  keywords: [
    "cennik psycholog",
    "cena konsultacji psychologicznej",
    "koszt terapii TSR",
    "cennik psychotraumatolog",
    "terapia online cena",
  ],
  openGraph: {
    title: "Cennik konsultacji i terapii | Miejsce spotkań ZMIANA",
    description:
      "Informacje o cenach i czasie trwania konsultacji psychologicznych, psychotraumatologii i terapii TSR.",
    url: "/prices",
  },
};

export default function PricesPage() {
  return <PricesContent />;
}
