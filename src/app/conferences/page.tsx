import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ConferenceTabs from "@/components/ConferenceTabs";
import ColorStripe from "@/components/ColorStripe";

export default function ConferencesPage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/conferences/hero.jpg"
            alt="Delegados Peruvian Universities en conferencia internacional"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/45" />
          <Navbar variant="transparent" />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-14 md:pb-20">
              <div className="min-h-[52svh] md:min-h-[60svh] flex items-end">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                  <h1 className="md:col-span-7 font-bebas uppercase leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Participación en las conferencias más prestigiosas del
                    mundo
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      A lo largo de nuestra trayectoria, hemos participado en
                      las simulaciones de Naciones Unidas más importantes a
                      nivel global, destacando por nuestro desempeño y obteniendo
                      reconocimientos que posicionan al Perú en la escena
                      internacional del debate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Interactive conference tabs */}
        <section className="mx-auto max-w-7xl px-6">
          <ConferenceTabs />
        </section>
      </main>
      <Footer />
    </>
  );
}
