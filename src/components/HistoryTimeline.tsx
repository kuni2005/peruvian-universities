"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const timelineEvents = [
  {
    year: "2004",
    displayYear: "2004",
    title: "The creation of Círculo de Estudios de las Naciones Unidas (CENU)",
    body: "Se crea el Círculo de Estudios de las Naciones Unidas (CENU), sentando las bases de lo que hoy es Peruvian Universities. Este fue el primer paso hacia la formación de una comunidad enfocada en el debate, el análisis global y el liderazgo estudiantil.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2006",
    displayYear: "2006",
    title: "Fundación de la comunidad",
    body: "Se consolidan los primeros esfuerzos de debate universitario en Lima, marcando el inicio de un proyecto académico que luego crecería a nivel nacional.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2008",
    displayYear: "2008",
    title: "Primera participación en Harvard WorldMUN",
    body: "Peruvian Universities debuta en Harvard WorldMUN, una de las conferencias más prestigiosas del mundo, iniciando una tradición de excelencia internacional.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2010",
    displayYear: "2010",
    title: "Reconocimiento internacional",
    body: "El equipo es reconocido por universidades de talla mundial por su desempeño en debate universitario.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2014",
    displayYear: "2014",
    title: "Líderes del ranking latinoamericano",
    body: "El equipo encabeza los rankings de debate universitario a nivel latinoamericano, consolidando la posición del Perú en la escena global.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2016",
    displayYear: "2016",
    title: "Programa de alumni",
    body: "Se consolida la red de alumni de Peruvian Universities, formada por ex-delegados que lideran iniciativas en organismos internacionales y empresas.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2018",
    displayYear: "2018",
    title: "Décima conferencia internacional",
    body: "Peruvian Universities celebra su décima participación en conferencias internacionales, acumulando cientos de premios y reconocimientos.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2020",
    displayYear: "2020",
    title: "Formación híbrida",
    body: "Se adapta el sistema de entrenamiento a formatos híbridos, ampliando el alcance de la formación académica.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2022",
    displayYear: "2022",
    title: "Subcampeones del mundo",
    body: "El equipo alcanza el podio mundial, posicionándose como subcampeones de debate universitario.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2025",
    displayYear: "2025",
    title: "Nueva generación",
    body: "Una nueva generación de líderes asume la representación internacional con una visión renovada.",
    img: "/assets/images/about/img-year.JPG",
  },
  {
    year: "2026",
    displayYear: "2026",
    title: "Hacia el futuro",
    body: "Peruvian Universities continúa su misión de formar profesionales comprometidos con el progreso colectivo del Perú y el mundo.",
    img: "/assets/images/about/img-year.JPG",
  },
];

const defaultIndex = 0;

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const active = timelineEvents[activeIndex];

  return (
    <div>
      {/* Year tabs */}
      <div>
        <div className="flex items-center gap-4 md:gap-6 border-b border-neutral-200">
          {timelineEvents.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(i)}
              className={[
                "font-condensed text-md font-bold uppercase tracking-wider transition-colors",
                "px-2 md:px-3 mr-4 md:mr-6 pb-4",
                i === activeIndex
                  ? "text-neutral-900 border-b-2 border-neutral-900"
                  : "text-neutral-300 hover:text-neutral-600 border-b-2 border-transparent",
              ].join(" ")}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>

      {/* Active event detail */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:gap-0">
        {/* Large year */}
        <div className="md:col-span-4 md:py-14 md:pr-10">
          <p className="font-bebas text-7xl md:text-8xl lg:text-9xl text-pu-dark leading-none">
            {active.displayYear}
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
          <div className="w-full w-96 h-72 overflow-hidden rounded-xl shadow-sm bg-neutral-100">
            <ImagePlaceholder
              src={active.img ?? `/assets/images/history/${active.year}.jpg`}
              alt={`Peruvian Universities ${active.year}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
