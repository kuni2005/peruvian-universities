"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColorStripe from "@/components/ColorStripe";

export default function AccionPeruPage() {
  const projects = [
    {
      title: "PeruMUN",
      subtitle: "Logo",
      img: "/assets/images/accion-peru/perumun-logo.svg",
    },
    {
      title: "MOCAN",
      subtitle: "Logo",
      img: "/assets/images/accion-peru/mocan-logo.svg",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(projects.length - 1);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((s) => (s - 1 + projects.length) % projects.length);
    }, 3200);
    return () => clearInterval(t);
  }, [projects.length]);

  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/brand/img-logo.png"
            alt="Proyectos de impacto Acción Perú"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Navbar variant="transparent" darkOnTransparent />

        </section>

        {/* Mission statement */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            Nuestra propuesta
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <h2 className="md:col-span-6 font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
              Formamos líderes que pasan a la acción
            </h2>
            <p className="md:col-span-6 font-body text-neutral-600 text-sm md:text-base leading-relaxed md:pt-2">
              Creemos que el liderazgo no se queda en el discurso. Por eso,
              impulsamos proyectos que permiten a nuestros miembros aplicar sus
              habilidades en contextos reales, combinando pensamiento
              estratégico, organización y compromiso social.
            </p>
          </div>
          <div className="mt-10 border-t border-neutral-200" />
        </section>

        {/* Project cards — Conferences */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch overflow-visible">
            {/* Main large card */}
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group flex md:min-h-105 shadow-lg z-10">
              <div className="w-full h-full">
                <ImagePlaceholder
                  src="/assets/images/accion-peru/worldmun.jpg"
                  alt="Harvard WorldMUN 2026"
                  aspectRatio=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 inline-block mb-4">
                      <p className="font-condensed text-[10px] font-bold uppercase tracking-wider text-white/80">
                        Harvard World Model United Nations
                      </p>
                      <p className="font-bebas text-2xl text-white">
                        Lima 2026
                      </p>
                    </div>
                    <p className="font-body text-neutral-200 text-sm leading-relaxed max-w-md">
                      Participamos en World Model United Nations, una de las
                      conferencias más prestigiosas del mundo. En 2026, nuestro
                      equipo continúa llevando el nombre del Perú a escenarios
                      internacionales, destacándose por su preparación y
                      excelencia.
                    </p>
                  </div>
                  <span className="h-10 w-10 rounded-full border border-white/50 flex items-center justify-center text-white text-lg">
                    ↗
                  </span>
                </div>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="md:col-span-4 relative md:pl-6 md:flex md:items-center">
              <div className="relative w-full h-full md:h-105">
                {projects.map((project, i) => {
                  const isFront = i === activeIndex;
                  const stackOffset = (projects.length - 1 - i) * 20;
                  const transform = `translateY(calc(-50% + ${stackOffset}px)) scale(${isFront ? 1 : 0.96})`;
                  const style: React.CSSProperties = {
                    right: `${stackOffset * 1.25}px`,
                    top: "50%",
                    transform,
                    zIndex: isFront ? 50 : 20 + i,
                    transition: "transform 550ms cubic-bezier(.2,.9,.2,1), box-shadow 350ms",
                  };

                  return (
                    <div
                      key={project.title}
                      style={style}
                      className={`absolute md:w-2/3 w-full md:h-105 h-60 rounded-3xl overflow-hidden group bg-pu-dark shadow-lg flex items-center p-6 ${
                        isFront ? "ring-4 ring-pu-cyan/90 shadow-2xl" : "ring-0"
                      }`}
                    >
                      <div className="w-full h-full flex items-center">
                        <div className="shrink-0">
                          <ImagePlaceholder
                            src={project.img}
                            alt={project.title}
                            aspectRatio=""
                            className="w-24 h-auto object-contain"
                          />
                        </div>
                        <div className="ml-6 text-white">
                          <p className="font-bebas text-lg">LOGO</p>
                          <p className="font-body text-sm text-white/70">{project.title}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Ollas Comunes */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/accion-peru/ollas-comunes.jpg"
            alt="Proyecto Ollas Comunes"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="max-w-lg">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                Apoyo directo a comunidades
              </p>
              <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92] mb-4">
                Ollas Comunes
              </h2>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                Trabajamos junto a comunidades locales apoyando ollas comunes,
                contribuyendo con recursos y organización para atender a familias
                en situación vulnerable.
              </p>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Collab Beneficencia de Lima */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            Alianzas para un mayor impacto
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
            <h2 className="md:col-span-6 font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
              Collab con la Beneficencia de Lima
            </h2>
            <p className="md:col-span-6 font-body text-neutral-600 text-sm md:text-base leading-relaxed md:pt-2">
              Colaboramos con la Beneficencia de Lima en iniciativas orientadas
              al bienestar social, ampliando el alcance de nuestras acciones y
              fortaleciendo nuestros compromisos con la comunidad.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-1.jpg"
                alt="Colaboración Beneficencia de Lima"
                aspectRatio="aspect-[3/2]"
                className="rounded-2xl"
              />
            </div>
            <div className="bg-pu-dark rounded-2xl p-8 flex flex-col justify-between">
              <p className="font-bebas text-5xl text-white">+10</p>
              <p className="font-body text-white/70 text-xs mt-2 leading-snug">
                Proyectos desarrollados en conjunto con la Municipalidad de Lima,
                enfocados en impacto social y participación comunitaria.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-2.jpg"
                alt="Actividades con la comunidad"
                aspectRatio="aspect-square"
                className="rounded-2xl"
              />
            </div>
            <div className="col-span-2 bg-pu-cyan rounded-2xl p-8 flex flex-col justify-between text-white">
              <p className="font-bebas text-5xl text-white">95%</p>
              <p className="font-body text-white/90 text-xs mt-2 leading-snug">
                De nuestros miembros participan activamente en iniciativas
                sociales, fortaleciendo su compromiso con la comunidad.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-3.jpg"
                alt="Actividades comunitarias"
                aspectRatio="aspect-square"
                className="rounded-2xl"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-4.jpg"
                alt="Voluntariado"
                aspectRatio="aspect-square"
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>
        <ColorStripe />
      </main>
      <Footer />
    </>
  );
}
