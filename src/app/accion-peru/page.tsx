"use client";

import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColorStripe from "@/components/ColorStripe";
import ConferencesCarousel from "@/components/ConferencesCarousel";
import { useI18n } from "@/i18n/LanguageProvider";

export default function AccionPeruPage() {
  const { t } = useI18n();
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative">
          <Navbar variant="solid" />
        </section>
        {/* Mission statement */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            {t.accionPeru.proposalLabel}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <h2 className="md:col-span-6 font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
              {t.accionPeru.proposalHeading}
            </h2>
            <p className="md:col-span-6 font-body text-neutral-600 text-sm md:text-base leading-relaxed md:pt-2">
              {t.accionPeru.proposalBody}
            </p>
          </div>
          <div className="mt-10 border-t border-neutral-200" />
        </section>

        {/* Project cards — Conferences carousel */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <ConferencesCarousel />
        </section>

        {/* Ollas Comunes */}
        <section className="relative text-white min-h-112">
          <ImagePlaceholder
            src="/assets/images/accion/img-ollas.png"
            alt="Proyecto Ollas Comunes"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-44">
            <div className="max-w-lg">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                {t.accionPeru.ollasLabel}
              </p>
              <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92] mb-4">
                {t.accionPeru.ollasHeading}
              </h2>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                {t.accionPeru.ollasBody}
              </p>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Collab Beneficencia de Lima */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            {t.accionPeru.partnersLabel}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
            <h2 className="md:col-span-6 font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
              {t.accionPeru.partnersHeading}
            </h2>
            <p className="md:col-span-6 font-body text-neutral-600 text-sm md:text-base leading-relaxed md:pt-2">
              {t.accionPeru.partnersBody}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion/img-municipalidad.png"
                alt="Colaboración Beneficencia de Lima"
                aspectRatio="aspect-[3/2]"
                className="rounded-2xl"
              />
            </div>
            <div className="bg-pu-dark rounded-2xl p-8 flex flex-col justify-between min-h-56">
              <p className="font-bebas text-5xl text-white">+10</p>
              <p className="font-body text-white/70 text-xs mt-2 leading-snug">
                {t.accionPeru.statProjects}
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between min-h-56 shadow-sm">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                {t.accionPeru.statActivitiesLabel}
              </p>
              <p className="font-bebas text-5xl text-pu-cyan leading-none mb-3">
                18
              </p>
              <p className="font-body text-neutral-600 text-xs leading-snug">
                {t.accionPeru.statActivitiesBody}
              </p>
            </div>
            <div className="col-span-2 bg-pu-cyan rounded-2xl p-8 flex flex-col justify-between text-white min-h-56">
              <p className="font-bebas text-5xl text-white">95%</p>
              <p className="font-body text-white/90 text-xs mt-2 leading-snug">
                {t.accionPeru.statMembers}
              </p>
            </div>
            <div className="rounded-2xl bg-pu-dark p-8 flex flex-col justify-between min-h-56 shadow-sm text-white">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                {t.accionPeru.statVolunteeringLabel}
              </p>
              <p className="font-bebas text-5xl text-white leading-none mb-3">
                36
              </p>
              <p className="font-body text-white/75 text-xs leading-snug">
                {t.accionPeru.statVolunteeringBody}
              </p>
            </div>
            <div className="rounded-2xl border border-pu-cyan/25 bg-pu-cyan/10 p-8 flex flex-col justify-between min-h-56 shadow-sm">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-dark mb-4">
                {t.accionPeru.statReachLabel}
              </p>
              <p className="font-bebas text-5xl text-pu-dark leading-none mb-3">
                2026
              </p>
              <p className="font-body text-neutral-700 text-xs leading-snug">
                {t.accionPeru.statReachBody}
              </p>
            </div>
          </div>
        </section>
        <ColorStripe />
      </main>
    </>
  );
}
