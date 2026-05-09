import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import HistoryTimeline from "@/components/HistoryTimeline";
import TeamCarousel from "@/components/TeamCarousel";
import ColorStripe from "@/components/ColorStripe";

export default function AboutPage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/about/hero.jpg"
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
                    Impulsando el liderazgo desde el Perú hacia el mundo
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-sm md:text-base leading-relaxed">
                      Peruvian Universities es una organización estudiantil que
                      trabaja en la formación de líderes a través del debate
                      académico y la participación en Model United Nations.
                      Representamos al Perú en escenarios internacionales con
                      excelencia, preparación y visión global.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Stats */}
        <section className="relative bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative">
            <span
              aria-hidden="true"
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 text-[16rem] font-bebas text-neutral-100 leading-none"
            >
              PU
            </span>
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3">
                <p className="font-bebas text-6xl md:text-7xl text-pu-dark leading-none">
                  +10
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Años de experiencia
                </p>
                <p className="font-body text-neutral-500 text-sm md:text-base leading-relaxed mt-3">
                  A lo largo de los años, hemos consolidado un sistema de
                  formación que combina entrenamiento académico, pensamiento
                  estratégico y desarrollo personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community — Mission, Vision, Values */}
        <section className="bg-pu-dark text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <p className="font-condensed text-xs font-bold uppercase tracking-widest text-pu-cyan mb-3">
              Nuestro equipo
            </p>
            <h2 className="font-bebas uppercase text-3xl md:text-4xl leading-[0.95] mb-10 max-w-2xl">
              Una comunidad que trasciende el debate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                {
                  title: "Misión",
                  body: "Desarrollar a nuestros miembros habilidades clave como liderazgo, pensamiento crítico y comunicación efectiva, preparándolos para representar al Perú en escenarios internacionales y generar impacto en sus entornos.",
                },
                {
                  title: "Visión",
                  body: "Consolidarnos como una de las organizaciones estudiantiles más influyentes de la región, reconocida por la excelencia de sus delegados y por su contribución al desarrollo de líderes comprometidos con el mundo.",
                },
                {
                  title: "Valores",
                  body: "Nos regimos por la excelencia, el compromiso, la integridad y la colaboración. Creemos en el poder del diálogo, el respeto por la diversidad de ideas y la responsabilidad de generar un cambio positivo en la sociedad.",
                },
              ].map((card) => (
                <div key={card.title} className="py-10 md:px-8">
                  <h3 className="font-condensed font-bold uppercase text-xs tracking-widest text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">
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
            Nuestro equipo
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="font-bebas uppercase text-3xl md:text-4xl leading-[0.95]">
                Board of Directors and Preparation Teams
              </h2>
              <p className="font-body text-neutral-500 text-sm mt-4 max-w-xl leading-relaxed">
                Nuestro Board of Directors y equipos de preparación están
                conformados por profesionales y alumni con experiencia en
                conferencias internacionales. Ellos guían el desarrollo de cada
                miembro, asegurando un entrenamiento de alto nivel y una
                preparación integral.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Anterior"
                className="h-9 w-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Siguiente"
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
      <Footer />
    </>
  );
}
