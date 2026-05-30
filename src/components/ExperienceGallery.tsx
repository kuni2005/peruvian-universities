"use client";

import { useCallback, useEffect, useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import { useI18n } from "@/i18n/LanguageProvider";

// Stable category keys so filtering is language-independent. Display labels and
// per-item event/title text come from the i18n dictionary at `experience`.
type FilterKey = "all" | "mun" | "conferences" | "competitions";

type GalleryItem = {
  id: number;
  category: FilterKey;
  event: string;
  title: string;
  img: string;
  large: boolean;
};

const itemsMeta: { id: number; category: FilterKey; img: string; large: boolean }[] = [
  { id: 1, category: "mun", img: "/assets/images/experience/img-experience-1.JPG", large: true },
  { id: 2, category: "conferences", img: "/assets/images/experience/img-experience-2.JPG", large: false },
  { id: 3, category: "competitions", img: "/assets/images/experience/img-experience-3.JPG", large: false },
  { id: 4, category: "mun", img: "/assets/images/experience/img-experience-4.JPG", large: false },
  { id: 5, category: "conferences", img: "/assets/images/about/img-team-1.png", large: false },
  { id: 6, category: "competitions", img: "/assets/images/about/img-year.JPG", large: false },
];

const filters: FilterKey[] = ["all", "mun", "conferences", "competitions"];

// ─── Shared overlay ───────────────────────────────────────────────────────────

function CardOverlay({ event, title }: { event: string; title: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-body text-white/70 text-xs mb-0.5">{event}</p>
        <p className="font-bebas text-white text-xl leading-tight">{title}</p>
      </div>
    </>
  );
}

// ─── Lightbox modal ───────────────────────────────────────────────────────────

function GalleryModal({
  items: modalItems,
  startIndex,
  onClose,
}: {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const [current, setCurrent] = useState(startIndex);
  const [visible, setVisible] = useState(true);

  const go = useCallback(
    (dir: "prev" | "next") => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) =>
          dir === "next"
            ? (c + 1) % modalItems.length
            : (c - 1 + modalItems.length) % modalItems.length
        );
        setVisible(true);
      }, 140);
    },
    [modalItems.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go("prev");
      if (e.key === "ArrowRight") go("next");
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [go, onClose]);

  const item = modalItems[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-white/50 text-xs tracking-wider uppercase">
              {item.event}
            </p>
            <p className="font-bebas text-white text-3xl leading-tight">
              {item.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-condensed text-white/40 text-sm tabular-nums">
              {current + 1} / {modalItems.length}
            </span>
            <button
              onClick={onClose}
              aria-label={t.experience.close}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-900">
          <div
            className="w-full h-full transition-opacity duration-150"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <ImagePlaceholder
              src={item.img}
              alt={item.title}
              aspectRatio=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Prev / Next arrows */}
          {modalItems.length > 1 && (
            <>
              <button
                onClick={() => go("prev")}
                aria-label={t.common.previous}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-colors group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-x-0.5 transition-transform"
                >
                  <polyline points="10 12 6 8 10 4" />
                </svg>
              </button>
              <button
                onClick={() => go("next")}
                aria-label={t.common.next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center transition-colors group"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <polyline points="6 4 10 8 6 12" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {modalItems.length > 1 && (
          <div className="flex gap-2 justify-center overflow-x-auto py-1 [&::-webkit-scrollbar]:hidden">
            {modalItems.map((thumb, i) => (
              <button
                key={thumb.id}
                onClick={() => {
                  if (i === current) return;
                  setVisible(false);
                  setTimeout(() => {
                    setCurrent(i);
                    setVisible(true);
                  }, 140);
                }}
                aria-label={thumb.title}
                className={`flex-none w-14 h-10 rounded-lg overflow-hidden transition-all duration-200 ${
                  i === current
                    ? "ring-2 ring-pu-cyan opacity-100 scale-105"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <ImagePlaceholder
                  src={thumb.img}
                  alt={thumb.title}
                  aspectRatio=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Extra items (adaptive layout) ───────────────────────────────────────────

function ExtraItems({
  extras,
  onItemClick,
}: {
  extras: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}) {
  if (extras.length === 0) return null;

  const cardClass =
    "relative rounded-3xl overflow-hidden group cursor-pointer";
  const overlayCard = (item: GalleryItem, wrapClass: string) => (
    <div
      key={item.id}
      className={`${cardClass} ${wrapClass}`}
      onClick={() => onItemClick(item)}
    >
      <ImagePlaceholder
        src={item.img}
        alt={item.title}
        aspectRatio=""
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <CardOverlay event={item.event} title={item.title} />
    </div>
  );

  // 1 extra → full-width landscape banner
  if (extras.length === 1) {
    return overlayCard(extras[0], "h-48");
  }

  // 2 extras → 2-col equal grid
  if (extras.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {extras.map((item) => overlayCard(item, "aspect-4/3"))}
      </div>
    );
  }

  // 3 extras → 2-col on mobile, 3-col on desktop
  if (extras.length === 3) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {extras.slice(0, 2).map((item) => overlayCard(item, "aspect-4/3"))}
        <div className="hidden md:block">{overlayCard(extras[2], "aspect-4/3")}</div>
      </div>
    );
  }

  // 4+ extras → grid (no horizontal carousel)
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
      {extras.map((item) => (
        <div key={item.id} className={`${cardClass} ${"aspect-4/3"}`} onClick={() => onItemClick(item)}>
          <ImagePlaceholder
            src={item.img}
            alt={item.title}
            aspectRatio=""
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <CardOverlay event={item.event} title={item.title} />
        </div>
      ))}
    </div>
  );
}

// ─── Main gallery ─────────────────────────────────────────────────────────────

export default function ExperienceGallery() {
  const { t } = useI18n();
  const [active, setActive] = useState<FilterKey>("all");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Merge structural meta with localized event/title text (same order).
  const items: GalleryItem[] = itemsMeta.map((m, i) => ({
    ...m,
    event: t.experience.items[i].event,
    title: t.experience.items[i].title,
  }));

  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  const [first, ...rest] = filtered;
  const extras = rest.slice(2);

  const openModal = (item: GalleryItem) => {
    const index = filtered.findIndex((x) => x.id === item.id);
    setModalIndex(index);
  };

  return (
    <>
      <div>
        {/* Filter tabs */}
        <div className="flex gap-0 border-b border-neutral-200 mb-10 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-3 font-condensed text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                active === f
                  ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                  : "text-neutral-400 hover:text-neutral-700"
              }`}
            >
              {t.experience.filters[f]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {filtered.length === 0 ? (
          <p className="font-body text-neutral-400 text-sm py-12 text-center">
            {t.experience.empty}
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Featured row — fixed height */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-100">
              {/* Large item */}
              {first && (
                <div
                  className="relative rounded-3xl overflow-hidden group h-56 md:h-full cursor-pointer"
                  onClick={() => openModal(first)}
                >
                  <ImagePlaceholder
                    src={first.img}
                    alt={first.title}
                    aspectRatio=""
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-body text-white/70 text-xs mb-1">
                      {first.event}
                    </p>
                    <p className="font-bebas text-white text-2xl leading-tight">
                      {first.title}
                    </p>
                  </div>
                </div>
              )}

              {/* Right column — always 2 items */}
              {rest.length > 0 && (
                <div className="flex flex-col gap-4 md:h-full">
                  {rest.slice(0, 2).map((item) => (
                    <div
                      key={item.id}
                      className="relative rounded-3xl overflow-hidden group flex-1 min-h-36 cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <ImagePlaceholder
                        src={item.img}
                        alt={item.title}
                        aspectRatio=""
                        className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-body text-white/70 text-xs mb-0.5">
                          {item.event}
                        </p>
                        <p className="font-bebas text-white text-xl leading-tight">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Extra items — adaptive layout based on count */}
            <ExtraItems extras={extras} onItemClick={openModal} />
          </div>
        )}
      </div>

      {/* Lightbox modal */}
      {modalIndex !== null && (
        <GalleryModal
          items={filtered}
          startIndex={modalIndex}
          onClose={() => setModalIndex(null)}
        />
      )}
    </>
  );
}
