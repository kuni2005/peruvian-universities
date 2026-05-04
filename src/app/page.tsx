import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <div className="bg-pu-gray">
          <Navbar />

          {/* Hero */}
          <section className="w-full">
            <div className="mx-auto max-w-7xl px-6">
              <div className="min-h-[70svh] md:min-h-[80svh] flex items-end pb-20 md:pb-28">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                  <h1 className="md:col-span-7 font-bebas text-neutral-900 uppercase leading-[0.9] text-6xl md:text-7xl lg:text-8xl">
                    El equipo de debate más destacado del Perú
                  </h1>

                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed">
                      Desde 2004, somos una organización liderada por estudiantes
                      que representa al Perú en las conferencias de debate más
                      prestigiosas del mundo. Formamos líderes capaces de generar
                      impacto real a través del pensamiento crítico, la diplomacia y
                      la acción.
                    </p>
                    <Link
                      href="/about"
                      className="mt-6 inline-block font-condensed text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700 transition-colors"
                    >
                      Únete al equipo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-white">
          {/* About brief */}
          <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                  Qué es Peruvian Universities
                </p>
                <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92] mb-6 text-neutral-900">
                  Una comunidad que transforma talento en liderazgo
                </h2>
                <p className="font-body text-neutral-600 text-base leading-relaxed mb-4">
                  Peruvian Universities es una organización dedicada a potenciar
                  el desarrollo académico y personal de sus miembros mediante el
                  debate y la participación en Model United Nations. Nuestro
                  equipo ha destacado a nivel internacional, convirtiéndose en uno
                  de los más premiados en conferencias como Harvard WorldMUN.
                </p>
                <p className="font-body text-neutral-600 text-base leading-relaxed mb-8">
                  Formamos parte de una red de alumni que hoy lideran iniciativas
                  en distintos sectores: desde organismos internacionales hasta
                  emprendimientos innovadores, todos con un objetivo común:
                  generar cambio.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-neutral-900 text-white font-condensed font-bold uppercase text-sm px-7 py-3 rounded-full hover:bg-pu-dark transition-colors"
                >
                  Conoce más
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <ImagePlaceholder
                  src="/assets/images/home/about-community.jpg"
                  alt="Comunidad Peruvian Universities"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </section>

          {/* MUN Explanation — dark background */}
          <section className="bg-pu-dark">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-cyan mb-4">
                    What is MUN
                  </p>
                  <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92] text-white mb-6">
                    ¿Qué es Model United Nations?
                  </h2>
                  <p className="font-body text-neutral-300 text-base leading-relaxed mb-8">
                    Model United Nations (MUN) es una simulación académica donde
                    los participantes representan a países dentro de comités de las
                    Naciones Unidas, debatiendo problemáticas globales actuales.
                    A través de investigación, análisis y argumentación, los
                    delegados proponen soluciones a desafíos reales, desarrollando
                    una visión crítica del mundo y su funcionamiento.
                  </p>
                  <Link
                    href="/conferences"
                    className="inline-flex items-center border border-white text-white font-condensed font-bold uppercase text-sm px-7 py-3 rounded-full hover:bg-white hover:text-pu-dark transition-colors"
                  >
                    Descubre cómo funciona
                  </Link>
                </div>
                <div className="rounded-2xl overflow-hidden">
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

          {/* Skills / Stats */}
          <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92] text-center mb-16">
              Desarrollamos habilidades para impactar al mundo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden">
                <ImagePlaceholder
                  src="/assets/images/home/skills-training.jpg"
                  alt="Entrenamiento de habilidades"
                  aspectRatio="aspect-[4/3]"
                  className="rounded-2xl"
                />
              </div>
              <div>
                <p className="font-body text-neutral-600 text-base leading-relaxed mb-6">
                  Preparamos a nuestros miembros para destacar en escenarios
                  internacionales mediante entrenamientos intensivos en debate,
                  negociación y análisis político. Nuestro enfoque está en el
                  desarrollo de habilidades clave como comunicación efectiva,
                  pensamiento crítico, liderazgo y trabajo en equipo.
                </p>
                <p className="font-body text-neutral-600 text-base leading-relaxed mb-10">
                  Más allá de la competencia, buscamos formar personas capaces de
                  liderar, influir y generar cambios significativos en la sociedad.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "10", label: "Años formando líderes" },
                    { value: "+200", label: "Delegados formados" },
                    { value: "+650", label: "Premios internacionales" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-bebas text-4xl md:text-5xl text-neutral-900">
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
          <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
            <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Contact
            </p>
            <h2 className="font-bebas uppercase text-4xl md:text-5xl lg:text-6xl leading-[0.92] mb-12 max-w-2xl">
              Sé parte de la próxima generación de líderes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
              {/* Form */}
              <div>
                <p className="font-body text-neutral-500 text-sm mb-8">
                  Si quieres desarrollar tu potencial, representar al Perú y
                  formar parte de una comunidad global, estamos aquí para ayudarte
                  a dar el siguiente paso.
                </p>
                <ContactForm />
              </div>

              {/* Contact details + image */}
              <div className="space-y-8">
                <div className="rounded-2xl overflow-hidden">
                  <ImagePlaceholder
                    src="/assets/images/home/contact.jpg"
                    alt="Equipo Peruvian Universities"
                    aspectRatio="aspect-[4/3]"
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <h3 className="font-condensed font-bold uppercase text-sm tracking-wider mb-4">
                    Contact Details
                  </h3>
                  <div className="space-y-3 text-sm font-body text-neutral-600">
                    <div>
                      <p className="font-semibold text-neutral-900">Address</p>
                      <p>Lima, Perú</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Email</p>
                      <a
                        href="mailto:hello@peruvianuniversities.com"
                        className="text-pu-dark hover:text-pu-cyan transition-colors"
                      >
                        hello@peruvianuniversities.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Phone</p>
                      <a
                        href="tel:+51900000000"
                        className="text-pu-dark hover:text-pu-cyan transition-colors"
                      >
                        +51 900 000 000
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
