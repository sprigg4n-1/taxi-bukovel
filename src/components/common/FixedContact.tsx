"use client";

import { useEffect, useState } from "react";
import { MessageCircleMoreIcon, Phone } from "lucide-react";
import { PHONE_NUMBER, TELEGRAM_LINK } from "@/constants/links";
import Link from "next/link";

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
      { threshold: 0 }
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
        className={`fixed z-60 bottom-3 right-3 sm:hidden w-12 h-12 bg-accent rounded-full flex items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <Phone className="size-6 text-white" />
      </Link>
      <Link
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed z-60 hidden sm:flex bottom-5 right-5 lg:bottom-8 lg:right-8 w-14 h-14 bg-blue-500 rounded-full items-center justify-center transition-opacity duration-300 ${visibilityClass}`}
      >
        <MessageCircleMoreIcon className="size-8 text-white" />
      </Link>
    </>
  );
};

export default FixedContact;
