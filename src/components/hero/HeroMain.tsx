import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import CallButton from "../common/CallButton";

const HeroMain = () => {
  const t = useTranslations("hero");

  return (
    <BaseContainer>
      <div className="text-primary flex flex-col items-center text-center h-full py-10 justify-between">
        <div>
          <h1 className="text-accent font-extrabold uppercase text-[20px] mb-6">
            {t("title")}
          </h1>
          <p className="text-white font-medium text-[16px] leading-[125%]">
            {t("subtitle")}
          </p>
        </div>

        <CallButton tel="+380969086707" />
      </div>
    </BaseContainer>
  );
};

export default HeroMain;
