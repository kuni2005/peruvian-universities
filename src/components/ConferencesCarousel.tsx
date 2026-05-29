"use client";
import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

interface Slide {
  id: string;
  img: string;
  description: string;
  thumbnailLogo?: string;
  logo?: string;
  logoAlt?: string;
  label?: string;
  title?: string;
}

const slides: Slide[] = [
  {
    id: "worldmun",
    img: "/assets/images/accion/img-harvard.png",
    description:
      "Participamos en World Model United Nations, una de las conferencias más prestigiosas del mundo. En 2026, nuestro equipo continúa llevando el nombre del Perú a escenarios internacionales, destacando por su preparación y excelencia.",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
  {
    id: "perumun",
    img: "/assets/images/accion/img-harvard.png",
    description:
      "Organizamos PeruMUN, nuestra propia conferencia nacional de Modelo de Naciones Unidas, formando a la próxima generación de líderes y diplomáticos peruanos.",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
  {
    id: "mocan",
    img: "/assets/images/accion/img-harvard.png",
    description:
      "Participamos en MOCAN, reforzando nuestras habilidades de debate y liderazgo en el ámbito del Modelo de Naciones Unidas a nivel nacional.",
    thumbnailLogo: "/assets/icons/icon-peru-mun.svg",
  },
];

export default function ConferencesCarousel() {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <div className="flex rounded-3xl overflow-hidden h-140 md:h-160 lg:h-180">
      {/* Main slide */}
      <div className="relative flex-1 min-w-0">
        {/* Background image */}
        <ImagePlaceholder
          src={current.img}
          alt={current.title ?? current.id}
          aspectRatio=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-neutral-900/40" />

        {/* (logo removed) */}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-10 flex items-end justify-between gap-6">
          <p className="font-body text-neutral-200 text-sm leading-relaxed max-w-sm">
            {current.description}
          </p>
          <span className="h-10 w-10 shrink-0 rounded-full border border-white/50 flex items-center justify-center text-white text-xl">
            ↗
          </span>
        </div>
      </div>

      {/* Side panel — thumbnail navigation */}
      <div className="bg-pu-dark w-56 md:w-64 lg:w-72 shrink-0 flex flex-col gap-4 p-4 md:p-5">
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
              className={`h-20 w-full transition-opacity duration-300 ${
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
