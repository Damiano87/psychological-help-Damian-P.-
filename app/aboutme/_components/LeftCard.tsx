"use client";

import { useState } from "react";

export default function PsychologicalPillar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-linear-to-br from-teal-100 via-teal-200 to-teal-600 border border-neutral-400 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl sm:text-3xl font-bold mb-12 tracking-wide">
        Filar psychologiczny
      </h3>

      <div
        className="grid transition-[grid-template-rows] duration-700 ease-in-out"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <p className="text-md md:text-lg leading-relaxed text-neutral-600">
            Jakościowa ścieżka edukacyjna w postaci studiów psychologicznych na
            KUL JP II zapewniła mi solidne doświadczenie oraz wyposażyła w
            konkretne narzędzia diagnostyczne. Jestem dyplomowanym
            psychotraumatologiem, zajmującym się leczeniem skutków doświadczeń
            traumatycznych. Posiadam także kwalifikacje do badania kierowców pod
            kątem zdolności psychomotorycznych oraz predyspozycji
            psychologicznych. Jestem w trakcie szkolenia w zakresie Terapii
            Skoncentrowanej na Rozwiązaniach (TSR), która jest skuteczną
            odpowiedzią na dzisiejsze czasy – krótkoterminową, konkretną i o
            solidnej strukturze.
          </p>
          <br />
          <p className="text-md md:text-lg leading-relaxed text-neutral-600">
            Łączę w pracy z Klientem podejście werbalne z pracą z ciałem. Na
            bieżąco śledzę rozwój współczesnej psychologii i jej odkrycia.
            Aktualnie zajmuje mnie zgłębianie technik Terapii Metapoznawczej.
          </p>
        </div>
      </div>

      {/* Always seen */}
      {!isExpanded && (
        <p className="text-md md:text-lg leading-relaxed text-neutral-600 line-clamp-6 -mt-7">
          Jakościowa ścieżka edukacyjna w postaci studiów psychologicznych na
          KUL JP II zapewniła mi solidne doświadczenie oraz wyposażyła w
          konkretne narzędzia diagnostyczne. Jestem dyplomowanym
          psychotraumatologiem, zajmującym się leczeniem skutków doświadczeń
          traumatycznych.
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
