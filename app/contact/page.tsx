import type { Metadata } from "next";
import ContactContent from "./_components/ContactContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z gabinetem psychologicznym Miejsce spotkań ZMIANA. Zadzwoń, napisz wiadomość e-mail lub skorzystaj z formularza kontaktowego.",
  keywords: [
    "kontakt psycholog",
    "formularz kontaktowy",
    "Damian Piwowarczyk kontakt",
    "rejestracja wizyty psycholog",
    "gabinet psychologiczny kontakt",
    "rejestracja wizyty psychotraumatolog",
    "warsztaty Ostrowiec Świętokrzyski",
    "szkolenia Ostrowiec Świętokrzyski",
    "pomoc psychologiczna Ostrowiec Świętokrzyski",
    "terapia traumy Ostrowiec Świętokrzyski",
  ],
  openGraph: {
    title: "Kontakt - Damian Piwowarczyk | Miejsce spotkań ZMIANA",
    description:
      "Napisz lub zadzwoń, aby umówić się na konsultację psychologiczną lub zapytać o ofertę.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
