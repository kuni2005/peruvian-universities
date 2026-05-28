"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

type FilterKey = "Todos" | "MUN" | "Conferencias" | "Competencias";

const items = [
  {
    id: 1,
    category: "MUN" as FilterKey,
    event: "Harvard WorldMUN 2024",
    title: "Lima, Perú",
    img: "/assets/images/experience/worldmun-2024.jpg",
    large: true,
  },
  {
    id: 2,
    category: "Conferencias" as FilterKey,
    event: "ONU Lima 2023",
    title: "Conferencia anual",
    img: "/assets/images/experience/onu-lima-2023.jpg",
    large: false,
  },
  {
    id: 3,
    category: "Competencias" as FilterKey,
    event: "Workshop 2024",
    title: "Debate intensivo",
    img: "/assets/images/experience/workshop-2024.jpg",
    large: false,
  },
  {
    id: 4,
    category: "MUN" as FilterKey,
    event: "HNMUN 2023",
    title: "Boston, USA",
    img: "/assets/images/experience/hnmun-2023.jpg",
    large: false,
  },
  {
    id: 5,
    category: "Conferencias" as FilterKey,
    event: "PeruMUN 2024",
    title: "Lima, Perú",
    img: "/assets/images/experience/perumun-2024.jpg",
    large: false,
  },
];

const filters: FilterKey[] = ["Todos", "MUN", "Conferencias", "Competencias"];

export default function ExperienceGallery() {
  const [active, setActive] = useState<FilterKey>("Todos");

  const filtered =
    active === "Todos" ? items : items.filter((i) => i.category === active);

  const [first, ...rest] = filtered;

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-0 border-b border-neutral-200 mb-10 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-3 font-condensed text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
              active === f
                ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                : "text-neutral-400 hover:text-neutral-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      {filtered.length === 0 ? (
        <p className="font-body text-neutral-400 text-sm py-12 text-center">
          No hay elementos en esta categoría.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Featured row — fixed height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-[400px]">
            {/* Large item */}
            {first && (
              <div className="relative rounded-3xl overflow-hidden group h-56 md:h-full">
                <ImagePlaceholder
                  src={first.img}
                  alt={first.title}
                  aspectRatio=""
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-white/70 text-xs mb-1">{first.event}</p>
                  <p className="font-bebas text-white text-2xl leading-tight">{first.title}</p>
                </div>
              </div>
            )}

            {/* Right column — first 2 items */}
            <div className="flex flex-col gap-4 md:h-full">
              {rest.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-3xl overflow-hidden group flex-1 min-h-36"
                >
                  <ImagePlaceholder
                    src={item.img}
                    alt={item.title}
                    aspectRatio=""
                    className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-body text-white/70 text-xs mb-0.5">{item.event}</p>
                    <p className="font-bebas text-white text-xl leading-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extra items row */}
          {rest.length > 2 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {rest.slice(2).map((item) => (
                <div
                  key={item.id}
                  className="relative rounded-3xl overflow-hidden group"
                >
                  <div className="aspect-[4/3]">
                    <ImagePlaceholder
                      src={item.img}
                      alt={item.title}
                      aspectRatio=""
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-body text-white/70 text-xs mb-0.5">{item.event}</p>
                    <p className="font-bebas text-white text-xl leading-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
