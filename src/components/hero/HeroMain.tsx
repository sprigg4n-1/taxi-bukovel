import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

import BaseContainer from "../common/BaseContainer";
import CallButton from "../common/CallButton";
import LinkToTelegramButton from "../common/LinkToTelegramButton";

const HeroMain = () => {
  const t = useTranslations("hero");

  return (
    <BaseContainer>
      <div className="text-primary flex flex-col items-center text-center h-full py-10 sm:py-14 md:py-16 lg:py-20 justify-between">
        <div>
          <h1 className="text-white font-extrabold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4">
            {t("title")}
          </h1>
          <p className="text-white/70 font-medium text-[14px] sm:max-w-210 text-center sm:text-[16px] md:text-[18px] lg:text-[20px]">
            {t("subtitle")}
          </p>
        </div>

        <div className="hidden sm:flex flex-col items-center sm:gap-8 lg:gap-10 text-white">
          <p className="flex items-center gap-2 text-accent">
            <Phone className="size-8" />
            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
              +380 96 908 67 07
            </span>
          </p>
          <LinkToTelegramButton />
        </div>

        <CallButton tel="+380969086707" />
      </div>
    </BaseContainer>
  );
};

export default HeroMain;
