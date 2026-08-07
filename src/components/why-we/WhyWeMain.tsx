import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import MainTitle from "../common/MainTitle";
import WhyWeItem from "./WhyWeItem";
import { features } from "@/constants/features";

const WhyWeMain = () => {
  const t = useTranslations("whyWe");

  return (
    <BaseContainer>
      <div className="flex flex-col gap-5">
        <div className="mb-4 flex text-center items-center flex-col justify-center">
          <MainTitle title={t("title")} />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-primary/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <WhyWeItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </BaseContainer>
  );
};

export default WhyWeMain;
