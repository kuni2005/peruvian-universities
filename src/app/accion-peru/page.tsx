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
        <section className="relative">
          <Navbar variant="solid" />
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
                src="/assets/images/accion/img-municipalidad.png"
                alt="Colaboración Beneficencia de Lima"
                aspectRatio="aspect-[3/2]"
                className="rounded-2xl"
              />
            </div>
            <div className="bg-pu-dark rounded-2xl p-8 flex flex-col justify-between min-h-56">
              <p className="font-bebas text-5xl text-white">+10</p>
              <p className="font-body text-white/70 text-xs mt-2 leading-snug">
                Proyectos desarrollados en conjunto con la Municipalidad de Lima,
                enfocados en impacto social y participación comunitaria.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between min-h-56 shadow-sm">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                Actividades comunitarias
              </p>
              <p className="font-bebas text-5xl text-pu-cyan leading-none mb-3">
                18
              </p>
              <p className="font-body text-neutral-600 text-xs leading-snug">
                Jornadas de apoyo, visitas y acciones solidarias en barrios y
                zonas vulnerables de Lima Metropolitana.
              </p>
            </div>
            <div className="col-span-2 bg-pu-cyan rounded-2xl p-8 flex flex-col justify-between text-white min-h-56">
              <p className="font-bebas text-5xl text-white">95%</p>
              <p className="font-body text-white/90 text-xs mt-2 leading-snug">
                De nuestros miembros participan activamente en iniciativas
                sociales, fortaleciendo su compromiso con la comunidad.
              </p>
            </div>
            <div className="rounded-2xl bg-pu-dark p-8 flex flex-col justify-between min-h-56 shadow-sm text-white">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                Voluntariado
              </p>
              <p className="font-bebas text-5xl text-white leading-none mb-3">
                36
              </p>
              <p className="font-body text-white/75 text-xs leading-snug">
                Voluntarios activos que participan en campañas, coordinación y
                seguimiento de cada intervención social.
              </p>
            </div>
            <div className="rounded-2xl border border-pu-cyan/25 bg-pu-cyan/10 p-8 flex flex-col justify-between min-h-56 shadow-sm">
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-dark mb-4">
                Alcance 2026
              </p>
              <p className="font-bebas text-5xl text-pu-dark leading-none mb-3">
                2026
              </p>
              <p className="font-body text-neutral-700 text-xs leading-snug">
                Primer año con una agenda ampliada de acciones comunitarias,
                alianzas y apoyo directo en la capital.
              </p>
            </div>
          </div>
        </section>
        <ColorStripe />
      </main>
    </>
  );
}
