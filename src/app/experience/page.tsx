"use client";

import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ExperienceGallery from "@/components/ExperienceGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { useI18n } from "@/i18n/LanguageProvider";

export default function ExperiencePage() {
  const { t } = useI18n();
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative">
          <Navbar variant="solid" />
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-20">
          <ExperienceGallery />
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-6 pb-10 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left: heading + portrait */}
            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <p className="font-condensed text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                  {t.experience.testimonialsLabel}
                </p>
                <h2 className="font-bebas uppercase text-4xl md:text-5xl leading-[0.92]">
                  {t.experience.testimonialsHeading}
                </h2>
              </div>
              <div className="hidden md:block rounded-3xl overflow-hidden aspect-4/5 max-w-sm">
                <ImagePlaceholder
                  src="/assets/images/about/img-team-1.png"
                  alt={t.experience.portraitAlt}
                  aspectRatio=""
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right: slider */}
            <div className="pt-0 md:pt-16">
              <TestimonialsSlider />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
