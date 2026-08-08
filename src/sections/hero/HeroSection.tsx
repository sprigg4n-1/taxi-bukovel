import Image from "next/image";
import HeroMain from "@/components/hero/HeroMain";

import heroBg2 from "@/images/hero/hero-bg-2.jpg";
import heroBgPc from "@/images/hero/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-50px)] lg:h-[calc(100vh-74px)] overflow-hidden"
    >
      <Image
        src={heroBg2}
        alt="hero bg image"
        fill
        priority
        className="-z-10 object-cover block md:hidden"
      />
      <Image
        src={heroBgPc}
        alt="hero bg image"
        fill
        priority
        className="-z-10 object-cover hidden md:block"
      />
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <HeroMain />
    </section>
  );
};

export default HeroSection;
