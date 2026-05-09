import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColorStripe from "@/components/ColorStripe";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/home/hero.jpg"
            alt="Equipo de debate en conferencia"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Navbar variant="transparent" />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-16 md:pb-24">
              <div className="min-h-[60svh] md:min-h-[65svh] flex items-end">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                  <h1 className="md:col-span-7 font-bebas uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl">
                    El equipo de debate más destacado del Perú
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                      Desde 2004, somos una organización liderada por estudiantes
                      que representa al Perú en las conferencias de debate más
                      prestigiosas del mundo. Formamos líderes capaces de generar
                      impacto real a través del pensamiento crítico, la diplomacia
                      y la acción.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* About brief */}
        <section className="relative bg-pu-gray">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative">
            <span
              aria-hidden="true"
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[16rem] font-bebas text-white/70 leading-none"
            >
              PU
            </span>
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-3">
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400">
                  Que es Peruvian Universities
                </p>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95] mb-4 text-neutral-900">
                  Una comunidad que transforma talento en liderazgo
                </h2>
                <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
                  Peruvian Universities es una organización dedicada a potenciar
                  el desarrollo académico y personal de sus miembros mediante el
                  debate y la participación en Model United Nations. Nuestro
                  equipo ha destacado a nivel internacional, convirtiéndose en
                  uno de los más premiados en conferencias como Harvard WorldMUN.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-md hover:brightness-110 transition"
                >
                  Conoce más
                </Link>
              </div>
              <div className="md:col-span-4">
                <ImagePlaceholder
                  src="/assets/images/home/about-community.jpg"
                  alt="Comunidad Peruvian Universities"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MUN Explanation — dark background */}
        <section className="bg-pu-dark">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-cyan mb-4">
                  What is MUN
                </p>
                <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95] text-white mb-6">
                  ¿Qué es Model United Nations?
                </h2>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-8">
                  Model United Nations (MUN) es una simulación académica donde
                  los participantes representan a países dentro de comités de las
                  Naciones Unidas, debatiendo problemáticas globales actuales. A
                  través de investigación, análisis y argumentación, los
                  delegados proponen soluciones a desafíos reales, desarrollando
                  una visión crítica del mundo y su funcionamiento.
                </p>
                <Link
                  href="/conferences"
                  className="inline-flex items-center bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-md hover:brightness-110 transition"
                >
                  Descubre cómo funciona
                </Link>
              </div>
              <div>
                <ImagePlaceholder
                  src="/assets/images/home/mun-conference.jpg"
                  alt="Model United Nations conference"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Skills / Stats */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
            <div>
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                What do we do
              </p>
              <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
                Desarrollamos habilidades para impactar el mundo
              </h2>
            </div>
            <div className="flex-1 border-t border-neutral-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <ImagePlaceholder
                src="/assets/images/home/skills-training.jpg"
                alt="Entrenamiento de delegados"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl"
              />
            </div>
            <div className="md:col-span-7">
              <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
                Preparamos a nuestros miembros para destacar en escenarios
                internacionales mediante entrenamientos intensivos en debate,
                negociación y análisis político.
              </p>
              <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
                Nuestro enfoque está en el desarrollo de habilidades clave como
                comunicación efectiva, pensamiento crítico, liderazgo y trabajo
                en equipo. Participamos en conferencias de alto nivel donde
                nuestros delegados representan al Perú con excelencia.
              </p>
              <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed mb-10">
                Más allá de la competencia, buscamos formar personas capaces de
                liderar, influir y generar cambios significativos en la sociedad.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "+200", label: "Delegados formados" },
                  { value: "10", label: "Años formando líderes" },
                  { value: "+650", label: "Premios internacionales" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-bebas text-4xl md:text-5xl text-pu-cyan">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-neutral-500 mt-1 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
            <div>
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Contact
              </p>
              <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
                Sé parte de la próxima generación de líderes
              </h2>
            </div>
            <div className="flex-1 border-t border-neutral-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5 space-y-8">
              <p className="font-body text-neutral-500 text-sm leading-relaxed">
                Si quieres desarrollar tu potencial, representar al Perú y formar
                parte de una comunidad global, estamos aquí para ayudarte a dar
                el siguiente paso.
              </p>
              <div>
                <h3 className="font-condensed font-bold uppercase text-sm tracking-wider mb-4">
                  Contact details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-body text-neutral-600">
                  <div>
                    <p className="font-semibold text-neutral-900">Address</p>
                    <p>1435 Wellington Road</p>
                    <p>Windsor, Vic 3181</p>
                    <p>Australia</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Email</p>
                    <a
                      href="mailto:hello@stembiotech.com"
                      className="text-pu-dark hover:text-pu-cyan transition-colors"
                    >
                      hello@stembiotech.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Phone</p>
                    <a
                      href="tel:+51928173821"
                      className="text-pu-dark hover:text-pu-cyan transition-colors"
                    >
                      +51 928 173 821
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/51928173821"
                className="inline-flex items-center bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="md:col-span-7">
              <ImagePlaceholder
                src="/assets/images/home/contact.jpg"
                alt="Equipo Peruvian Universities"
                aspectRatio="aspect-[4/5]"
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
