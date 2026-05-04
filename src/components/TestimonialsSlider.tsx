"use client";

import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";

const testimonials = [
  {
    quote:
      "I have always felt that the benefit that being part of PU has given me is a debt that I will not be able to pay. By being part of the team, debating and giving your best, as well as taking on new challenges within the team, you hope to be able to give new members the same experience you have had, or even a better one.",
    name: "Miranda Paz",
    role: "Sophomore Delegate",
    img: "/assets/images/testimonials/miranda-paz.jpg",
  },
  {
    quote:
      "Peruvian Universities changed the way I see the world. The training, the discipline, and the sense of community pushed me to grow beyond my comfort zone. Today I work in international affairs and I owe a huge part of that to PU.",
    name: "Rodrigo Alva",
    role: "Alumni Delegate",
    img: "/assets/images/testimonials/rodrigo-alva.jpg",
  },
  {
    quote:
      "Being part of PU means being part of something greater than yourself. Every conference, every training session shaped who I am as a leader and as a person. I am incredibly proud to represent Peru on the world stage.",
    name: "Valeria Flores",
    role: "Senior Delegate",
    img: "/assets/images/testimonials/valeria-flores.jpg",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

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
        {t.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
          <ImagePlaceholder
            src={t.img}
            alt={t.name}
            aspectRatio=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div>
          <p className="font-condensed font-bold uppercase text-sm tracking-wide text-neutral-900">
            {t.name}
          </p>
          <p className="font-body text-xs text-neutral-400">{t.role}</p>
        </div>

        {/* Navigation */}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
