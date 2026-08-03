import type { Metadata } from "next";
import Image from "next/image";
import LeftCard from "./_components/LeftCard";
import RightCard from "./_components/RightCard";
import BottomSection from "./_components/BottomSection";
import { IMAGES } from "@/lib/constants";
import AnimatedHeroContentAbout from "./_components/AnimatedHeroContentAbout";
import UnderlineAnimation from "@/components/UnderlineAnimation";

export const metadata: Metadata = {
  title: "O mnie - Damian Piwowarczyk",
  description:
    "Poznaj moją ścieżkę zawodową i doświadczenie. Dyplomowany psycholog (KUL JP II), psychotraumatolog i terapeuta TSR z wieloletnim doświadczeniem.",
  keywords: [
    "Damian Piwowarczyk",
    "o mnie",
    "doświadczenie psycholog",
    "psychotraumatolog KUL",
    "terapeuta TSR",
    "ścieżka zawodowa psycholog",
  ],
  openGraph: {
    title: "O mnie - Damian Piwowarczyk | Psycholog i Psychotraumatolog",
    description:
      "Poznaj moje doświadczenie zawodowe, wykształcenie i podejście terapeutyczne w Miejscu spotkań ZMIANA.",
    url: "/aboutme",
  },
};

export default function AboutMe() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.aboutMeHero}
            alt="Drzewa"
            fill
            preload
            quality={60}
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-neutral-800/40" />
        </div>

        {/* Content (its client component) */}
        <AnimatedHeroContentAbout />
      </section>
      {/* info and image section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block mb-6 relative">
              <h2 className="text-3xl font-bold font-roboto">O mnie</h2>
              {/* UnderlineAnimation (its client component) */}
              <UnderlineAnimation width="120%" />
            </div>
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              <span className="float-left text-5xl leading-none pr-3 mt-1">
                J
              </span>
              estem absolwentem studiów psychologicznych w trybie dziennym na
              Katolickim Uniwersytecie Lubelskim Jana Pawła II (obrona dyplomu w
              2011 roku), psychotraumatologiem oraz psychologiem transportu.
              Jestem w trakcie szkolenia w zakresie Terapii Skoncentrowanej na
              Rozwiązaniach (TSR). Posiadam wieloletnie doświadczenie
              psychologiczne w pracy z dziećmi i młodymi dorosłymi, które
              zdobywałem w poradni psychologiczno-pedagogicznej oraz w szkołach
              podstawowych i ponadpodstawowych. Od wielu lat pracuję z rodzicami
              i opiekunami, prowadząc warsztaty oraz indywidualne konsultacje.
              Cały czas poznaję problemy młodych ludzi, przed którymi świat
              stawia cały wachlarz wyzwań i presji. Wrażliwość współczesnych
              nastolatków, ich świadomość siebie i inteligencja emocjonalna
              sprawiają, że coraz trudniej odnaleźć im satysfakcję i sens oraz
              otoczyć się zdrowymi, wspierającymi relacjami. Czerpię ogromną
              radość z budowania odporności psychicznej i spójności w dzieciach,
              młodzieży oraz dorosłych.
            </p>
            <br />
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              Pracę psychologa traktuję jako misję. W kontakcie z Klientem
              skupiam się na budowaniu bezpiecznej relacji, która jest nośnikiem
              realnej zmiany, a także na poprawie jakości życia psychicznego.
              Stawiam na głębię spotkania oraz prostotę, skupiając się na
              wymiernych efektach, a także uruchomiając zasoby Klienta oraz jego
              naturalną odporność psychiczną. Łączę techniki terapii werbalnej z
              pracą z ciałem, stale pogłębiając wiedzę o funkcjonowaniu
              człowieka, jego jaźni, psychiki i ciała.
            </p>
          </div>

          {/* Image container */}
          <div className="shrink-0 w-full max-w-96 sm:max-w-120 aspect-4/5 relative rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.damianAboutMe}
              alt="Zdjęcie profilowe"
              fill
              loading="lazy"
              sizes="(max-width: 640px) 384px, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* my proffesional experience and education */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="w-fit relative mb-6">
            <h3 className="font-roboto text-xl sm:text-3xl font-bold">
              Moja ścieżka zawodowa
            </h3>
            {/* UnderlineAnimation (its client component) */}
            <UnderlineAnimation />
          </div>
          <p className="font-roboto text-sm sm:text-lg leading-relaxed text-neutral-600 mb-6">
            <span className="float-left text-5xl leading-none pr-3 mt-1">
              R
            </span>
            óżnorodna ścieżka zawodowa to siła i atut, które wplatam do
            działalności psychologa. Dzięki szerokiemu doświadczeniu zawodowemu
            potrafię spojrzeć na wyzwania i problemy Klienta z pogłębionej
            perspektywy. Posiadam wieloletnie doświadczenie korporacyjne,
            projektowe oraz medialne. Pracowałem także w instytucjach kultury na
            stanowiskach kierowniczych. Jestem autorem książki poetyckiej
            „rezyliencje", dofinansowanej przez Ministerstwo Kultury i
            Dziedzictwa Narodowego, a zainteresowania literackie stanowią
            integralną część mojego życia, ubogacając mój warsztat psychologa.
            Publikowałem artykuły i recenzje w „Rzeczpospolitej", „Gazecie
            Wyborczej", na łamach dwutygodnik.com, w „Piśmie. Magazynie Opinii"
            oraz w „Przekroju".
          </p>
        </div>
      </section>
      {/* Two columns info */}
      <section className="py-16 md:py-24 bg-teal-100 font-roboto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-start gap-12 md:gap-16">
          {/* Column 1 - Filar psychologiczny */}
          <LeftCard />
          {/* Column 2 - Filar zawodowy */}
          <RightCard />
        </div>
      </section>
      {/* It's client component */}
      <BottomSection />
      {/* Image section */}
      <section className="flex justify-center mx-4 sm:mx-0 mb-8">
        {/* Image container */}
        <div className="shrink-0 w-full max-w-96 sm:max-w-120 aspect-4/5 relative rounded-2xl overflow-hidden">
          <Image
            src={IMAGES.damianBricks}
            alt="Zdjęcie Damiana Piwowarczyka na tle ceglanej ściany"
            fill
            loading="lazy"
            sizes="(max-width: 640px) 384px, 480px"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
