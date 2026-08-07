import AutosSection from "@/sections/autos/AutosSection";
import DestinationsSection from "@/sections/destinations/DestinationsSection";
import HeroSection from "@/sections/hero/HeroSection";
import WhyWeSection from "@/sections/why-we/WhyWeSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <DestinationsSection />
      <AutosSection />
      <WhyWeSection />
    </main>
  );
}
