"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const timelineEvents = [
  {
    year: "2004",
    displayYear: "2004",
    title: "Fundación de la comunidad",
    body: "Se consolidan los primeros esfuerzos de debate universitario en Lima, marcando el inicio de un proyecto académico que luego crecería a nivel nacional.",
  },
  {
    year: "2005",
    displayYear: "2005",
    title: "The creation of Círculo de Estudios de las Naciones Unidas (CENU)",
    body: "Se crea el CENU de Estudios de las Naciones Unidas (CENU), sentando las bases de lo que hoy es Peruvian Universities. Este fue el primer paso hacia la formación de una comunidad enfocada en el debate, el análisis global y el liderazgo estudiantil.",
  },
  {
    year: "2008",
    displayYear: "2008",
    title: "Primera participación en Harvard WorldMUN",
    body: "Peruvian Universities debuta en Harvard WorldMUN, una de las conferencias más prestigiosas del mundo, iniciando una tradición de excelencia internacional.",
  },
  {
    year: "2010",
    displayYear: "2010",
    title: "Reconocimiento internacional",
    body: "El equipo es reconocido por universidades de talla mundial por su desempeño en debate universitario.",
  },
  {
    year: "2014",
    displayYear: "2014",
    title: "Líderes del ranking latinoamericano",
    body: "El equipo encabeza los rankings de debate universitario a nivel latinoamericano, consolidando la posición del Perú en la escena global.",
  },
  {
    year: "2016",
    displayYear: "2016",
    title: "Programa de alumni",
    body: "Se consolida la red de alumni de Peruvian Universities, formada por ex-delegados que lideran iniciativas en organismos internacionales y empresas.",
  },
  {
    year: "2018",
    displayYear: "2018",
    title: "Décima conferencia internacional",
    body: "Peruvian Universities celebra su décima participación en conferencias internacionales, acumulando cientos de premios y reconocimientos.",
  },
  {
    year: "2020",
    displayYear: "2020",
    title: "Formación híbrida",
    body: "Se adapta el sistema de entrenamiento a formatos híbridos, ampliando el alcance de la formación académica.",
  },
  {
    year: "2022",
    displayYear: "2022",
    title: "Subcampeones del mundo",
    body: "El equipo alcanza el podio mundial, posicionándose como subcampeones de debate universitario.",
  },
  {
    year: "2025",
    displayYear: "2025",
    title: "Nueva generación",
    body: "Una nueva generación de líderes asume la representación internacional con una visión renovada.",
  },
  {
    year: "2026",
    displayYear: "2026",
    title: "Hacia el futuro",
    body: "Peruvian Universities continúa su misión de formar profesionales comprometidos con el progreso colectivo del Perú y el mundo.",
  },
];

const defaultIndex = Math.max(
  0,
  timelineEvents.findIndex((event) => event.year === "2005")
);

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const active = timelineEvents[activeIndex];

  return (
    <div>
      {/* Year tabs */}
      <div className="relative overflow-x-auto pb-6">
        <div className="absolute left-0 right-0 top-4 h-px bg-neutral-200" />
        <div className="relative flex gap-8 min-w-max px-1">
          {timelineEvents.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(i)}
              className={`relative pt-2 font-condensed text-xs font-bold uppercase tracking-widest transition-colors ${
                i === activeIndex
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {event.year}
              <span
                className={`absolute left-1/2 top-3.5 h-2 w-2 -translate-x-1/2 rounded-full ${
                  i === activeIndex ? "bg-pu-cyan" : "bg-neutral-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Active event detail */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Large year */}
        <div className="md:col-span-3">
          <p className="font-bebas text-7xl md:text-8xl text-pu-dark leading-none">
            {active.displayYear}
          </p>
        </div>

        {/* Title + body */}
        <div className="md:col-span-5 md:border-l md:border-neutral-200 md:pl-6">
          <h3 className="font-bebas uppercase text-2xl md:text-3xl leading-tight text-neutral-900 mb-4">
            {active.title}
          </h3>
          <p className="font-body text-neutral-600 text-sm leading-relaxed">
            {active.body}
          </p>
        </div>

        {/* Image */}
        <div className="md:col-span-4">
          <ImagePlaceholder
            src={`/assets/images/history/${active.year}.jpg`}
            alt={`Peruvian Universities ${active.year}`}
            aspectRatio="aspect-[4/3]"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
