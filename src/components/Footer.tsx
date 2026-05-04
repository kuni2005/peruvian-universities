import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  "PERUVIAN UNIVERSITIES": [
    { label: "Landing 1", href: "#" },
    { label: "Landing 2", href: "#" },
    { label: "Landing 3", href: "#" },
    { label: "Pricing 1", href: "#" },
  ],
  "WHAT IS MUN": [
    { label: "About", href: "/about" },
    { label: "Blog 1", href: "#" },
    { label: "Blog 2", href: "#" },
  ],
  "WHAT DO WE DO": [
    { label: "Sign up", href: "#" },
    { label: "Log in", href: "#" },
  ],
  "CONTACT US": [
    { label: "Sign up", href: "#" },
    { label: "Log in", href: "#" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "yt" },
  { label: "Instagram", href: "#", icon: "ig" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Logo variant="white" />
            <div className="mt-6 space-y-1 text-sm text-neutral-400">
              <p className="font-body font-semibold text-neutral-300 uppercase text-xs tracking-wider mb-3">
                Address
              </p>
              <p>1435 Wellington Road</p>
              <p>Windsor, Vic 3181</p>
              <p>Australia</p>
            </div>
            <div className="mt-4 space-y-1 text-sm text-neutral-400">
              <p>
                <span className="font-semibold text-neutral-300">Email</span>
              </p>
              <a
                href="mailto:hello@peruvianuniversities.com"
                className="hover:text-pu-cyan transition-colors"
              >
                hello@peruvianuniversities.com
              </a>
            </div>
            <div className="mt-4 text-sm text-neutral-400">
              <p>
                <span className="font-semibold text-neutral-300">Phone</span>
              </p>
              <a href="tel:+31505173821" className="hover:text-pu-cyan transition-colors">
                +31 505 173 821
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-condensed text-xs font-bold uppercase tracking-widest text-white mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
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
        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © Todos los derechos reservados
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:border-pu-cyan hover:text-pu-cyan transition-colors text-xs font-bold"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer nav */}
          <div className="flex items-center gap-4 text-xs text-neutral-500">
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
      </div>
    </footer>
  );
}
