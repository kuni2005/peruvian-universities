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
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 items-start md:items-stretch">
              {/* Left col: título, descripción, bullets y testimonio */}
              <div className="md:pr-12 md:border-r md:border-white/20 flex flex-col md:h-full min-w-0">
                <h2 className="font-bebas uppercase text-5xl md:text-6xl lg:text-[4.5rem] leading-[0.95] text-white mb-8 md:mb-10">
                  ¿Qué es Model United Nations?
                </h2>

                <div className="border-t border-white/20 pt-5">
                  <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                    Model United Nations (MUN) es una simulación académica donde
                    los participantes representan a países dentro de comités de las
                    Naciones Unidas, debatiendo problemáticas globales actuales.
                  </p>
                </div>

                <ul className="border-t border-white/20">
                  {[
                    "Desarrolla liderazgo internacional",
                    "Mejora tu oratoria y negociación",
                    "Debate problemáticas globales reales",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-4 border-b border-white/20 font-body text-white/90 text-sm md:text-base"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pu-cyan"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="h-3 w-3 text-pu-dark"
                        >
                          <path
                            d="M2.5 6.2 4.8 8.5 9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#004a5e] rounded-2xl px-6 py-7 md:px-8 md:py-8 mt-6 md:flex-1 md:flex md:flex-col">
                  <span
                    className="font-bebas text-pu-cyan leading-none block"
                    style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <div className="border-t border-white/20 pt-5 md:flex-1">
                    <p className="font-body text-white/80 text-sm leading-relaxed">
                      I have always felt that the benefit that being part of PU has
                      given me is a debt that I will not be able to pay. By being
                      part of the team, debating and giving your best, as well as
                      taking on new challenges within the team, you hope to give new
                      members the same experience you have had, or even a better one.
                    </p>
                  </div>
                  <div className="border-t border-white/20 mt-6 pt-5 flex items-center justify-between gap-4 md:mt-auto">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-white/25 shrink-0" />
                      <div>
                        <p className="font-condensed font-bold text-white text-xs uppercase tracking-wider">
                          Miranda Paz
                        </p>
                        <p className="font-body text-white/50 text-xs">
                          Sophomore Delegate
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-pu-cyan shrink-0">
                      <button
                        type="button"
                        aria-label="Anterior"
                        className="hover:text-white transition-colors text-2xl leading-none"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        aria-label="Siguiente"
                        className="hover:text-white transition-colors text-2xl leading-none"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right col: foto 50% */}
              <div className="md:pl-12 mt-10 md:mt-0 min-h-88 md:min-h-0 md:h-full min-w-0">
                <ImagePlaceholder
                  src="/assets/images/home/img-home-3.png"
                  alt="Model United Nations conference"
                  aspectRatio="aspect-[3/4] md:aspect-auto"
                  className="rounded-2xl w-full h-full min-h-88 md:min-h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Skills / Stats */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
            What do we do
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95] text-neutral-900 shrink-0">
              <span className="border-b-2 border-pu-cyan pb-1">
                Desarrollamos habilidades para
              </span>{" "}
              impactar el mundo
            </h2>
            <div className="hidden md:block flex-1 border-t border-neutral-200 mb-2" />
          </div>
          <div className="border-t border-neutral-200 mt-8 md:mt-10 pt-10 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 items-stretch">
              <div className="min-h-72 md:min-h-0 md:h-full min-w-0">
                <ImagePlaceholder
                  src="/assets/images/home/skills-training.jpg"
                  alt="Entrenamiento de delegados"
                  aspectRatio="aspect-[4/5] md:aspect-auto"
                  className="rounded-2xl w-full h-full min-h-72 md:min-h-full object-cover"
                />
              </div>
              <div className="flex flex-col md:h-full md:pl-12 md:border-l md:border-neutral-200 mt-10 md:mt-0 min-w-0">
                <p className="font-body text-neutral-600 text-sm md:text-base leading-relaxed">
                  Preparamos a nuestros miembros para destacar en escenarios
                  internacionales mediante entrenamientos intensivos en debate,
                  negociación y análisis político.
                </p>
                <div className="grid grid-cols-3 gap-4 md:gap-6 mt-auto pt-10 md:pt-12">
                  {[
                    { value: "+200", label: "Delegados formados" },
                    { value: "10", label: "Años formando líderes" },
                    { value: "+650", label: "Premios internacionales" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-bebas text-4xl md:text-5xl lg:text-6xl text-pu-cyan leading-none">
                        {stat.value}
                      </p>
                      <p className="font-body text-xs text-neutral-500 mt-2 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
            Contact
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            <h2 className="font-bebas uppercase text-3xl md:text-4xl lg:text-5xl leading-[0.95] text-neutral-900 shrink-0">
              Sé parte de la próxima generación de líderes
            </h2>
            <div className="hidden md:block flex-1 border-t border-neutral-200 mb-2" />
          </div>
          <div className="border-t border-neutral-200 mt-8 md:mt-10 pt-10 md:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 items-stretch">
              <div className="flex flex-col md:h-full md:pr-12 md:border-r md:border-neutral-200 min-w-0">
                <p className="font-body text-neutral-500 text-sm md:text-base leading-relaxed">
                  Si quieres desarrollar tu potencial, representar al Perú y formar
                  parte de una comunidad global, estamos aquí para ayudarte a dar
                  el siguiente paso.
                </p>
                <div className="mt-8">
                  <h3 className="font-condensed font-bold uppercase text-sm tracking-wider text-neutral-900 mb-5">
                    Contact details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-body text-neutral-600">
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Address</p>
                      <p>1435 Wellington Road</p>
                      <p>Windsor, Vic 3181</p>
                      <p>Australia</p>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">Email</p>
                        <a
                          href="mailto:hello@stembiotech.com"
                          className="text-pu-dark hover:text-pu-cyan transition-colors"
                        >
                          hello@stembiotech.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 mb-1">Phone</p>
                        <a
                          href="tel:+51928173821"
                          className="text-pu-dark hover:text-pu-cyan transition-colors"
                        >
                          +51 928 173 821
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/51928173821"
                  className="inline-flex items-center gap-2 bg-pu-cyan text-white font-condensed font-bold text-sm px-6 py-2.5 rounded-full hover:brightness-110 transition mt-8 md:mt-auto w-fit"
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
              <div className="min-h-80 md:min-h-0 md:h-full md:pl-12 mt-10 md:mt-0 min-w-0">
                <ImagePlaceholder
                  src="/assets/images/home/contact.jpg"
                  alt="Equipo Peruvian Universities"
                  aspectRatio="aspect-[4/5] md:aspect-auto"
                  className="rounded-2xl w-full h-full min-h-80 md:min-h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />
      </main>

      <Footer />
    </>
  );
}
