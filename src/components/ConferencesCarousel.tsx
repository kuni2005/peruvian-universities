"use client";
import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

interface Slide {
  id: string;
  img: string;
  thumbnailLogo?: string;
  logo?: string;
  logoAlt?: string;
  label?: string;
  title?: string;
}

// Slide descriptions live in the i18n dictionary at
// `conferencesCarousel.descriptions` (same order as this array).
const slides: Slide[] = [
  {
    id: "worldmun",
    img: "/assets/images/accion/img-harvard.png",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
  {
    id: "perumun",
    img: "/assets/images/accion/img-harvard.png",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
  {
    id: "mocan",
    img: "/assets/images/accion/img-harvard.png",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
];

export default function ConferencesCarousel() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const current = slides[active];

  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden md:h-160 lg:h-180">
      {/* Main slide — click to reveal the description so it doesn't cover the image */}
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        className="relative w-full h-72 sm:h-96 md:h-auto md:flex-1 min-w-0 text-left cursor-pointer"
      >
        {/* Background image */}
        <ImagePlaceholder
          src={current.img}
          alt={current.title ?? current.id}
          aspectRatio=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />

        {/* "Show more" affordance — visible only while the description is hidden */}
        <span
          className={`absolute bottom-4 right-4 md:bottom-6 md:right-6 h-10 w-10 rounded-full border border-white/50 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white text-xl transition-opacity duration-300 ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          ↗
        </span>

        {/* Description overlay — fades in on click */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            revealed ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-neutral-900/40" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between gap-4 md:gap-6">
            <p className="font-body text-neutral-200 text-sm leading-relaxed max-w-sm">
              {t.conferencesCarousel.descriptions[active]}
            </p>
          </div>
        </div>
      </button>

      {/* Thumbnail navigation — horizontal strip on mobile, side panel from md up */}
      <div className="bg-pu-dark w-full md:w-64 lg:w-72 shrink-0 flex flex-row md:flex-col gap-3 md:gap-4 p-3 md:p-5">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => {
              setActive(i);
              setRevealed(false);
            }}
            className={`flex-1 rounded-2xl flex flex-col items-center justify-center gap-2 px-3 py-3 md:py-4 transition-all duration-300 border cursor-pointer ${
              active === i
                ? "border-white/25 bg-white/10"
                : "border-transparent bg-white/5 hover:bg-white/10 hover:border-white/10"
            }`}
          >
            <div
              className={`h-12 sm:h-16 md:h-20 w-full transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-35"
              }`}
            >
              <ImagePlaceholder
                src={slide.thumbnailLogo}
                alt={slide.logoAlt ?? slide.title ?? slide.id}
                aspectRatio=""
                fit="contain"
              />
            </div>
            
          </button>
        ))}
      </div>
    </div>
  );
}
