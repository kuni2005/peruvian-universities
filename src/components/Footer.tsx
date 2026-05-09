import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  "Peruvian Universities": [
    { label: "Landing 1", href: "#" },
    { label: "Landing 2", href: "#" },
    { label: "Landing 3", href: "#" },
    { label: "Pricing 1", href: "#" },
  ],
  "What is MUN": [
    { label: "About", href: "/about" },
    { label: "Blog 1", href: "#" },
    { label: "Blog 2", href: "#" },
  ],
  "What do we do": [
    { label: "Sign up", href: "#" },
    { label: "Log in", href: "#" },
  ],
  "Contact us": [
    { label: "Sign up", href: "#" },
    { label: "Log in", href: "#" },
  ],
};
const footerDescription =
  "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

export default function Footer() {
  return (
    <footer className="bg-pu-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
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
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-condensed text-xs font-bold tracking-widest uppercase text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
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
                className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center text-[10px] font-condensed text-white/60 hover:text-white hover:border-white transition-colors"
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
      </div>
    </footer>
  );
}
