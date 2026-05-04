"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const conferences = {
  WorldMUN: {
    years: [
      {
        year: "2004",
        title: "WorldMUN",
        description:
          "WorldMUN es una de las conferencias de Model United Nations más prestigiosas del mundo. En este espacio, nuestros delegados compiten junto a estudiantes de universidades de élite, desarrollando habilidades de negociación, liderazgo y diplomacia en un entorno multicultural de alto nivel.",
        coaches: [{ name: "Name", role: "CEO" }],
      },
      {
        year: "2006",
        title: "WorldMUN",
        description:
          "Primera gran victoria de Peruvian Universities en WorldMUN. El equipo demostró excelencia académica y preparación de alto nivel, ganando reconocimiento internacional.",
        coaches: [{ name: "Name", role: "Head Coach" }],
      },
      {
        year: "2008",
        title: "WorldMUN",
        description:
          "Consolidamos nuestra posición como referentes del debate latinoamericano, con múltiples premios y distinciones en esta edición.",
        coaches: [{ name: "Name", role: "Academic Director" }],
      },
      {
        year: "2010",
        title: "WorldMUN",
        description:
          "El equipo alcanza nuevos hitos de excelencia, siendo reconocido como delegación destacada por los organizadores de WorldMUN.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2014",
        title: "WorldMUN",
        description:
          "Una de las participaciones más exitosas en la historia del equipo, con delegados premiados en múltiples comités simultáneamente.",
        coaches: [{ name: "Name", role: "Lead Coach" }],
      },
      {
        year: "2016",
        title: "WorldMUN",
        description:
          "Peruvian Universities continúa su racha de éxitos, llevando el nombre del Perú a los más altos estándares del debate internacional.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2018",
        title: "WorldMUN",
        description:
          "Décimo aniversario en WorldMUN. El equipo celebra una trayectoria de excelencia con la participación más numerosa de su historia.",
        coaches: [{ name: "Name", role: "Director" }],
      },
      {
        year: "2020",
        title: "WorldMUN (Virtual)",
        description:
          "Adaptándonos a los desafíos globales, participamos en la primera edición virtual de WorldMUN, demostrando resiliencia y flexibilidad.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2022",
        title: "WorldMUN",
        description:
          "Regreso a la presencialidad con una participación histórica: Peruvian Universities se posiciona como subcampeón mundial.",
        coaches: [{ name: "Name", role: "Head Coach" }],
      },
      {
        year: "2025",
        title: "WorldMUN",
        description:
          "El equipo continúa su legado de excelencia, preparándose para superar sus propios récords en una nueva edición de WorldMUN.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2026",
        title: "WorldMUN",
        description:
          "La próxima generación de líderes está lista. Peruvian Universities continúa representando al Perú con orgullo y excelencia.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
    ],
  },
  HNMUN: {
    years: [
      {
        year: "2006",
        title: "HNMUN",
        description:
          "Harvard National Model United Nations es una de las conferencias más reconocidas de la costa este de Estados Unidos. Peruvian Universities ha participado consistentemente, obteniendo premios y reconocimientos.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2010",
        title: "HNMUN",
        description:
          "Participación destacada en la conferencia HNMUN, con delegados premiados en comités de alto nivel.",
        coaches: [{ name: "Name", role: "Lead Coach" }],
      },
      {
        year: "2015",
        title: "HNMUN",
        description:
          "El equipo consolida su posición en HNMUN con una de sus mejores actuaciones, obteniendo distinciones en múltiples comités.",
        coaches: [{ name: "Name", role: "Director" }],
      },
    ],
  },
  HNMUNLA: {
    years: [
      {
        year: "2012",
        title: "HNMUNLA",
        description:
          "Harvard National Model United Nations Latin America reúne a las mejores delegaciones de la región. Peruvian Universities es uno de los equipos más ganadores de esta conferencia.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2018",
        title: "HNMUNLA",
        description:
          "Participación sobresaliente con múltiples reconocimientos en una de las conferencias más competitivas de Latinoamérica.",
        coaches: [{ name: "Name", role: "Lead Coach" }],
      },
    ],
  },
  LIMUN: {
    years: [
      {
        year: "2008",
        title: "LIMUN",
        description:
          "London International Model United Nations es una de las conferencias más antiguas y respetadas de Europa. Peruvian Universities ha competido con distinción en su histórica sede londinense.",
        coaches: [{ name: "Name", role: "Coach" }],
      },
      {
        year: "2019",
        title: "LIMUN",
        description:
          "Una de las participaciones más memorables en Europa, con delegados reconocidos por su preparación y argumentación.",
        coaches: [{ name: "Name", role: "Director" }],
      },
    ],
  },
};

type ConferenceKey = keyof typeof conferences;
const conferenceKeys = Object.keys(conferences) as ConferenceKey[];

export default function ConferenceTabs() {
  const [activeConference, setActiveConference] =
    useState<ConferenceKey>("WorldMUN");
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const currentConference = conferences[activeConference];
  const currentYear = currentConference.years[activeYearIndex];

  const handleConferenceChange = (key: ConferenceKey) => {
    setActiveConference(key);
    setActiveYearIndex(0);
  };

  return (
    <div>
      {/* Conference type tabs */}
      <div className="overflow-x-auto">
        <div className="flex gap-0 border-b border-neutral-200 min-w-max">
          {conferenceKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleConferenceChange(key)}
              className={`px-6 py-3 font-condensed text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                activeConference === key
                  ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Year selector */}
      <div className="mt-6 overflow-x-auto">
        <div className="flex gap-0 border-b border-neutral-100 min-w-max">
          {currentConference.years.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActiveYearIndex(i)}
              className={`px-5 py-2 font-condensed text-sm font-bold transition-colors whitespace-nowrap ${
                i === activeYearIndex
                  ? "text-neutral-900 border-b-2 border-pu-cyan -mb-px"
                  : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>

      {/* Conference detail */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Year number */}
        <div>
          <p className="font-bebas text-8xl md:text-9xl text-neutral-900 leading-none">
            {currentYear.year}
          </p>
        </div>

        {/* Title + description */}
        <div>
          <h3 className="font-bebas uppercase text-2xl md:text-3xl leading-tight text-neutral-900 mb-4">
            {currentYear.title}
          </h3>
          <p className="font-body text-neutral-600 text-sm leading-relaxed">
            {currentYear.description}
          </p>
        </div>

        {/* Coaches */}
        <div>
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            Coaches
          </p>
          {currentYear.coaches.map((coach) => (
            <div
              key={coach.name}
              className="rounded-2xl overflow-hidden border border-neutral-100"
            >
              <ImagePlaceholder
                src={`/assets/images/team/${coach.name.toLowerCase().replace(/ /g, "-")}.jpg`}
                alt={coach.name}
                aspectRatio="aspect-[4/3]"
                className="rounded-t-2xl"
              />
              <div className="p-4">
                <p className="font-condensed text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {coach.role}
                </p>
                <p className="font-bebas text-xl text-neutral-900 mt-0.5">
                  {coach.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
