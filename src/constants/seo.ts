// Vercel redirects the apex domain to www (308), so www is the canonical host — swap via NEXT_PUBLIC_SITE_URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taxi-bukovel.com";

// Our routing locale is "ua" (matches the URL prefix), but hreflang requires
// the ISO 639-1 language code — Ukrainian is "uk", not "ua" (that's the
// ISO 3166-1 country code and is not a valid hreflang value).
export const LOCALE_TO_HREFLANG: Record<string, string> = {
  ua: "uk",
  en: "en",
};

// Open Graph's og:locale wants underscore_TERRITORY form (e.g. "uk_UA"), unlike hreflang.
export const LOCALE_TO_OG_LOCALE: Record<string, string> = {
  ua: "uk_UA",
  en: "en_US",
};
