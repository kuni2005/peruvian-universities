import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  "Peruvian Universities": [
    { label: "Inicio", href: "/" },
    { label: "Sobre nosotros", href: "/about" },
    { label: "Acción Perú", href: "/accion-peru" },
    { label: "Conferencias", href: "/conferences" },
    { label: "Experiencia", href: "/experience" },
  ],
  "¿Qué es MUN?": [
    { label: "Qué es", href: "/about" },
    { label: "Cómo participar", href: "/about#participar" },
    { label: "Equipo", href: "/about#team" },
  ],
  "Qué hacemos": [
    { label: "Programas", href: "/programs" },
    { label: "Proyectos", href: "/projects" },
  ],
  "Contacto": [
    { label: "Contacto", href: "/contact" },
    { label: "Prensa", href: "/press" },
  ],
};

const footerDescription =
  "Peruvian Universities es una comunidad dedicada a promover el diálogo académico y la participación estudiantil a través de conferencias, proyectos y programas formativos en Perú. Ponte en contacto para colaborar o participar.";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-pu-dark text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 relative">
        <span
          aria-hidden
          className="pointer-events-none hidden lg:block absolute right-6 top-10 text-[260px] leading-none font-condensed font-bold text-white/6 select-none"
        >
          PU
        </span>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2 md:pr-8 md:border-r md:border-white/10">
            <Logo variant="white" />
            <div className="mt-6 space-y-1 text-sm text-white/70">
              <p className="font-body font-semibold text-white/80 uppercase text-xs tracking-wider mb-3">
                Address
              </p>
              <p>1435 Wellington Road</p>
              <p>Windsor, Vic 3181</p>
              <p>Australia</p>
            </div>
            <div className="mt-4 space-y-1 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white/80">Email</span>
              </p>
              <a
                href="mailto:hello@stembiotech.com"
                className="hover:text-pu-cyan transition-colors"
              >
                hello@stembiotech.com
              </a>
            </div>
            <div className="mt-4 text-sm text-white/70">
              <p>
                <span className="font-semibold text-white/80">Phone</span>
              </p>
              <a
                href="tel:+61392817382"
                className="hover:text-pu-cyan transition-colors"
              >
                +613 9281 7382
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={title} className="md:border-l md:border-white/10 md:pl-8">
              <h3 className="font-condensed text-xs font-bold tracking-widest uppercase text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition duration-150 ease-out active:scale-95 active:translate-y-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/50">© Torem ipsum dolor sit amet</p>

          <div className="flex items-center gap-3">
            {["Facebook", "Instagram", "LinkedIn", "X"].map((network) => (
              <a
                key={network}
                href="#"
                aria-label={network}
                className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-condensed text-white/60 hover:text-white hover:border-white transition duration-150 ease-out active:scale-95 active:translate-y-0.5"
              >
                {network.slice(0, 1)}
              </a>
            ))}
          </div>

          {/* Footer nav */}
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Style Guide
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Licenses
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Changelog
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Getting started
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/40 leading-relaxed">
          {footerDescription}
        </p>
        <p className="mt-4 text-xs text-white/50">© {year} Peruvian Universities</p>
      </div>
    </footer>
  );
}
