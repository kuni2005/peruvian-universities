interface ColorStripeProps {
  className?: string;
}

export default function ColorStripe({ className = "" }: ColorStripeProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-1 w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, #D13B3B 0%, #FF914D 16.6%, #FFDE59 33.2%, #00BF63 49.8%, #05C3DD 66.4%, #085678 83%, #8C52FF 100%)",
      }}
    />
  );
}
