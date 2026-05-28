import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColorStripe from "@/components/ColorStripe";
import ConferencesCarousel from "@/components/ConferencesCarousel";

export default function AccionPeruPage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/accion-peru/hero.jpg"
            alt="Proyectos de impacto Acción Perú"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Navbar variant="transparent" />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-16 md:pb-24">
              <div className="min-h-[60svh] md:min-h-[65svh] flex items-end">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                  <h1 className="md:col-span-7 font-bebas uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl">
                    Acción Perú: un ecosistema de proyectos que generan impacto
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                      Peruvian Universities es más allá de las competencias de
                      debate. Somos una plataforma donde el talento se transforma
                      en iniciativas reales: desde conferencias internacionales
                      hasta proyectos sociales que generan impacto en el Perú.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

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

        {/* Project cards — Conferences carousel */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <ConferencesCarousel />
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
