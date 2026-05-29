import Navbar from "@/components/Navbar";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ConferenceTabs from "@/components/ConferenceTabs";
import ColorStripe from "@/components/ColorStripe";

export default function ConferencesPage() {
  return (
    <>
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="relative">
          <Navbar variant="solid" />
        </section>

        {/* Interactive conference tabs */}
        <section className="mx-auto max-w-7xl px-6">
          <ConferenceTabs />
        </section>
      </main>
     
    </>
  );
}
