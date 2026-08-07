"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import DestinationCard from "./DestinationCard";
import { destinationRoutes } from "@/constants/destinations";
import CallButton from "../common/CallButton";
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

        <div className="hidden sm:flex flex-wrap items-stretch justify-center gap-10">
          {destinationRoutes.map((route) => (
            <DestinationCard key={route.id} route={route} />
          ))}
        </div>

        <div className="block sm:hidden">
          <Swiper spaceBetween={12} slidesPerView="auto">
            {destinationRoutes.map((route) => (
              <SwiperSlide key={route.id} style={{ width: 260 }}>
                <DestinationCard route={route} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </BaseContainer>
  );
};

export default DestinationsMain;
