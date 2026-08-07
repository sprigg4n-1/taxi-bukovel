"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import BaseContainer from "../common/BaseContainer";
import LocaleSelector from "../locale/LocaleSelector";
import Link from "next/link";

const STICKY_THRESHOLD = 200;

const MainHeader = () => {
  const t = useTranslations("header.nav");
  const headerRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };

    updateHeaderHeight();

    const handleScroll = () => {
      setIsSticky(window.scrollY > STICKY_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-foreground text-primary-foreground py-2 lg:py-5 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-foreground/80"
            : ""
        }`}
      >
        <BaseContainer>
          <div className="flex items-center justify-between">
            <span className="font-bold text-[16px] lg:text-[22px] uppercase text-white">
              Taxi Bukovel
            </span>

            <div className="flex gap-10 lg:gap-20 items-center">
              <nav className="hidden sm:flex gap-5 lg:gap-10">
                <Link
                  className="text-[14px] md:text-[16px] text-white/70 hover:text-white duration-300 ease-in-out"
                  href={"#destinations"}
                >
                  {t("destinations")}
                </Link>
                <Link
                  className="text-[14px] md:text-[16px] text-white/70 hover:text-white duration-300 ease-in-out"
                  href={"#autos"}
                >
                  {t("autos")}
                </Link>
                <Link
                  className="text-[14px] md:text-[16px] text-white/70 hover:text-white duration-300 ease-in-out"
                  href={"#why-we"}
                >
                  {t("whyWe")}
                </Link>
              </nav>
              <LocaleSelector />
            </div>
          </div>
        </BaseContainer>
      </header>

      {isSticky && <div style={{ height: headerHeight }} />}
    </>
  );
};

export default MainHeader;
