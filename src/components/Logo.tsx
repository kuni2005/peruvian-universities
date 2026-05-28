import Link from "next/link";

interface LogoProps {
  variant?: "cyan" | "white" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc = {
    cyan: "/assets/images/brand/img-logo.png",
    white: "/assets/images/brand/img-logo.png",
    // fallback to the PNG available in the repo when an SVG isn't present yet
    dark: "/assets/images/brand/img-logo.png",
  }[variant];

  const logoClasses =
    variant === "dark"
      ? "h-10 w-auto object-contain brightness-0"
      : "h-10 w-auto object-contain";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      {/* Replace the file at the path below with the official logo asset. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="Peruvian Universities"
        className={logoClasses}
      />
    </Link>
  );
}
