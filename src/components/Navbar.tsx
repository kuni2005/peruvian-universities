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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full px-4 pt-4 pb-2 z-50">
      <nav className="mx-auto max-w-7xl bg-white rounded-2xl shadow-sm px-6 py-3 flex items-center justify-between">
        <Logo variant="dark" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-condensed text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-neutral-900 border-b-2 border-neutral-900 pb-0.5"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/about"
          className="hidden md:inline-flex items-center bg-neutral-900 text-white font-condensed text-sm font-bold px-5 py-2 rounded-full hover:bg-pu-dark transition-colors"
        >
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
            className={`block w-6 h-0.5 bg-neutral-900 transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-white rounded-2xl shadow-sm px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-condensed text-sm font-semibold ${
                    pathname === link.href
                      ? "text-neutral-900"
                      : "text-neutral-500"
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
                className="block text-center bg-neutral-900 text-white font-condensed text-sm font-bold px-5 py-2 rounded-full"
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
