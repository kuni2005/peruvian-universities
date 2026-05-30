"use client";

import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import HistoryTimeline from "@/components/HistoryTimeline";
import TeamCarousel from "@/components/TeamCarousel";
import ColorStripe from "@/components/ColorStripe";
import { useI18n } from "@/i18n/LanguageProvider";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/home/img-home.png"
            alt="Equipo Peruvian Universities en conferencia internacional"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Navbar variant="transparent" />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-16 md:pb-24">
              <div className="min-h-[60svh] md:min-h-[65svh] flex items-end">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                  <h1 className="md:col-span-7 font-bebas uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl">
                    {t.about.heroTitle}
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                      {t.about.heroText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Stats */}
        <section className="relative bg-white overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -left-8 bottom-0 translate-y-1/4 text-[42rem] font-bebas text-gray-800/[0.07] leading-none select-none pointer-events-none"
          >
            PU
          </span>
          <div className="mx-auto max-w-7xl px-6 pt-12 pb-28 md:pt-42 md:pb-48 relative flex items-end justify-center">
            <div className="relative flex flex-row items-center justify-center gap-8 md:gap-12">
              <p className="font-bebas text-[8rem] md:text-[12rem] lg:text-[15rem] text-pu-cyan leading-none shrink-0">
                +10
              </p>
              <div className="max-w-sm">
                <p className="font-bebas uppercase text-neutral-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
                  {t.about.yearsLabel}
                </p>
                <p className="font-body text-neutral-500 text-sm md:text-base leading-relaxed mt-3">
                  {t.about.yearsBody}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community — Mission, Vision, Values */}
        <section className="bg-pu-dark text-white relative overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute right-8 -top-10 font-bebas text-white/5 leading-none select-none pointer-events-none text-[28rem]"
          >
            PU
          </span>
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative">
            <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-cyan/70 mb-4">
              {t.about.essenceLabel}
            </p>
            <h2 className="font-bebas uppercase text-5xl leading-[0.95] mb-10 max-w-4xl">
              {t.about.essenceHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {t.about.cards.map((card) => (
                <div key={card.title} className="py-12 md:py-14 md:px-10 flex flex-col justify-start items-start min-h-80 md:min-h-90 h-full">
                  <h3 className="font-bebas uppercase text-2xl md:text-3xl text-white tracking-wide">
                    {card.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm md:text-[0.95rem] leading-relaxed max-w-md mt-20">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* History Timeline */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <HistoryTimeline />
        </section>

        {/* Board of Directors */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            {t.about.teamLabel}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="font-bebas uppercase text-3xl md:text-4xl leading-[0.95]">
                {t.about.teamHeading}
              </h2>
              <p className="font-body text-neutral-500 text-sm mt-4 max-w-xl leading-relaxed">
                {t.about.teamBody}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={t.common.previous}
                className="h-9 w-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
              >
                ←
              </button>
              <button
                type="button"
                aria-label={t.common.next}
                className="h-9 w-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
              >
                →
              </button>
            </div>
          </div>
          <TeamCarousel />
        </section>
        <ColorStripe />
      </main>
      
    </>
  );
}
