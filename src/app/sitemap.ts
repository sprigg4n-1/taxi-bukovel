import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { LOCALE_TO_HREFLANG, SITE_URL } from "@/constants/seo";

const sitemap = (): MetadataRoute.Sitemap =>
  routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          LOCALE_TO_HREFLANG[l] ?? l,
          `${SITE_URL}/${l}`,
        ]),
      ),
    },
  }));

export default sitemap;
