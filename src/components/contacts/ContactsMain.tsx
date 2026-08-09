import React from "react";
import BaseContainer from "../common/BaseContainer";
import MainTitle from "../common/MainTitle";
import { useTranslations } from "next-intl";
import CallButton from "../common/CallButton";
import LinkToTelegramButton from "../common/LinkToTelegramButton";
import { Phone } from "lucide-react";

const ContactsMain = () => {
  const t = useTranslations("contacts");
  return (
    <BaseContainer>
      <div className="flex flex-col">
        <div className="mb-6 flex text-center items-center flex-col justify-center">
          <MainTitle title={t("title")} />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-primary/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="flex flex-col items-center sm:flex-row gap-5">
          <div className="flex-1 flex flex-col items-center gap-3 sm:gap-5">
            <p className="flex items-center gap-2 text-primaryl">
              <Phone className="size-8" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
                +380 96 908 67 07
              </span>
            </p>
            <CallButton />
            <LinkToTelegramButton />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/5">
            <div className="text-center block mb-3 sm:hidden">
              <h3 className="text-[16px] font-semibold text-primary/80">
                {t("serviceArea")}
              </h3>
              <p className="text-[12px] text-muted-foreground">
                {t("serviceAreaList")}
              </p>
            </div>
            <div className="w-full h-72 sm:h-88 lg:h-110 relative rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1ohRMI7AT6PGa3FQbpeD3lAt6CZ8Xpxg&ll=48.42,24.5&z=10"
                className="w-full h-[calc(100%+80px)] absolute -top-20 border-0"
                loading="lazy"
              />
              <div className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default ContactsMain;
