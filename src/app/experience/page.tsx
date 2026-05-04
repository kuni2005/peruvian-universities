import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceGallery from "@/components/ExperienceGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Collections header */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
          <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            Nuestra experiencia en acción
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h1 className="font-bebas uppercase text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-neutral-900">
              Collections
            </h1>
            <p className="font-body text-neutral-500 text-sm max-w-md leading-relaxed">
              Cada conferencia es una oportunidad para representar al Perú,
              desafiar ideas y construir conexiones con líderes de todo el
              mundo. Estos momentos reflejan el compromiso, la preparación y la
              pasión que definen a nuestra comunidad dentro y fuera del debate.
            </p>
          </div>

          {/* Gallery with filters */}
          <ExperienceGallery />
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                Voces de nuestra comunidad
              </p>
              <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92]">
                Delegates Experiences
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <div className="border border-neutral-200 rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-bebas uppercase text-3xl md:text-4xl leading-tight text-neutral-900 mb-2">
                ¿Fuiste parte de un evento PU?
              </h2>
              <p className="font-body text-neutral-500 text-sm">
                Comparte tu experiencia y aparece en nuestra galería.
              </p>
            </div>
            <a
              href="mailto:hello@peruvianuniversities.com?subject=Compartir%20experiencia"
              className="shrink-0 bg-neutral-900 text-white font-condensed font-bold uppercase text-sm px-8 py-3 rounded-full hover:bg-pu-dark transition-colors"
            >
              Compartir experiencia
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
