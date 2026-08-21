import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  LOCALE_TO_HREFLANG,
  LOCALE_TO_OG_LOCALE,
  SITE_URL,
} from "@/constants/seo";
import { PHONE_NUMBER } from "@/constants/links";

import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";

import "../globals.css";
import FixedContact from "@/components/common/FixedContact";
import heroBg2 from "@/images/hero/hero-bg-2.jpg";
import ogImageSrc from "@/images/og.png";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const ogImage = {
    url: ogImageSrc.src,
    width: ogImageSrc.width,
    height: ogImageSrc.height,
    alt: t("title"),
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [LOCALE_TO_HREFLANG[l] ?? l, `/${l}`]),
        ),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Taxi Bukovel",
      type: "website",
      locale: LOCALE_TO_OG_LOCALE[locale] ?? locale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => LOCALE_TO_OG_LOCALE[l] ?? l),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImageSrc.src],
    },
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

  const tLocations = await getTranslations({ locale, namespace: "locations" });

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/TaxiService",
    name: "Taxi Bukovel",
    image: `${SITE_URL}${heroBg2.src}`,
    telephone: PHONE_NUMBER,
    url: `${SITE_URL}/${locale}`,
    areaServed: (
      ["bukovel", "tatariv", "yaremche", "mykulychyn", "polyanytsia"] as const
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
  };

  return (
    <html
      lang={LOCALE_TO_HREFLANG[locale] ?? locale}
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <NextIntlClientProvider>
          <MainHeader />
          {children}
          <FixedContact />
          <MainFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
