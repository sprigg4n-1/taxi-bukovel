"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import DestinationCard from "./DestinationCard";
import { destinationRoutes } from "@/constants/destinations";
import CallButton from "../common/CallButton";

const DestinationsMain = () => {
  const t = useTranslations("destinations");

  return (
    <BaseContainer>
      <div className="flex flex-col">
        <h2 className="text-primary font-extrabold text-[20px] text-center mb-6">
          {t("title")}
        </h2>

        <div className="mb-8">
          <Swiper spaceBetween={12} slidesPerView="auto">
            {destinationRoutes.map((route) => (
              <SwiperSlide key={route.id} style={{ width: 260 }}>
                <DestinationCard route={route} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <CallButton tel="+380969086707" />
      </div>
    </BaseContainer>
  );
};

export default DestinationsMain;
