import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ConferenceTabs from "@/components/ConferenceTabs";

export default function ConferencesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            <h1 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-neutral-900">
              Participación en las conferencias más prestigiosas del mundo
            </h1>
            <p className="font-body text-neutral-600 text-base leading-relaxed md:pt-4">
              A lo largo de nuestra trayectoria, hemos participado en las
              simulaciones de Naciones Unidas más importantes a nivel global,
              destacando por nuestro desempeño y obteniendo reconocimientos que
              posicionan al Perú en la escena internacional del debate.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <ImagePlaceholder
              src="/assets/images/conferences/hero.jpg"
              alt="Delegados Peruvian Universities en conferencia internacional"
              aspectRatio="aspect-[16/7]"
              className="rounded-3xl"
            />
          </div>
        </section>

        {/* Interactive conference tabs */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <ConferenceTabs />
        </section>
      </main>
      <Footer />
    </>
  );
}
