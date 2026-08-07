import { useTranslations } from "next-intl";

import { Feature } from "@/constants/features";

interface Props {
  feature: Feature;
}

const WhyWeItem = ({ feature }: Props) => {
  const t = useTranslations("whyWe");
  const Icon = feature.icon;

  return (
    <div className="flex flex-col items-center text-center gap-2 rounded-2xl border border-border bg-card p-4">
      <Icon className="size-6 sm:size-8 lg:size-10 text-accent" />
      <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-primary">
        {t(`features.${feature.id}.title`)}
      </h3>
      <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-muted-foreground">
        {t(`features.${feature.id}.desc`)}
      </p>
    </div>
  );
};

export default WhyWeItem;
