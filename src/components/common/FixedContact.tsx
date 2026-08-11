"use client";

import { useEffect, useId, useState } from "react";
import { MessageCircleMoreIcon, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { PHONE_NUMBER, TELEGRAM_LINK } from "@/constants/links";
import Link from "next/link";

const CIRCLE_PATH = "M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0";

const RotatingLabel = ({ text }: { text: string }) => {
  const pathId = useId();

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 size-full motion-safe:animate-spin-slow group-hover:[animation-play-state:paused]"
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={CIRCLE_PATH} />
      </defs>
      <text
        fill="#ffffff"
        letterSpacing=""
        className="text-[12px] lg:text-[14px]"
      >
        <textPath href={`#${pathId}`}>{text}</textPath>
      </text>
    </svg>
  );
};

const FixedContact = () => {
  const t = useTranslations("button");
  const [pastHero, setPastHero] = useState(true);
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const footerEl = document.getElementById("footer");

    let cleanupHero: (() => void) | undefined;
    let cleanupFooter: (() => void) | undefined;

    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => setPastHero(!entry.isIntersecting),
        { threshold: 0 },
      );
      heroObserver.observe(heroEl);
      cleanupHero = () => heroObserver.disconnect();
    }

    if (footerEl) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => setOverFooter(entry.isIntersecting),
        { threshold: 0 },
      );
      footerObserver.observe(footerEl);
      cleanupFooter = () => footerObserver.disconnect();
    }

    return () => {
      cleanupHero?.();
      cleanupFooter?.();
    };
  }, []);

  const visible = pastHero && !overFooter;

  const visibilityClass = visible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <>
      <Link
        href={`tel:${PHONE_NUMBER}`}
        className={`group fixed z-60 bottom-5 right-5 sm:hidden size-16 bg-accent rounded-full flex items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <RotatingLabel text={t("rotatingCall")} />
        <Phone className="relative z-10 size-6 text-white" />
      </Link>
      <Link
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group fixed z-60 hidden sm:flex bottom-8 right-8 lg:bottom-12 lg:right-12 xl:bottom-14 xl:right-14 size-16 lg:size-24 bg-blue-500 rounded-full items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <RotatingLabel text={t("rotatingTelegram")} />
        <MessageCircleMoreIcon className="relative z-10 size-6 lg:size-8 text-white" />
      </Link>
    </>
  );
};

export default FixedContact;
