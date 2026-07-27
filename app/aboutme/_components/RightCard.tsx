"use client";

import { useState } from "react";

export default function PsychologicalPillar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-linear-to-br from-teal-100 via-teal-200 to-teal-600 border border-neutral-400 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl sm:text-3xl font-bold mb-12 tracking-wide">
        Filar zawodowy
      </h3>

      <div
        className="grid transition-[grid-template-rows] duration-700 ease-in-out"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="text-md md:text-lg leading-relaxed text-neutral-600">
            Posiadam wieloletnie doświadczenie w pracy z ludźmi. Podczas pracy w
            szkołach podstawowych oraz ponadpodstawowych przez ostatnie lata
            towarzyszyłem podopiecznym w szeregu wyzwań, między innymi:
            zaburzeniami osobowości, depresją, pustką egzystencjalną, niską
            samooceną, przemocą rówieśniczą i uzależnieniami. W kontakcie z
            dziećmi i młodzieżą zachowuję postawę proaktywną, działam w grupie
            na zasadach warsztatowych oraz pracuję w klasach pod kątem
            psychoedukacji i psychoprofilaktyki. W pracy projektowej i
            korporacyjnej, w międzynarodowym środowisku, rozwijałem swoje
            kompetencje menedżerskie i interpersonalne. Doświadczenie w
            zarządzaniu zespołem zdobywałem także w mediach i instytucjach
            kultury. Od lat jestem związany zawodowo z literaturą – jestem
            autorem tomiku wierszy dofinansowanego przez Ministerstwo Kultury i
            Dziedzictwa Narodowego. Aktualnie pracuję nad nową książką poetycką,
            a dodatkowo piszę recenzje poezji współczesnej dla czołowych
            polskich mediów. Brałem udział jako ekspert w podcastach, panelach
            oraz programach telewizyjnych.
          </p>
        </div>
      </div>

      {/* Always seen */}
      {!isExpanded && (
        <p className="text-md md:text-lg leading-relaxed text-neutral-600 line-clamp-7 -mt-7">
          Posiadam wieloletnie doświadczenie w pracy z ludźmi. Podczas pracy w
          szkołach podstawowych oraz ponadpodstawowych przez ostatnie lata
          towarzyszyłem podopiecznym w szeregu wyzwań, między innymi:
          zaburzeniami osobowości, depresją, pustką egzystencjalną, niską
          samooceną, przemocą rówieśniczą i uzależnieniami.
        </p>
      )}

      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-10 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
      >
        {isExpanded ? "mniej" : "więcej"}...
      </button>
    </div>
  );
}
