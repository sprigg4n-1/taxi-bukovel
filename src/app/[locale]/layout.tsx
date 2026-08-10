import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";

import "../globals.css";
import FixedContact from "@/components/common/FixedContact";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Taxi Bukovel",
  description: "Taxi Bukovel",
};

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

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative">
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
