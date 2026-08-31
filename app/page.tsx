import Image from "next/image";
import Link from "next/link";
import { CARDS, IMAGES } from "@/lib/constants";
import homeHero from "@/public/mainbg.webp";
import MacbethQuote from "@/components/Quote";
import AnimatedHeroContent from "@/components/AnimatedHeroContent";
import UnderlineAnimation from "@/components/UnderlineAnimation";
import { fetchHomepageCardsData, fetchHomepageData } from "@/sanity/queries";

export default async function Home() {
  const data = await fetchHomepageData();
  const cardsData = await fetchHomepageCardsData();

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
              {/* UnderlineAnimation, (Its client component) */}
              <UnderlineAnimation />
            </div>
            <p className="first-letter-special text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              {data.OwnerBio1}
            </p>
            <br />
            <p className="text-sm sm:text-lg leading-relaxed text-neutral-600 font-roboto">
              {data.OwnerBio2}
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
