import { getImageProps } from "next/image";
import { useTranslations } from "next-intl";
import HeroMain from "@/components/hero/HeroMain";

import heroBg2 from "@/images/hero/hero-bg-2.jpg";
import heroBgPc from "@/images/hero/hero-bg.jpg";

const HeroSection = () => {
  const t = useTranslations("hero");

  // Art direction: one <picture> so the browser downloads only the image for its viewport.
  const common = {
    alt: t("imageAlt"),
    sizes: "100vw",
    fill: true,
    loading: "eager" as const,
    fetchPriority: "high" as const,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: heroBgPc });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: heroBg2 });

  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-50px)] lg:h-[calc(100vh-74px)] overflow-hidden"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={desktop} sizes="100vw" />
        <source srcSet={mobile} sizes="100vw" />
        <img {...rest} alt={common.alt} className="-z-10 object-cover" />
      </picture>
      <div className="absolute inset-0 -z-10 bg-black/40" />
      <HeroMain />
    </section>
  );
};

export default HeroSection;
