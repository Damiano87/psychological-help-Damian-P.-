import type { Metadata } from "next";
import TSRTherapyContent from "./_components/TSRTherapyContent";

export const metadata: Metadata = {
  title: "Terapia TSR (Skoncentrowana na Rozwiązaniach)",
  description:
    "Terapia Skoncentrowana na Rozwiązaniach (TSR). Uruchomienie zasobów Klienta, praca nad mocnymi stronami i budowanie skutecznych strategii.",
  keywords: [
    "terapia TSR",
    "terapia skoncentrowana na rozwiązaniach",
    "terapeuta TSR",
    "rozwiązania psychologia",
    "terapia krótkoterminowa",
    "wzmocnienie zasobów",
  ],
  openGraph: {
    title: "Terapia TSR | Miejsce spotkań ZMIANA",
    description:
      "Nowoczesna metoda terapeutyczna skoncentrowana na zasobach, mocnych stronach i realnych celach Klienta.",
    url: "/offer/terapia-tsr",
  },
};

export default function TSRTherapyPage() {
  return <TSRTherapyContent />;
}
