import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AccionPeruPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            <h1 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-neutral-900">
              Acción Perú: un ecosistema de proyectos que generan impacto
            </h1>
            <p className="font-body text-neutral-600 text-base leading-relaxed md:pt-4">
              Peruvian Universities es más allá de las competencias de debate.
              Somos una plataforma donde el talento se transforma en iniciativas
              reales: desde conferencias internacionales hasta proyectos sociales
              que generan impacto en el Perú.
            </p>
          </div>

          {/* Hero image */}
          <div className="rounded-3xl overflow-hidden">
            <ImagePlaceholder
              src="/assets/images/accion-peru/hero.jpg"
              alt="Proyectos de impacto Acción Perú"
              aspectRatio="aspect-[16/7]"
              className="rounded-3xl"
            />
          </div>
        </section>

        {/* Mission statement */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            Nuestro propósito
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92]">
              Formamos líderes que pasan a la acción
            </h2>
            <p className="font-body text-neutral-600 text-base leading-relaxed md:pt-2">
              Creemos que el liderazgo no se queda en el discurso. Por eso,
              impulsamos proyectos que permiten a nuestros miembros aplicar sus
              habilidades en contextos reales, combinando pensamiento
              estratégico, organización y compromiso social.
            </p>
          </div>
        </section>

        {/* Project cards — Conferences */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main large card */}
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <ImagePlaceholder
                  src="/assets/images/accion-peru/worldmun.jpg"
                  alt="Harvard WorldMUN 2026"
                  aspectRatio=""
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-body text-neutral-300 text-sm mb-3 leading-relaxed">
                  Participamos en World Model United Nations, una de las
                  conferencias más prestigiosas del mundo. En 2026, nuestro
                  equipo continúa llevando el nombre del Perú a escenarios
                  internacionales, destacándose por su preparación y excelencia.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                    <p className="font-condensed text-xs font-bold uppercase tracking-wider text-white">
                      Logo
                    </p>
                    <p className="font-bebas text-lg text-white">WorldMUN 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "PeruMUN",
                  img: "/assets/images/accion-peru/perumun.jpg",
                  description: "Conferencia de Model United Nations a nivel nacional.",
                },
                {
                  title: "MOCAN",
                  img: "/assets/images/accion-peru/mocan.jpg",
                  description: "Modelo de la Comunidad Andina de Naciones.",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="relative rounded-3xl overflow-hidden group flex-1"
                >
                  <div className="h-full min-h-40">
                    <ImagePlaceholder
                      src={project.img}
                      alt={project.title}
                      aspectRatio=""
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 inline-block">
                      <p className="font-bebas text-base text-white leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ollas Comunes */}
        <section className="bg-neutral-100 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Apoyo directo a comunidades
                </p>
                <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92] mb-6">
                  Ollas Comunes
                </h2>
                <p className="font-body text-neutral-600 text-base leading-relaxed">
                  Trabajamos junto a comunidades locales apoyando ollas comunes,
                  contribuyendo con recursos y organización para atender a
                  familias en situación vulnerable.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImagePlaceholder
                  src="/assets/images/accion-peru/ollas-comunes.jpg"
                  alt="Proyecto Ollas Comunes"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Collab Beneficencia de Lima */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
            Alianzas para un mayor impacto
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92]">
              Collab con la Beneficencia de Lima
            </h2>
            <p className="font-body text-neutral-600 text-base leading-relaxed md:pt-2">
              Colaboramos con la Beneficencia de Lima en iniciativas orientadas
              al bienestar social, ampliando el alcance de nuestras acciones y
              fortaleciendo nuestros compromisos con la comunidad.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-1.jpg"
                alt="Colaboración Beneficencia de Lima"
                aspectRatio="aspect-square"
                className="rounded-2xl"
              />
            </div>
            <div className="bg-pu-dark rounded-2xl p-8 flex flex-col justify-center">
              <p className="font-bebas text-5xl text-white">+10</p>
              <p className="font-body text-neutral-300 text-xs mt-2 leading-snug">
                Proyectos desarrollados en conjunto con la Municipalidad de Lima,
                con impacto social y participación comunitaria.
              </p>
            </div>
            <div className="md:col-span-1 rounded-2xl overflow-hidden">
              <ImagePlaceholder
                src="/assets/images/accion-peru/beneficencia-2.jpg"
                alt="Actividades con la comunidad"
                aspectRatio="aspect-square"
                className="rounded-2xl"
              />
            </div>
            <div className="bg-neutral-100 rounded-2xl p-8 flex flex-col justify-center">
              <p className="font-bebas text-5xl text-neutral-900">95%</p>
              <p className="font-body text-neutral-500 text-xs mt-2 leading-snug">
                De nuestros miembros participan activamente en iniciativas
                sociales, fortaleciendo su compromiso con la comunidad.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
