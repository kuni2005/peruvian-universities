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
            src="/assets/images/home/img-home.png"
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
        <section className="relative bg-pu-gray overflow-hidden">
          <span
            aria-hidden="true"
            className="hidden md:block absolute -bottom-28 -left-6 font-bebas text-gray-300 opacity-15 leading-none select-none pointer-events-none text-[36rem]"
          >
            PU
          </span>
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-0">
              {/* Col 1: label */}
              <div className="hidden md:block md:col-span-2 pr-8 pt-1">
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-500 underline decoration-neutral-500">
                  Que es Peruvian Universities
                </p>
              </div>
              {/* Col 2: contenido con borde izquierdo */}
              <div className="md:col-span-6 md:border-l md:border-neutral-300 md:pl-12 flex flex-col justify-center gap-y-6">
                <h2 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-neutral-900">
                  Una comunidad que transforma talento en liderazgo
                </h2>
                <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed max-w-lg">
                  Peruvian Universities es una organización dedicada a potenciar
                  el desarrollo académico y personal de sus miembros mediante el
                  debate y la participación en Model United Nations. Nuestro
                  equipo ha destacado a nivel internacional, convirtiéndose en
                  uno de los más premiados en conferencias como Harvard WorldMUN.
                </p>
                <div>
                  <Link
                    href="/about"
                    className="inline-flex items-center bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-md hover:brightness-110 transition"
                  >
                    Conoce más
                  </Link>
                </div>
              </div>
              {/* Col 3: foto */}
              <div className="md:col-span-4 md:pl-10 mt-10 md:mt-0">
                <ImagePlaceholder
                  src="/assets/images/home/img-home-2.png"
                  alt="Comunidad Peruvian Universities"
                  aspectRatio="aspect-[3/4]"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* MUN Explanation — dark background */}
        <section className="bg-pu-dark">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <h2 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-12">
              ¿Qué es Model United Nations?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              {/* Left col (7/12): descripción + bullets + testimonio */}
              <div className="md:col-span-7 flex flex-col gap-y-6">
                {/* Descripción */}
                <div className="border-t border-white/20 pt-5">
                  <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                    Model United Nations (MUN) es una simulación académica donde
                    los participantes representan a países dentro de comités de las
                    Naciones Unidas, debatiendo problemáticas globales actuales.
                  </p>
                </div>
                {/* Bullets */}
                <ul className="flex flex-col gap-y-3 border-t border-white/20 pt-5">
                  {[
                    "Desarrolla liderazgo internacional",
                    "Mejora tu oratoria y negociación",
                    "Debate problemáticas globales reales",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-white/80 text-sm md:text-base">
                      <span className="w-2.5 h-2.5 rounded-full bg-pu-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {/* Testimonio */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-2">
                  <span className="font-bebas text-pu-cyan text-[5rem] leading-none block">"</span>
                  <div className="border-t border-white/20 pt-5 mt-2">
                    <p className="font-body text-white/70 text-sm leading-relaxed">
                      I have always felt that the benefit that being part of PU has
                      given me is a debt that I will not be able to pay. By being
                      part of the team, debating and giving your best, as well as
                      taking on new challenges within the team, you hope to give new
                      members the same experience you have had, or even a better one.
                    </p>
                  </div>
                  <div className="border-t border-white/20 mt-6 pt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/20 shrink-0" />
                      <div>
                        <p className="font-condensed font-bold text-white text-xs uppercase tracking-wider">
                          Miranda Paz
                        </p>
                        <p className="font-body text-white/50 text-xs">Sophomore Delegate</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-white/50">
                      <button aria-label="Anterior" className="hover:text-white transition text-xl">←</button>
                      <button aria-label="Siguiente" className="hover:text-white transition text-xl">→</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right col (5/12): foto */}
              <div className="md:col-span-5">
                <ImagePlaceholder
                  src="/assets/images/home/img-home-3.png"
                  alt="Model United Nations conference"
                  aspectRatio="aspect-[3/4]"
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
                aspectRatio="aspect-4/3"
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
                className="inline-flex items-center gap-2 bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.001 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.046 22l4.978-1.37A9.963 9.963 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm4.603 13.616c-.193.541-1.13 1.032-1.556 1.073-.4.038-.776.19-2.608-.544-2.194-.877-3.599-3.106-3.708-3.25-.108-.144-.882-1.172-.882-2.236 0-1.064.557-1.587.754-1.804.197-.216.43-.27.573-.27l.412.008c.132.006.31-.05.484.37.178.429.605 1.478.659 1.585.053.107.088.231.017.37-.07.14-.105.228-.209.35-.103.122-.218.273-.311.367-.103.103-.21.215-.09.422.12.207.532.879 1.143 1.424.785.698 1.447.914 1.653 1.016.207.103.327.086.449-.052.12-.138.52-.607.66-.815.138-.207.276-.172.465-.103.19.069 1.205.569 1.412.672.207.103.345.155.396.241.051.086.051.499-.142 1.04z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
            <div className="md:col-span-7">
              <ImagePlaceholder
                src="/assets/images/home/contact.jpg"
                alt="Equipo Peruvian Universities"
                aspectRatio="aspect-4/5"
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
