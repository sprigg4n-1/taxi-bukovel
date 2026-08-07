import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import AutoCard from "./AutoCard";
import { autos } from "@/constants/autos";

const AutosMain = () => {
  const t = useTranslations("autos");

  return (
    <BaseContainer>
      <div className="flex flex-col gap-5">
        <div className="mb-4 flex text-center items-center flex-col justify-center">
          <h2 className="text-primary font-extrabold text-[20px] ">
            {t("title")}
          </h2>
          <p className="text-[14px] text-primary/80">{t("subtitle")}</p>
        </div>
        <div className="flex flex-col gap-4">
          {autos.map((auto) => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>
      </div>
    </BaseContainer>
  );
};

export default AutosMain;
