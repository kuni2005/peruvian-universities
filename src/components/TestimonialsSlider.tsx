"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Names + photos are structural; quote/role text comes from the i18n
// dictionary at `experience.testimonials` (same order).
const testimonialsMeta = [
  { name: "Miranda Paz", img: "/assets/images/testimonials/miranda-paz.jpg" },
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
        className="font-bebas text-pu-cyan leading-none mb-6"
        style={{ fontSize: "clamp(60px, 8vw, 100px)" }}
        aria-hidden
      >
        &ldquo;
      </p>

      <blockquote className="font-body text-neutral-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
        {current.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
          <ImagePlaceholder
            src={meta.img}
            alt={meta.name}
            aspectRatio=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <p className="font-condensed font-bold uppercase text-sm tracking-wide text-neutral-900">
            {meta.name}
          </p>
          <p className="font-body text-xs text-neutral-400">{current.role}</p>
        </div>

        {/* Navigation */}
        <div className="ml-auto flex gap-2">
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
