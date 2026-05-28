"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About us" },
  { href: "/accion-peru", label: "Acción Perú" },
  { href: "/conferences", label: "Our Conferences" },
  { href: "/experience", label: "The experience" },
];

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const isTransparent = variant === "transparent";
  const headerClasses = `w-full px-4 pt-4 pb-2 z-50 ${
    isTransparent ? "absolute left-0 right-0 top-0" : ""
  } ${className}`;
  const navClasses = isTransparent
    ? "mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between"
    : "mx-auto max-w-7xl bg-white rounded-2xl shadow-sm px-6 py-3 flex items-center justify-between";
  const linkBaseClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900 hover:text-neutral-700"
      : "text-white/80 hover:text-white"
    : "text-neutral-500 hover:text-neutral-900";
  const linkActiveClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900 border-b-2 border-neutral-900 pb-0.5"
      : "text-white border-b-2 border-white pb-0.5"
    : "text-neutral-900 border-b-2 border-neutral-900 pb-0.5";
  const buttonClasses = isTransparent
    ? "hidden md:inline-flex items-center bg-pu-cyan text-white font-condensed text-sm font-bold px-5 py-2 rounded-full hover:brightness-110 transition"
    : "hidden md:inline-flex items-center bg-neutral-900 text-white font-condensed text-sm font-bold px-5 py-2 rounded-full hover:bg-pu-dark transition-colors";
  const mobileMenuClasses = isTransparent
    ? darkOnTransparent
      ? "md:hidden mt-2 mx-auto max-w-7xl bg-white/95 rounded-2xl shadow-lg px-6 py-5"
      : "md:hidden mt-2 mx-auto max-w-7xl bg-pu-dark/95 backdrop-blur rounded-2xl shadow-lg px-6 py-5"
    : "md:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-sm px-6 py-5";
  const mobileBaseClasses = "font-condensed text-sm font-semibold transition-colors";
  const mobileLinkClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900 hover:text-neutral-700"
      : "text-white/80 hover:text-white"
    : "text-neutral-500 hover:text-neutral-900";
  const mobileLinkActiveClasses = isTransparent
    ? darkOnTransparent
      ? "text-neutral-900"
      : "text-white"
    : "text-neutral-900";

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
                className={`font-condensed text-sm font-semibold transition-colors ${
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

        <Link href="/about" className={buttonClasses}>
          Conócenos
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 ${
              isTransparent ? "bg-white" : "bg-neutral-900"
            } transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 ${
              isTransparent ? "bg-white" : "bg-neutral-900"
            } transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 ${
              isTransparent ? "bg-white" : "bg-neutral-900"
            } transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={mobileMenuClasses}>
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${mobileBaseClasses} ${
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
                className={`block text-center ${
                  isTransparent ? "bg-pu-cyan" : "bg-neutral-900"
                } text-white font-condensed text-sm font-bold px-5 py-2 rounded-full`}
                onClick={() => setMobileOpen(false)}
              >
                Conócenos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
