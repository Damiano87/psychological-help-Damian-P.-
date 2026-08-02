import type { Metadata } from "next";
import PsychotraumatologyContent from "./_components/PsychotraumatologyContent";

export const metadata: Metadata = {
  title: "Psychotraumatologia",
  description:
    "Diagnoza i leczenie objawów stresu pourazowego (PTSD, trauma). Profesjonalna pomoc psychotraumatologiczna dostosowana do indywidualnych potrzeb.",
  keywords: [
    "psychotraumatologia",
    "stres pourazowy",
    "PTSD",
    "leczenie traumy",
    "psychotraumatolog online",
    "trauma psychiczna",
    "pomoc po traumie",
  ],
  openGraph: {
    title:
      "Psychotraumatologia - Leczenie Traumy i PTSD | Miejsce spotkań ZMIANA",
    description:
      "Zrozumienie i pomoc w przetwarzaniu sytuacji traumatycznych. Skuteczne metody pracy ze stresem pourazowym.",
    url: "/offer/psychotraumatologia",
  },
};

export default function PsychotraumatologyPage() {
  return <PsychotraumatologyContent />;
}
