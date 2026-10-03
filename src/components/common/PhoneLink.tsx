"use client";

import { PHONE_NUMBER, PHONE_NUMBER_DISPLAY } from "@/constants/links";
import { GA_EVENT, trackEvent } from "@/lib/gtag";

const PhoneLink = ({ className }: { className?: string }) => {
  return (
    <a
      className={className}
      href={`tel:${PHONE_NUMBER}`}
      onClick={() => trackEvent(GA_EVENT.call)}
    >
      {PHONE_NUMBER_DISPLAY}
    </a>
  );
};

export default PhoneLink;
