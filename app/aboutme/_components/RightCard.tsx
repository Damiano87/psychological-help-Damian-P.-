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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
            gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
            quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
            tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
            auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
            Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed
            non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
            nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
            egestas quam, ut aliquam massa nisl quis neque.
          </p>
        </div>
      </div>

      {/* Zawsze widoczny fragment tekstu, gdy zwinięte */}
      {!isExpanded && (
        <p className="text-md md:text-lg leading-relaxed text-neutral-600 line-clamp-5 -mt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
          gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
          bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
          elit.
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
