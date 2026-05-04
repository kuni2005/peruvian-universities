"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const teamMembers = [
  { name: "Ana García", role: "CEO", img: "/assets/images/team/ana-garcia.jpg" },
  { name: "Carlos Mendoza", role: "Head Coach", img: "/assets/images/team/carlos-mendoza.jpg" },
  { name: "Lucía Torres", role: "Academic Director", img: "/assets/images/team/lucia-torres.jpg" },
  { name: "Rafael Vega", role: "Operations Director", img: "/assets/images/team/rafael-vega.jpg" },
  { name: "Sofía Paredes", role: "Training Lead", img: "/assets/images/team/sofia-paredes.jpg" },
  { name: "Diego Quispe", role: "International Relations", img: "/assets/images/team/diego-quispe.jpg" },
];

const VISIBLE = 4;

export default function TeamCarousel() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () =>
    setStart((s) => Math.min(teamMembers.length - VISIBLE, s + 1));

  const visible = teamMembers.slice(start, start + VISIBLE);

  return (
    <div>
      {/* Navigation arrows */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={prev}
          disabled={start === 0}
          aria-label="Previous members"
          className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ←
        </button>
        <button
          onClick={next}
          disabled={start >= teamMembers.length - VISIBLE}
          aria-label="Next members"
          className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          →
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visible.map((member) => (
          <div key={member.name} className="group">
            <div className="rounded-2xl overflow-hidden mb-3">
              <ImagePlaceholder
                src={member.img}
                alt={member.name}
                aspectRatio="aspect-[3/4]"
                className="rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="font-condensed text-xs font-bold uppercase tracking-wider text-neutral-400">
              {member.role}
            </p>
            <p className="font-bebas text-xl text-neutral-900 leading-tight mt-0.5">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
