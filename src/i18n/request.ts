import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import enMessages from "../messages/en.json";
import uaMessages from "../messages/ua.json";

const messagesByLocale = {
  en: enMessages,
  ua: uaMessages,
} satisfies Record<(typeof routing.locales)[number], typeof enMessages>;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesByLocale[locale as (typeof routing.locales)[number]],
  };
});
