import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  LOCALE_TO_HREFLANG,
  SITE_URL,
  GA_ID,
  GSC_VERIFICATION,
  THEME_COLOR,
} from "@/constants/seo";
import { buildPageMetadata } from "@/lib/metadata";
import { PHONE_NUMBER } from "@/constants/links";
import { destinationRoutes } from "@/constants/destinations";

import { GoogleAnalytics } from "@next/third-parties/google";

import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";

import "../globals.css";
import FixedContact from "@/components/common/FixedContact";
import ogImageSrc from "@/images/og.png";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    ...buildPageMetadata({
      locale,
      title: t("title"),
      description: t("description"),
      getPath: () => "",
    }),
    ...(GSC_VERIFICATION && { verification: { google: GSC_VERIFICATION } }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale });
  const tLocations = await getTranslations({ locale, namespace: "locations" });

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    additionalType: "https://schema.org/TaxiService",
    name: "Taxi Bukovel",
    alternateName: locale === "ua" ? "Таксі Татарів" : "Taxi Tatariv",
    image: `${SITE_URL}${ogImageSrc.src}`,
    telephone: PHONE_NUMBER,
    url: `${SITE_URL}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: tLocations("tatariv"),
      addressRegion: t("metadata.region"),
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.3433,
      longitude: 24.5791,
    },
    areaServed: (
      ["tatariv", "bukovel", "polyanytsia", "yaremche", "mykulychyn"] as const
    ).map((id) => ({ "@type": "Place", name: tLocations(id) })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t("destinations.title"),
      itemListElement: destinationRoutes.map((route) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "TaxiService",
          name: t("destinations.routeName", {
            from: tLocations(route.from),
            to: tLocations(route.to),
          }),
        },
      })),
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: "Taxi Bukovel",
    inLanguage: LOCALE_TO_HREFLANG[locale] ?? locale,
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <html
      lang={LOCALE_TO_HREFLANG[locale] ?? locale}
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessJsonLd, webSiteJsonLd]),
          }}
        />
        <NextIntlClientProvider>
          <MainHeader />
          {children}
          <FixedContact />
          <MainFooter />
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
