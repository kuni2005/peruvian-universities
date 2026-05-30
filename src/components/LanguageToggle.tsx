"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import { locales, type Locale } from "@/i18n/translations";

/**
 * Language switcher styled to match the Navbar links.
 * `tone="light"` for the transparent (over-hero) navbar, `tone="dark"` for the
 * solid white navbar and the mobile menu.
 */
export default function LanguageToggle({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { locale, setLocale, t } = useI18n();

  const base =
    "font-condensed text-sm font-bold uppercase tracking-widest transition-colors duration-150 ease-out active:scale-95 active:translate-y-0.5";
  const activeClasses = "text-pu-cyan";
  const idleClasses =
    tone === "light"
      ? "text-white/60 hover:text-white"
      : "text-neutral-400 hover:text-neutral-900";
  const dividerClasses = tone === "light" ? "text-white/30" : "text-neutral-300";

  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      role="group"
      aria-label={t.nav.toggleLabel}
    >
      {locales.map((code: Locale, i) => (
        <span key={code} className="flex items-center gap-1.5">
          {i > 0 && <span className={dividerClasses} aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={`${base} ${locale === code ? activeClasses : idleClasses}`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
