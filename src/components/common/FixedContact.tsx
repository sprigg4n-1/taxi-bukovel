"use client";

import { useEffect, useId, useState } from "react";
import { MessageCircleMoreIcon, Phone } from "lucide-react";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const visibilityClass = visible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  return (
    <>
      <Link
        href={`tel:${PHONE_NUMBER}`}
        className={`group fixed z-60 bottom-5 right-5 sm:hidden size-16 bg-accent rounded-full flex items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <RotatingLabel text="ТЕЛЕФОНУЙТЕ - ТЕЛЕФОНУЙТЕ -" />
        <Phone className="relative z-10 size-6 text-white" />
      </Link>
      <Link
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group fixed z-60 hidden sm:flex bottom-8 right-8 lg:bottom-12 lg:right-12 xl:bottom-14 xl:right-14 size-16 lg:size-24 bg-blue-500 rounded-full items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <RotatingLabel text="ЗВ'ЯЗАТИСЬ В ТЕЛЕГРАМ" />
        <MessageCircleMoreIcon className="relative z-10 size-6 lg:size-8 text-white" />
      </Link>
    </>
  );
};

export default FixedContact;
