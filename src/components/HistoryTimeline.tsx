"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Years are structural (used as tab labels + image lookups). The matching
// title/body copy lives in the i18n dictionary at `history.events` (same order).
const timelineYears = [
  "2004",
  "2006",
  "2008",
  "2010",
  "2014",
  "2016",
  "2018",
  "2020",
  "2022",
  "2025",
  "2026",
];

const timelineImg = "/assets/images/about/img-year.JPG";
const defaultIndex = 0;

export default function HistoryTimeline() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const activeYear = timelineYears[activeIndex];
  const active = t.history.events[activeIndex];

  return (
    <div>
      {/* Year tabs — horizontally scrollable so all years fit on mobile */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <div className="flex items-center border-b border-neutral-200 min-w-max">
          {timelineYears.map((year, i) => (
            <button
              key={year}
              onClick={() => setActiveIndex(i)}
              className={[
                "font-condensed text-md font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0",
                "px-3 md:px-4 pb-4",
                i === activeIndex
                  ? "text-neutral-900 border-b-2 border-neutral-900"
                  : "text-neutral-300 hover:text-neutral-600 border-b-2 border-transparent",
              ].join(" ")}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Active event detail */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:gap-0">
        {/* Large year */}
        <div className="md:col-span-4 md:py-14 md:pr-10">
          <p className="font-bebas text-7xl md:text-8xl lg:text-9xl text-pu-dark leading-none">
            {activeYear}
          </p>
        </div>

        {/* Title + body */}
        <div className="md:col-span-4 md:py-14 md:px-10 md:border-l md:border-neutral-200">
          <h3 className="font-bebas uppercase text-2xl md:text-3xl leading-tight text-neutral-900 mb-6">
            {active.title}
          </h3>
          <p className="font-body text-neutral-500 text-sm leading-relaxed max-w-sm">
            {active.body}
          </p>
        </div>

        {/* Image */}
        <div className="md:col-span-4 md:py-14 md:pl-10 md:border-l md:border-neutral-200 flex items-start">
          <div className="w-full max-w-96 h-56 sm:h-72 overflow-hidden rounded-xl shadow-sm bg-neutral-100">
            <ImagePlaceholder
              src={timelineImg}
              alt={`Peruvian Universities ${activeYear}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
