import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { LOCALE_TO_HREFLANG, SITE_URL } from "@/constants/seo";

// Bump when page content meaningfully changes.
const LAST_MODIFIED = "2026-10-03";

const sitemap = (): MetadataRoute.Sitemap =>
  routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: LAST_MODIFIED,
    alternates: {
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [
            LOCALE_TO_HREFLANG[l] ?? l,
            `${SITE_URL}/${l}`,
          ]),
        ),
        "x-default": `${SITE_URL}/${routing.defaultLocale}`,
      },
    },
  }));

export default sitemap;
