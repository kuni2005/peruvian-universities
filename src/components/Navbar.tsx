"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useI18n } from "@/i18n/LanguageProvider";

interface NavbarProps {
  variant?: "solid" | "transparent";
  /** When true and variant is `transparent`, render links/logo in dark colors */
  darkOnTransparent?: boolean;
  className?: string;
}

export default function Navbar({
  variant = "solid",
  darkOnTransparent = false,
  className = "",
}: NavbarProps) {
  const pathname = usePathname();
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isTransparent = variant === "transparent";
  const toggleTone: "light" | "dark" =
    isTransparent && !darkOnTransparent ? "light" : "dark";
  const navLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/accion-peru", label: t.nav.accionPeru },
    { href: "/conferences", label: t.nav.conferences },
    { href: "/experience", label: t.nav.experience },
  ];
  const headerClasses = `w-full px-4 pt-4 pb-2 z-50 ${
    isTransparent ? "absolute left-0 right-0 top-0" : ""
  } ${className}`;
  const navClasses = isTransparent
    ? "mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between"
    : "mx-auto max-w-7xl bg-white rounded-2xl shadow-none ring-0 px-6 py-3 flex items-center justify-between";
  const linkBaseClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900 hover:text-neutral-700"
      : "text-white/80 hover:text-white"
    : "text-neutral-500 hover:text-neutral-900";
  const clickAnim = "active:scale-95 active:translate-y-0.5 transition-transform duration-150 ease-out";
  const linkActiveClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900 border-b-2 border-neutral-900 pb-0.5"
      : "text-white border-b-2 border-white pb-0.5"
    : "text-neutral-900 border-b-2 border-neutral-900 pb-0.5";
  const buttonClasses = isTransparent
    ? "hidden md:inline-flex items-center bg-pu-cyan text-white font-condensed text-sm font-bold px-5 py-2 rounded-full hover:brightness-110 transition"
    : "hidden md:inline-flex items-center bg-pu-cyan text-white font-condensed text-sm font-bold px-5 py-2 rounded-full hover:brightness-110 transition";
  const mobileMenuClasses = isTransparent
    ? darkOnTransparent
      ? "md:hidden mt-2 mx-auto max-w-7xl rounded-3xl border border-neutral-200/80 bg-white/95 shadow-2xl shadow-black/10 backdrop-blur-xl px-5 py-5"
      : "md:hidden mt-2 mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/85 shadow-2xl shadow-black/30 backdrop-blur-xl px-5 py-5"
    : "md:hidden mt-2 mx-auto max-w-7xl rounded-3xl border border-neutral-200/80 bg-white/95 shadow-2xl shadow-black/10 backdrop-blur-xl px-5 py-5";
  const mobileBaseClasses = "font-condensed text-sm font-semibold transition duration-150 ease-out";
  const mobileLinkClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900/75 hover:text-neutral-950"
      : "text-white/80 hover:text-white"
    : "text-neutral-600 hover:text-neutral-900";
  const mobileLinkActiveClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-950 bg-neutral-900/5"
      : "text-white bg-white/10"
    : "text-neutral-950 bg-neutral-900/[0.04]";
  const mobileCtaClasses = isTransparent
    ? darkOnTransparent
      ? "bg-pu-cyan text-white shadow-lg shadow-pu-cyan/20 hover:brightness-110"
      : "bg-gradient-to-r from-pu-cyan to-cyan-400 text-white shadow-lg shadow-pu-cyan/30 hover:brightness-110"
    : "bg-pu-dark text-white shadow-lg shadow-black/10 hover:bg-pu-dark/90";
  const mobileToggleSurface = isTransparent
    ? darkOnTransparent
      ? "bg-white/75 hover:bg-white text-neutral-900 ring-1 ring-neutral-200/80"
      : "bg-white/10 hover:bg-white/15 text-white ring-1 ring-white/10"
    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 ring-1 ring-neutral-200";

  return (
    <header className={headerClasses}>
      <nav className={navClasses}>
        <Logo variant={isTransparent && !darkOnTransparent ? "white" : "dark"} />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-condensed text-sm font-semibold ${clickAnim} ${
                  pathname === link.href
                    ? linkActiveClasses
                    : linkBaseClasses
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <LanguageToggle tone={toggleTone} />
          <Link href="/about" className={`${buttonClasses} ${clickAnim}`}>
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile controls — language toggle always visible beside the hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle tone={toggleTone} />
          <button
            className={`flex flex-col gap-1.5 rounded-full p-2.5 transition duration-150 ease-out ${mobileToggleSurface}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 ${
                isTransparent && !darkOnTransparent ? "bg-white" : "bg-neutral-900"
              } rounded-full transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 ${
                isTransparent && !darkOnTransparent ? "bg-white" : "bg-neutral-900"
              } rounded-full transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 ${
                isTransparent && !darkOnTransparent ? "bg-white" : "bg-neutral-900"
              } rounded-full transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={mobileMenuClasses}>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 ${mobileBaseClasses} ${clickAnim} ${
                    pathname === link.href
                      ? mobileLinkActiveClasses
                      : mobileLinkClasses
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className={`block text-center rounded-full px-5 py-3 font-condensed text-sm font-bold ${clickAnim} ${mobileCtaClasses}`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
