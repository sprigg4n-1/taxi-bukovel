import AutosSection from "@/sections/autos/AutosSection";
import DestinationsSection from "@/sections/destinations/DestinationsSection";
import HeroSection from "@/sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex-1">
      <HeroSection />
      <DestinationsSection />
      <AutosSection />
    </div>
  );
}
