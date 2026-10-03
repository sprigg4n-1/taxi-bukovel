import { setRequestLocale } from "next-intl/server";

import AutosSection from "@/sections/autos/AutosSection";
import ContactsSection from "@/sections/contacts/ContactsSection";
import DestinationsSection from "@/sections/destinations/DestinationsSection";
// import FaqSection from "@/sections/faq/FaqSection";
import HeroSection from "@/sections/hero/HeroSection";
import WhyWeSection from "@/sections/why-we/WhyWeSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <HeroSection />
      <DestinationsSection />
      <AutosSection />
      <WhyWeSection />
      {/* <FaqSection /> */}
      <ContactsSection />
    </main>
  );
}
