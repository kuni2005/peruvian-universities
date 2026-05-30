"use client";

import { useState, useEffect, useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Structural data only (proper names: years, conference titles, coach names).
// The localized `description` and coach `role` text live in the i18n
// dictionary at `conferences.data[<key>][<index>]`, matched by order.
type ConferenceYear = {
  year: string;
  title: string;
  coachNames: string[];
};

type ConferenceData = {
  years: ConferenceYear[];
};

const conferenceMeta = {
  WorldMUN: {
    years: [
      { year: "2004", title: "WorldMUN", coachNames: ["Sandro Rodríguez"] },
      { year: "2006", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2008", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2010", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2014", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2016", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2018", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2020", title: "WorldMUN (Virtual)", coachNames: ["Name"] },
      { year: "2022", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2025", title: "WorldMUN", coachNames: ["Name"] },
      { year: "2026", title: "WorldMUN", coachNames: ["Name"] },
    ],
  },
  HNMUN: {
    years: [
      { year: "2006", title: "HNMUN", coachNames: ["Name"] },
      { year: "2010", title: "HNMUN", coachNames: ["Name"] },
      { year: "2015", title: "HNMUN", coachNames: ["Name"] },
    ],
  },
  HNMUNLA: {
    years: [
      { year: "2012", title: "HNMUNLA", coachNames: ["Name"] },
      { year: "2018", title: "HNMUNLA", coachNames: ["Name"] },
    ],
  },
  LIMUN: {
    years: [
      { year: "2008", title: "LIMUN", coachNames: ["Name"] },
      { year: "2019", title: "LIMUN", coachNames: ["Name"] },
    ],
  },
} satisfies Record<string, ConferenceData>;

type ConferenceKey = keyof typeof conferenceMeta;
const conferenceKeys = Object.keys(conferenceMeta) as ConferenceKey[];

export default function ConferenceTabs() {
  const { t } = useI18n();
  const [activeConference, setActiveConference] =
    useState<ConferenceKey>("WorldMUN");
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  // Tracks last-applied conference so the scroll listener (mounted once) avoids stale closures
  const trackedConferenceRef = useRef<ConferenceKey>("WorldMUN");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const conference = conferenceMeta[activeConference];
  const currentYear = conference.years[activeYearIndex];
  const currentText = t.conferences.data[activeConference][activeYearIndex];
  const currentCoaches = currentYear.coachNames.map((name, i) => ({
    name,
    role: currentText.roles[i],
  }));

  function switchTo(key: ConferenceKey) {
    if (key === trackedConferenceRef.current) return;
    trackedConferenceRef.current = key;
    if (timerRef.current) clearTimeout(timerRef.current);
    setContentVisible(false);
    timerRef.current = setTimeout(() => {
      setActiveConference(key);
      setActiveYearIndex(0);
      setContentVisible(true);
    }, 220);
  }

  useEffect(() => {
    const keys = conferenceKeys;
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, Math.min(scrollable, -top));
      const progress = scrolled / scrollable;
      const idx = Math.min(keys.length - 1, Math.floor(progress * keys.length));
      switchTo(keys[idx]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  // switchTo uses only refs + stable setState fns — safe with empty deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${conferenceKeys.length} * 100svh)` }}
    >
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100svh" }}
      >
        <div className="h-full flex flex-col pt-12 pb-8 md:pt-16 md:pb-12">

          {/* Conference type tabs — driven by scroll, also clickable */}
          <div className="overflow-x-auto shrink-0">
            <div className="flex gap-8 border-b border-neutral-200 min-w-max">
              {conferenceKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => switchTo(key)}
                  className={`pb-3 font-condensed text-sm font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                    activeConference === key
                      ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                      : "text-neutral-300 hover:text-neutral-600"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Year selector — click only, never driven by scroll */}
          <div className="mt-5 overflow-x-auto shrink-0">
            <div className="flex gap-10 border-b border-neutral-200 min-w-max">
              {conference.years.map((event, i) => (
                <button
                  key={event.year}
                  onClick={() => setActiveYearIndex(i)}
                  className={`pb-3 font-condensed text-sm font-bold tracking-widest transition-colors whitespace-nowrap ${
                    i === activeYearIndex
                      ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                      : "text-neutral-300 hover:text-neutral-500"
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>

          {/* Conference detail — 2-column editorial layout, fades when conference changes */}
          <div
            className={`mt-8 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[3fr_2fr] overflow-hidden transition-all ease-out ${
              contentVisible
                ? "opacity-100 translate-y-0 duration-220"
                : "opacity-0 translate-y-4 duration-120"
            }`}
          >
            {/* Left: giant year at top, title + description pinned to bottom */}
            <div className="lg:pr-14 lg:border-r lg:border-neutral-200 flex flex-col gap-6 lg:gap-0 lg:justify-between overflow-hidden">
              <p className="font-bebas mt-10 text-[9rem] sm:text-[11rem] md:text-[13rem] lg:text-[15rem] text-pu-dark leading-[0.88] -ml-1">
                {currentYear.year}
              </p>
              <div className="flex flex-col gap-4 pb-2">
                <h3 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-tight text-neutral-900">
                  {currentYear.title}
                </h3>
                <p className="font-body text-neutral-500 text-sm md:text-base leading-relaxed max-w-xl">
                  {currentText.description}
                </p>
              </div>
            </div>

            {/* Right: coach card fills the full column height (desktop only) */}
            <div className="hidden lg:flex flex-col pl-14 gap-4 min-h-0">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-500 shrink-0">
                {t.conferences.coachesLabel}
              </p>
              <div className="flex-1 min-h-0 flex flex-col gap-4">
                {currentCoaches.map((coach) => {
                  const coachImage = "/assets/images/about/img-team-1.png";

                  return (
                    <div
                      key={coach.name}
                      className="flex-1 relative rounded-2xl overflow-hidden bg-neutral-100 min-h-0"
                    >
                      <ImagePlaceholder
                        src={coachImage}
                        alt={coach.name}
                        aspectRatio=""
                        className="absolute inset-0 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-5 left-5">
                        <p className="font-condensed text-[10px] font-bold uppercase tracking-widest text-white/80">
                          {coach.role}
                        </p>
                        <p className="font-bebas text-3xl text-white leading-none">
                          {coach.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile-only coaches (aspect-ratio based, below info) */}
            <div className="flex lg:hidden flex-col gap-3 mt-6">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-500">
                {t.conferences.coachesLabel}
              </p>
              {currentCoaches.map((coach) => {
                const coachImage = "/assets/images/about/img-team-1.png";

                return (
                  <div
                    key={`mob-${coach.name}`}
                    className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-3/2"
                  >
                    <ImagePlaceholder
                      src={coachImage}
                      alt={coach.name}
                      aspectRatio=""
                      className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-condensed text-[10px] font-bold uppercase tracking-widest text-white/80">
                        {coach.role}
                      </p>
                      <p className="font-bebas text-2xl text-white leading-none">
                        {coach.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
