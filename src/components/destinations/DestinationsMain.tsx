import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import DestinationCard from "./DestinationCard";
import { destinationRoutes } from "@/constants/destinations";
import MainTitle from "../common/MainTitle";

const DestinationsMain = () => {
  const t = useTranslations("destinations");

  return (
    <BaseContainer>
      <div className="flex flex-col">
        <div className="mb-6 flex text-center items-center flex-col justify-center">
          <MainTitle title={t("title")} />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-primary/80">
            {t("subtitle")}
          </p>
        </div>

        <ul className="flex items-stretch gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:gap-10 sm:overflow-visible">
          {destinationRoutes.map((route) => (
            <li
              key={route.id}
              className="flex shrink-0 snap-start w-65 sm:w-60 lg:w-90"
            >
              <DestinationCard route={route} />
            </li>
          ))}
        </ul>
      </div>
    </BaseContainer>
  );
};

export default DestinationsMain;
