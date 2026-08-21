"use client";
import Link from "next/link";
import BaseContainer from "../common/BaseContainer";
import { useTranslations } from "next-intl";
import { Clock, Phone } from "lucide-react";
import LinkToTelegramButton from "../common/LinkToTelegramButton";
import CallButton from "../common/CallButton";

const MainFooter = () => {
  const t = useTranslations("");

  return (
    <footer id="footer" className="bg-muted-foreground">
      <BaseContainer>
        <div className="flex flex-col">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-5 md:justify-between py-3 sm:py-5 lg:py-7">
            <div className="flex flex-col text-center gap-1 md:text-left md:gap-2 md:max-w-1/3 md:w-full">
              <span className="font-bold text-[16px] lg:text-[22px] uppercase text-white">
                Taxi Bukovel
              </span>
              <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-white/80">
                {t("footer.description")}
              </p>
            </div>
            <nav className="hidden md:flex flex-col items-center md:items-start gap-2 md:gap-4">
              <Link
                className="text-[14px] md:text-[16px] text-white hover:text-white duration-300 ease-in-out"
                href={"#destinations"}
              >
                {t("header.nav.destinations")}
              </Link>
              <Link
                className="text-[14px] md:text-[16px] text-white hover:text-white duration-300 ease-in-out"
                href={"#autos"}
              >
                {t("header.nav.autos")}
              </Link>
              <Link
                className="text-[14px] md:text-[16px] text-white hover:text-white duration-300 ease-in-out"
                href={"#why-we"}
              >
                {t("header.nav.whyWe")}
              </Link>
              <Link
                className="text-[14px] md:text-[16px] text-white hover:text-white duration-300 ease-in-out"
                href={"#contacts"}
              >
                {t("header.nav.contacts")}
              </Link>
            </nav>
            <div className="flex flex-col gap-4 md:gap-6 items-center">
              <p className="hidden md:flex items-center gap-2 text-accent">
                <Phone className="size-6" />
                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
                  +380 96 887 11 34
                </span>
              </p>
              <CallButton />
              <LinkToTelegramButton />
              <p className="flex items-center gap-1 text-[12px] sm:text-[14px] lg:text-[16px] text-white">
                <Clock className="size-3 md:size-4 lg:size-5" />
                <span>{t("footer.workingHours")}</span>
              </p>
            </div>
          </div>
          <div className="py-3 sm:py-5 lg:py-7 border-t border-border/50 flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-between">
            <p className="text-center md:text-left text-[12px] sm:text-[14px] lg:text-[16px] text-white/70">
              {t("footer.serviceArea")}
            </p>
            <span className=" text-[12px] sm:text-[14px] lg:text-[16px] text-white">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </span>
          </div>
        </div>
      </BaseContainer>
    </footer>
  );
};

export default MainFooter;
