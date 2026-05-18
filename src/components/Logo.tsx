import Link from "next/link";

interface LogoProps {
  variant?: "cyan" | "white" | "dark";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const logoSrc = {
    cyan: "/assets/images/brand/logo-cyan.svg",
    white: "/assets/images/brand/img-logo.png",
    dark: "/assets/images/brand/logo-primary.svg",
  }[variant];

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      {/* Replace the file at the path below with the official logo asset. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="Peruvian Universities"
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}
