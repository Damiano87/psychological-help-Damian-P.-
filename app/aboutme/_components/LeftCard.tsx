"use client";

import { useState } from "react";
import { PortableTextBlock } from "next-sanity";
import PortableTextComponent from "@/components/PortableText";
import { getPlainTextExcerpt } from "../utils";

export default function PsychologicalPillar({
  title,
  description,
}: {
  title: string;
  description: PortableTextBlock[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-linear-to-br from-teal-100 via-teal-200 to-teal-600 border border-neutral-400 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl sm:text-3xl font-bold mb-12 tracking-wide">
        {title}
      </h3>

      <div
        className="grid transition-[grid-template-rows] duration-700 ease-in-out"
        style={{
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <PortableTextComponent
            value={description}
            firstLetterSpecial={false}
          />
        </div>
      </div>

      {/* Always seen */}
      {!isExpanded && (
        <p className="text-md md:text-lg leading-relaxed text-neutral-600 line-clamp-6 -mt-7">
          {getPlainTextExcerpt(description, 280)}
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
