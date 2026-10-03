import type { Metadata } from "next";

import { routing } from "@/i18n/routing";
import {
  LOCALE_TO_HREFLANG,
  LOCALE_TO_OG_LOCALE,
  SITE_URL,
} from "@/constants/seo";
import ogImageSrc from "@/images/og.png";

interface PageMetadataInput {
  locale: string;
  title: string;
  description: string;
  // Path after the locale prefix for a given locale, e.g. "" or "/taksi-tatariv-bukovel".
  getPath: (locale: string) => string;
}

export const buildPageMetadata = ({
  locale,
  title,
  description,
  getPath,
}: PageMetadataInput): Metadata => {
  const url = (l: string) => `/${l}${getPath(l)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [LOCALE_TO_HREFLANG[l] ?? l, url(l)]),
        ),
        "x-default": url(routing.defaultLocale),
      },
    },
    openGraph: {
      title,
      description,
      url: url(locale),
      siteName: "Taxi Bukovel",
      type: "website",
      locale: LOCALE_TO_OG_LOCALE[locale] ?? locale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => LOCALE_TO_OG_LOCALE[l] ?? l),
      images: [
        {
          url: ogImageSrc.src,
          width: ogImageSrc.width,
          height: ogImageSrc.height,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageSrc.src],
    },
  };
};
