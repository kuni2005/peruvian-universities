import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ExperienceGallery from "@/components/ExperienceGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ColorStripe from "@/components/ColorStripe";

export default function ExperiencePage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative">
          <Navbar variant="solid" />
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <ExperienceGallery />
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6">
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
    </>
  );
}
