import Image from "next/image";
import Link from "next/link";
import { CARDS, IMAGES } from "@/lib/constants";
import homeHero from "@/public/mainbg.webp";
import MacbethQuote from "@/components/Quote";
import AnimatedHeroContent from "@/components/AnimatedHeroContent";
import UnderlineAnimation from "@/components/UnderlineAnimation";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative  py-6 w-full overflow-hidden">
        {/* Background Image with overlay for readability */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={homeHero}
            alt="Psychologiczna pomoc i wsparcie"
            fill
            preload
            placeholder="blur"
            quality={60}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-neutral-700/40 " />
        </div>

        {/* Hero Content (It's client component) */}
        <AnimatedHeroContent />
      </section>
      {/* Offer section */}
      <section className="py-20 md:py-28 transition-colors duration-300 font-jost bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Cards */}
            {CARDS?.map((card, index) => {
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="w-full md:w-[calc(50%-1rem)] max-w-xl min-h-60 sm:min-h-85 relative rounded-3xl overflow-hidden  border border-neutral-100 dark:border-neutral-800 flex flex-col justify-end sm:justify-start p-6 sm:p-10 group cursor-pointer"
                >
                  <div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      quality={60}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-700 ${
                        index === 2
                          ? "scale-150 -translate-y-15 group-hover:scale-[1.7]"
                          : "group-hover:scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent z-10" />
                    <div className="relative sm:mt-14 z-20 text-left">
                      <h2 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {card.title}
                      </h2>
                      <p className="text-neutral-200 text-xs sm:text-base font-roboto font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* info and image section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-block mb-6 relative">
              <h2 className="text-2xl sm:text-3xl font-bold font-roboto">
                Damian Piwowarczyk
              </h2>
              {/* UnderlineAnimation, (It's client component) */}
              <UnderlineAnimation />
            </div>
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              <span className="float-left text-4xl sm:text-5xl leading-none pr-3 mt-1">
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
              stawia cały skomplikowany wachlarz wyzwań i presji. Wrażliwość
              współczesnych nastolatków, ich świadomość siebie i inteligencja
              emocjonalna sprawiają, że coraz trudniej odnaleźć im satysfakcję i
              sens oraz otoczyć się zdrowymi, wspierającymi relacjami. Czerpię
              ogromną radość z budowania odporności psychicznej i spójności w
              dzieciach, młodzieży oraz dorosłych.
            </p>
            <br />
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              Pracę psychologa traktuję jako misję. W kontakcie z Klientem
              skupiam się na budowaniu bezpiecznej relacji, która jest nośnikiem
              realnej zmiany, a także na poprawie jakości życia psychicznego.
              Stawiam na głębię spotkania oraz prostotę, skupiając się na
              wymiernych efektach, a także uruchamiając zasoby Klienta oraz jego
              naturalną odporność psychiczną. Łączę techniki terapii werbalnej
              z&nbsp; pracą z ciałem, stale pogłębiając wiedzę o funkcjonowaniu
              człowieka, jego jaźni, psychiki i&nbsp;ciała.
            </p>
            <Link
              className="inline-block text-teal-600 border border-teal-600 hover:text-white hover:bg-teal-600 duration-300 px-4 py-2 mt-10 rounded-md text-lg font-jost"
              href="/aboutme"
            >
              <span> Więcej... </span>
            </Link>
          </div>

          {/* Image container */}
          <div className="shrink-0 w-full max-w-96 sm:max-w-120 aspect-4/5 relative rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.damianHome}
              alt="Zdjęcie Damiana Piwowarczyka"
              fill
              sizes="(max-width: 640px) 384px, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <MacbethQuote />
    </div>
  );
}
