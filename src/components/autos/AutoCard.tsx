import Image from "next/image";
import { useTranslations } from "next-intl";

import { Auto } from "@/constants/autos";

interface Props {
  auto: Auto;
}

const AutoCard = ({ auto }: Props) => {
  const t = useTranslations("autos");

  return (
    <div className="rounded-3xl overflow-hidden shadow-md bg-muted-foreground/90">
      <Image
        src={auto.img}
        alt={t(`cars.${auto.id}.name`)}
        loading="lazy"
        width={1920}
        height={1280}
        className="w-full max-w-180 min-h-52 max-h-75 sm:w-110 sm:h-70 border-b-2 border-white object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-accent">
            {t(`cars.${auto.id}.name`)}
          </h3>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white/70 flex items-center gap-1">
            <span>{t("seats", { count: auto.seats })}</span>
          </p>
        </div>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white">
          {t(`cars.${auto.id}.description`)}
        </p>
      </div>
    </div>
  );
};

export default AutoCard;
