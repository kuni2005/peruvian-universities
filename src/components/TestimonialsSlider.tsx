"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Names + photos are structural; quote/role text comes from the i18n
// dictionary at `experience.testimonials` (same order).
const testimonialsMeta = [
  { name: "Juani Mun", img: "/assets/images/about/img-team-1.png" },
  { name: "Rodrigo Alva", img: "/assets/images/testimonials/rodrigo-alva.jpg" },
  { name: "Valeria Flores", img: "/assets/images/testimonials/valeria-flores.jpg" },
];

export default function TestimonialsSlider() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const meta = testimonialsMeta[index];
  const current = t.experience.testimonials[index];

  return (
    <div>
      {/* Quote mark */}
      <p
        className="font-bebas text-pu-cyan leading-none -mb-2 md:mb-0"
        style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
        aria-hidden
      >
        &ldquo;
      </p>

      <blockquote className="font-body text-neutral-700 text-sm md:text-lg leading-relaxed mb-5 md:mb-8 max-w-2xl">
        {current.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 md:gap-4 mt-0 md:mt-0">
        <div className="w-14 h-14 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-neutral-200 bg-white">
          <ImagePlaceholder
            src={meta.img}
            alt={meta.name}
            aspectRatio=""
            fit="contain"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="min-w-0">
          <p className="font-condensed font-bold uppercase text-sm md:text-base tracking-wide text-neutral-900 leading-tight">
            {meta.name}
          </p>
          <p className="font-body text-xs text-neutral-400 leading-tight">{current.role}</p>
        </div>

        {/* Navigation */}
        <div className="ml-auto flex gap-2 shrink-0">
          <button
            onClick={() => setIndex((i) => (i - 1 + testimonialsMeta.length) % testimonialsMeta.length)}
            aria-label={t.experience.prevTestimonial}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonialsMeta.length)}
            aria-label={t.experience.nextTestimonial}
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
