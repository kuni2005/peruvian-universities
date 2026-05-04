interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

/* Replace src prop with a real image path when assets are available.
   Example: src="/assets/images/home/hero.jpg"
   Uses <img> tag so you can swap to next/image when ready. */
export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
    );
  }

  return (
    <div
      className={`bg-neutral-200 w-full ${aspectRatio} ${className} flex items-center justify-center`}
      role="img"
      aria-label={alt}
    >
      <span className="text-neutral-400 text-xs font-condensed uppercase tracking-widest">
        {alt}
      </span>
    </div>
  );
}
