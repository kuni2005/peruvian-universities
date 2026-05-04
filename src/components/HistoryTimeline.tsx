"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const timelineEvents = [
  {
    year: "2004",
    displayYear: "2004",
    title: "Fundación del CENU",
    body: "Un grupo de estudiantes de la Universidad de Lima apertura el Círculo de Estudios de las Naciones Unidas (CENU), sembrando las bases de lo que hoy es Peruvian Universities.",
  },
  {
    year: "2006",
    displayYear: "2006",
    title: "Nace la AENU y Peruvian Universities",
    body: "El CENU se desvincula de la Universidad de Lima para fundar la Asociación de Estudios de las Naciones Unidas (AENU). Su equipo selecto de delegados compite internacionalmente como Peruvian Universities.",
  },
  {
    year: "2008",
    displayYear: "2008",
    title: "Primera participación en Harvard WorldMUN",
    body: "Peruvian Universities debuta en Harvard WorldMUN, una de las conferencias más prestigiosas del mundo, marcando el inicio de una tradición de excelencia internacional.",
  },
  {
    year: "2010",
    displayYear: "2010",
    title: "Reconocimiento internacional",
    body: "El equipo es reconocido por la Universidad de Harvard como uno de los mejores equipos de debate del mundo, consolidando la posición de Perú en la escena global.",
  },
  {
    year: "2012",
    displayYear: "2012",
    title: "Expansión y crecimiento",
    body: "Peruvian Universities expande su programa de entrenamiento, incorporando nuevas metodologías de preparación académica y liderazgo para sus delegados.",
  },
  {
    year: "2014",
    displayYear: "2014",
    title: "Líderes del ranking latinoamericano",
    body: "El equipo encabeza los rankings de debate universitario a nivel latinoamericano, siendo reconocido como el mejor equipo de la región consecutivamente.",
  },
  {
    year: "2016",
    displayYear: "2016",
    title: "Programa de alumni",
    body: "Se consolida la red de alumni de Peruvian Universities, formada por ex-delegados que lideran iniciativas en organismos internacionales, empresas y organizaciones sociales.",
  },
  {
    year: "2018",
    displayYear: "2018",
    title: "Décima conferencia internacional",
    body: "Peruvian Universities celebra su décima participación en conferencias internacionales, acumulando cientos de premios y reconocimientos a nivel mundial.",
  },
  {
    year: "2022",
    displayYear: "2022",
    title: "Subcampeones del mundo",
    body: "El equipo alcanza el podio mundial, posicionándose como subcampeones de debate universitario, el mayor logro en la historia de la organización.",
  },
  {
    year: "2024",
    displayYear: "2024",
    title: "20 años de historia",
    body: "Peruvian Universities celebra sus 20 años de fundación, consolidándose como el mejor equipo peruano de debate universitario a nivel histórico y competitivo.",
  },
  {
    year: "2026",
    displayYear: "2026",
    title: "Hacia el futuro",
    body: "Con una nueva generación de líderes, Peruvian Universities continúa su misión de formar profesionales comprometidos con el progreso colectivo del Perú y el mundo.",
  },
];

export default function HistoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(1); // Default: 2006 (CENU founding)
  const active = timelineEvents[activeIndex];

  return (
    <div>
      {/* Year tabs */}
      <div className="overflow-x-auto">
        <div className="flex gap-0 border-b border-neutral-200 min-w-max">
          {timelineEvents.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-3 font-condensed text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                i === activeIndex
                  ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>

      {/* Active event detail */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Large year */}
        <div>
          <p className="font-bebas text-8xl md:text-9xl text-neutral-900 leading-none">
            {active.displayYear}
          </p>
        </div>

        {/* Title + body */}
        <div>
          <h3 className="font-bebas uppercase text-2xl md:text-3xl leading-tight text-neutral-900 mb-4">
            {active.title}
          </h3>
          <p className="font-body text-neutral-600 text-sm leading-relaxed">
            {active.body}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
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
