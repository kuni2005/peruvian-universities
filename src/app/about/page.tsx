import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import HistoryTimeline from "@/components/HistoryTimeline";
import TeamCarousel from "@/components/TeamCarousel";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            <h1 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-neutral-900">
              Impulsando el liderazgo desde el Perú hacia el mundo
            </h1>
            <p className="font-body text-neutral-600 text-base leading-relaxed md:pt-4">
              Peruvian Universities es una organización estudiantil que, desde
              su fundación, ha trabajado en la formación de líderes a través del
              debate académico y la participación en Model United Nations.
              Nuestro compromiso es representar al Perú en escenarios
              internacionales con excelencia, preparación y visión global.
            </p>
          </div>

          {/* Hero image */}
          <div className="rounded-3xl overflow-hidden">
            <ImagePlaceholder
              src="/assets/images/about/hero.jpg"
              alt="Equipo Peruvian Universities en conferencia internacional"
              aspectRatio="aspect-[16/7]"
              className="rounded-3xl"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="bg-pu-gray py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="font-bebas text-8xl md:text-9xl text-neutral-900 leading-none">
              +10
            </p>
            <h2 className="font-bebas uppercase text-3xl md:text-4xl text-neutral-900 mt-2 mb-6">
              Años de experiencia
            </h2>
            <p className="font-body text-neutral-500 text-base max-w-lg mx-auto leading-relaxed">
              A lo largo de los años, hemos consolidado un sistema de formación
              que combina entrenamiento académico, pensamiento estratégico y
              desarrollo personal.
            </p>
          </div>
        </section>

        {/* Community — Mission, Vision, Values */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            Nuestro equipo
          </p>
          <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92] mb-12 max-w-2xl">
            Una comunidad que trasciende el debate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Misión",
                body: "Entrenar líderes profesionales, académica y socialmente responsables comprometidos con el progreso colectivo de la sociedad mediante diplomacia.",
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
              <div
                key={card.title}
                className="border border-neutral-200 rounded-2xl p-8 hover:border-pu-cyan transition-colors"
              >
                <h3 className="font-condensed font-bold uppercase text-sm tracking-widest text-neutral-900 mb-4">
                  {card.title}
                </h3>
                <p className="font-body text-neutral-500 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <HistoryTimeline />
        </section>

        {/* Board of Directors */}
        <section className="bg-pu-gray py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
              Nuestro equipo
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92]">
                  Board of Directors and Preparation Teams
                </h2>
                <p className="font-body text-neutral-500 text-sm mt-4 max-w-xl leading-relaxed">
                  Nuestro Board of Directors y equipos de preparación están
                  conformados por profesionales y alumni con experiencia en
                  conferencias internacionales. Ellos guían el desarrollo de
                  cada miembro, asegurando un entrenamiento de alto nivel y una
                  preparación integral.
                </p>
              </div>
            </div>
            <TeamCarousel />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
