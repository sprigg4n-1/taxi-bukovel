"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  ua: "UA",
  en: "EN",
};

const LocaleSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer rounded-md border border-white px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
      >
        {localeLabels[locale] ?? locale.toUpperCase()}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* Always rendered so crawlers can follow the links to other locales. */}
      <ul
        className={`absolute right-0 top-7 z-50 mt-2 w-full overflow-hidden rounded-md border border-border bg-card text-card-foreground shadow-lg ${
          isOpen ? "" : "hidden"
        }`}
      >
        {routing.locales
          .filter((item) => item !== locale)
          .map((item) => (
            <li key={item}>
              <Link
                href={pathname}
                locale={item}
                replace
                onClick={() => setIsOpen(false)}
                className="block cursor-pointer w-full px-3 py-2 text-center text-sm hover:bg-black/5"
              >
                {localeLabels[item] ?? item.toUpperCase()}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocaleSelector;
