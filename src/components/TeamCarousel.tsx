"use client";

import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Names + photos are structural; role labels come from the i18n dictionary
// at `team.roles` (same order).
const teamMembers = [
  { name: "Juani Mun", img: "/assets/images/about/img-team-1.png" },
  { name: "Maria Gonzalez", img: "/assets/images/about/img-team-1.png" },
  { name: "John Smith", img: "/assets/images/about/img-team-1.png" },
  { name: "Emily Chen", img: "/assets/images/about/img-team-1.png" },
  { name: "Raj Patel", img: "/assets/images/about/img-team-1.png" },
  { name: "Sophia Lee", img: "/assets/images/about/img-team-1.png" },
];

export default function TeamCarousel() {
  const { t } = useI18n();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, i) => (
        <div key={member.name} className="rounded-2xl overflow-hidden bg-neutral-200 relative">
          <ImagePlaceholder
            src={member.img}
            alt={member.name}
            aspectRatio="aspect-[3/4]"
            className="rounded-2xl"
          />
          <div className="absolute inset-x-4 bottom-4">
            <div className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center justify-between gap-3">
              <div>
                <p className="font-bebas text-lg text-neutral-900 leading-tight">
                  {member.name}
                </p>
                <p className="text-xs text-neutral-500">{t.team.roles[i]}</p>
              </div>
              <span className="h-7 w-7 rounded-md border border-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-500">
                in
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
