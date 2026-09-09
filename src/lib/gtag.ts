export const GA_EVENT = {
  call: "call_click",
  telegram: "telegram_click",
} as const;

export type GaEventName = (typeof GA_EVENT)[keyof typeof GA_EVENT];

export const trackEvent = (
  eventName: GaEventName,
  params?: Record<string, unknown>,
) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
};
