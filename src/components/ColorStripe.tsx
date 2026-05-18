interface ColorStripeProps {
  className?: string;
}

export default function ColorStripe({ className = "" }: ColorStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-1 w-full bg-pu-cyan ${className}`}
    />
  );
}
