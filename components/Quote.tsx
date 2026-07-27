import { EB_Garamond, Cormorant_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin-ext"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-quote",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin-ext"],
  weight: ["500"],
  style: ["normal"],
  variable: "--font-signature",
});

export default function MacbethQuote() {
  return (
    <section
      className={`${ebGaramond.variable} ${cormorant.variable} relative flex items-center justify-center min-h-105 w-full overflow-hidden px-6 py-20`}
      style={{ backgroundColor: "#141110" }}
    >
      {/* subtle, theatrical glow in the background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(122,26,26,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-2xl text-center">
        <span
          aria-hidden="true"
          className="block text-6xl leading-none mb-4"
          style={{
            fontFamily: "var(--font-quote)",
            color: "#7a1a1a",
            opacity: 0.6,
          }}
        >
          „
        </span>

        <blockquote
          className="text-2xl md:text-3xl italic leading-relaxed tracking-wide"
          style={{
            fontFamily: "var(--font-quote)",
            color: "#ece4d8",
          }}
        >
          Ubierz żal w słowa; ból, który nie mówi, szepcze do serca i każe mu
          pęknąć
        </blockquote>

        <div
          className="mx-auto mt-8 mb-6 h-px w-16"
          style={{ backgroundColor: "#7a1a1a", opacity: 0.6 }}
        />

        <figcaption
          className="text-base md:text-lg tracking-[0.15em] uppercase"
          style={{
            fontFamily: "var(--font-signature)",
            color: "#a89a86",
          }}
        >
          „Makbet” — William Shakespeare
        </figcaption>
      </div>
    </section>
  );
}
