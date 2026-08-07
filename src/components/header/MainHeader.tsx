"use client";

import { useEffect, useRef, useState } from "react";
import BaseContainer from "../common/BaseContainer";
import LocaleSelector from "../locale/LocaleSelector";

const STICKY_THRESHOLD = 200;

const MainHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > STICKY_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-foreground text-primary-foreground py-2 lg:py-3 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-md bg-foreground/80"
            : ""
        }`}
      >
        <BaseContainer>
          <div className="flex items-center justify-between">
            <span className="font-bold uppercase text-white">Taxi Bukovel</span>
            <LocaleSelector />
          </div>
        </BaseContainer>
      </header>

      {isSticky && <div style={{ height: headerHeight }} />}
    </>
  );
};

export default MainHeader;
