"use client";
import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const slides = [
  {
    id: "worldmun",
    img: "/assets/images/accion-peru/worldmun.jpg",
    logo: "/assets/images/accion-peru/worldmun-logo.svg",
    logoAlt: "Harvard World Model United Nations",
    label: "Harvard World Model United Nations",
    title: "Lima 2026",
    description:
      "Participamos en World Model United Nations, una de las conferencias más prestigiosas del mundo. En 2026, nuestro equipo continúa llevando el nombre del Perú a escenarios internacionales, destacando por su preparación y excelencia.",
    thumbnailLabel: "Logo\nWorldMUN 2026",
    thumbnailLogo: "/assets/images/accion-peru/worldmun-logo.svg",
  },
  {
    id: "perumun",
    img: "/assets/images/accion-peru/perumun.jpg",
    logo: "/assets/images/accion-peru/perumun-logo.svg",
    logoAlt: "PeruMUN",
    label: "PeruMUN",
    title: "Conferencia Nacional",
    description:
      "Organizamos PeruMUN, nuestra propia conferencia nacional de Modelo de Naciones Unidas, formando a la próxima generación de líderes y diplomáticos peruanos.",
    thumbnailLabel: "Logo\nPeruMUN",
    thumbnailLogo: "/assets/images/accion-peru/perumun-logo.svg",
  },
  {
    id: "mocan",
    img: "/assets/images/accion-peru/mocan.jpg",
    logo: "/assets/images/accion-peru/mocan-logo.svg",
    logoAlt: "MOCAN",
    label: "MOCAN",
    title: "Modelo de Naciones Unidas",
    description:
      "Participamos en MOCAN, reforzando nuestras habilidades de debate y liderazgo en el ámbito del Modelo de Naciones Unidas a nivel nacional.",
    thumbnailLabel: "Logo\nMOCAN",
    thumbnailLogo: "/assets/images/accion-peru/mocan-logo.svg",
  },
];

export default function ConferencesCarousel() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <div className="flex rounded-3xl overflow-hidden h-[460px] md:h-[520px] lg:h-[580px]">
      {/* Main slide */}
      <div className="relative flex-1 min-w-0">
        {/* Background image */}
        <ImagePlaceholder
          src={current.img}
          alt={current.label}
          aspectRatio=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-neutral-900/40" />

        {/* Conference logo — top center */}
        <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none">
          <div className="h-20 w-56">
            <ImagePlaceholder
              src={current.logo}
              alt={current.logoAlt}
              aspectRatio=""
              className="drop-shadow-lg"
            />
          </div>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between gap-6">
          <p className="font-body text-neutral-200 text-sm leading-relaxed max-w-sm">
            {current.description}
          </p>
          <span className="h-10 w-10 shrink-0 rounded-full border border-white/50 flex items-center justify-center text-white text-xl">
            ↗
          </span>
        </div>
      </div>

      {/* Side panel — thumbnail navigation */}
      <div className="bg-pu-dark w-40 md:w-48 lg:w-56 shrink-0 flex flex-col gap-3 p-3 md:p-4">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-2xl flex flex-col items-center justify-center gap-2 px-3 py-4 transition-all duration-300 border cursor-pointer ${
              active === i
                ? "border-white/25 bg-white/10"
                : "border-transparent bg-white/5 hover:bg-white/10 hover:border-white/10"
            }`}
          >
            <div
              className={`h-14 w-full transition-opacity duration-300 ${
                active === i ? "opacity-100" : "opacity-35"
              }`}
            >
              <ImagePlaceholder
                src={slide.thumbnailLogo}
                alt={slide.logoAlt}
                aspectRatio=""
              />
            </div>
            <p
              className={`font-condensed text-[9px] uppercase tracking-wider text-center whitespace-pre-line leading-snug transition-colors duration-300 ${
                active === i ? "text-white/55" : "text-white/25"
              }`}
            >
              {slide.thumbnailLabel}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
