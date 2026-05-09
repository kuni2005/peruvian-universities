import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ExperienceGallery from "@/components/ExperienceGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ColorStripe from "@/components/ColorStripe";

export default function ExperiencePage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative text-white">
          <ImagePlaceholder
            src="/assets/images/experience/hero.jpg"
            alt="Delegados Peruvian Universities en conferencia"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/50" />
          <Navbar variant="transparent" />
          <div className="relative z-10">
            <div className="mx-auto max-w-7xl px-6 pt-28 md:pt-36 pb-14 md:pb-20">
              <div className="min-h-[52svh] md:min-h-[60svh] flex items-end">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                  <h1 className="md:col-span-7 font-bebas uppercase leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Collections
                  </h1>
                  <div className="md:col-span-5 md:justify-self-end max-w-md">
                    <p className="font-body text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
                      Cada conferencia es una oportunidad para representar al
                      Perú, desafiar ideas y construir conexiones con líderes de
                      todo el mundo. Estos momentos reflejan el compromiso, la
                      preparación y la pasión que definen a nuestra comunidad
                      dentro y fuera del debate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ColorStripe />

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <ExperienceGallery />
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: heading + portrait */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  Voces de nuestra comunidad
                </p>
                <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92]">
                  Delegates Experiences
                </h2>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-4/5 max-w-sm">
                <ImagePlaceholder
                  src="/assets/images/testimonials/delegate-portrait.jpg"
                  alt="Delegate portrait"
                  aspectRatio=""
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right: slider */}
            <div className="pt-4 md:pt-16">
              <TestimonialsSlider />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
