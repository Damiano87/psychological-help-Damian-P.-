import Image from "next/image";
import Link from "next/link";
import { CARDS, IMAGES } from "@/lib/constants";
import homeHero from "@/public/mainbg.webp";
import MacbethQuote from "@/components/Quote";
import AnimatedHeroContent from "@/components/AnimatedHeroContent";
import UnderlineAnimation from "@/components/UnderlineAnimation";

import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  _id,
  _createdAt,
  title,
  description,
  btntext,
  OwnerName,
  OwnerBio1,
  OwnerBio2,
  btn2Text,
  quote,
  quoteAuthor,
}`;

const CARDS_QUERY = `*[_type == "homepage"][0] {
  card1Title, card1Description,
  card2Title, card2Description,
  card3Title, card3Description,
  card4Title, card4Description
}`;

const options = { next: { revalidate: 30 } };

type Homepage = {
  title: string;
  description: string;
  btntext: string;
  OwnerName: string;
  OwnerBio1: string;
  OwnerBio2: string;
  btn2Text: string;
  quote: string;
  quoteAuthor: string;
};

export default async function Home() {
  let data;
  try {
    data = await client.fetch<Homepage>(HOMEPAGE_QUERY, {}, options);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    data = {
      title: "",
      description: "",
      btntext: "",
      OwnerName: "",
      OwnerBio1: "",
      OwnerBio2: "",
      btn2Text: "",
      quote: "",
      quoteAuthor: "",
    }; // fallback
  }

  const cardsData = await client.fetch(CARDS_QUERY, {}, options);

  const cards = CARDS.map((card, i) => ({
    ...card,
    title: cardsData[`card${i + 1}Title`] ?? card.title,
    description: cardsData[`card${i + 1}Description`] ?? card.description,
  }));

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
            fetchPriority="high"
            placeholder="blur"
            quality={15}
            sizes="(max-width: 768px) 100vw, 1920px"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute inset-0 bg-neutral-700/70 " />
        </div>

        {/* Hero Content (It's client component) */}
        <AnimatedHeroContent data={data} />
      </section>
      {/* Offer section */}
      <section className="py-20 md:py-28 transition-colors duration-300 font-jost bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {/* Cards */}
            {cards.map((card, index) => {
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
                      sizes="(max-width: 640px) 90vw, (max-width: 1200px) 40vw, 576px"
                      className={`object-cover transition-transform duration-700 ${
                        index === 2
                          ? "scale-150 -translate-y-15 group-hover:scale-[1.7]"
                          : "group-hover:scale-105"
                      }`}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-transparent z-10" />
                    <div className="relative sm:mt-14 z-20 text-left">
                      <h2 className="text-xl sm:text-3xl font-bold font-jost text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {card.title}
                      </h2>
                      <p className="text-neutral-200 text-xs sm:text-base font-roboto leading-relaxed">
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
                {data.OwnerName}
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
              <span> {data.btn2Text} </span>
            </Link>
          </div>

          {/* Image container */}
          <div className="shrink-0 w-full max-w-96 sm:max-w-120 aspect-4/5 relative rounded-2xl overflow-hidden">
            <Image
              src={IMAGES.damianHome}
              alt="Zdjęcie Damiana Piwowarczyka"
              fill
              quality={60}
              sizes="(max-width: 640px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <MacbethQuote quote={data.quote} quoteAuthor={data.quoteAuthor} />
    </div>
  );
}
