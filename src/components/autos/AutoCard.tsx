import Image from "next/image";
import { useTranslations } from "next-intl";

import { Auto } from "@/constants/autos";

interface Props {
  auto: Auto;
}

const AutoCard = ({ auto }: Props) => {
  const t = useTranslations("autos");

  return (
    <div className="rounded-3xl overflow-hidden shadow-md">
      <Image
        src={auto.img}
        alt={t(`cars.${auto.id}.name`)}
        loading="lazy"
        width={1920}
        height={1280}
        className="w-full max-w-180 h-52 border-b-2 border-white"
      />
      <div className="p-5 bg-muted-foreground/90">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[16px] font-bold text-accent">
            {t(`cars.${auto.id}.name`)}
          </h3>
          <p className="text-[14px] text-white/70 flex items-center gap-1">
            <span>{t("seats", { count: auto.seats })}</span>
          </p>
        </div>
        <p className="text-[14px] text-white">
          {t(`cars.${auto.id}.description`)}
        </p>
      </div>
    </div>
  );
};

export default AutoCard;
