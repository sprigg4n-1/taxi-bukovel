import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { THEME_COLOR } from "@/constants/seo";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Taxi Bukovel",
  short_name: "Taxi Bukovel",
  start_url: `/${routing.defaultLocale}`,
  display: "standalone",
  background_color: THEME_COLOR,
  theme_color: THEME_COLOR,
  icons: [
    { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  ],
});

export default manifest;
