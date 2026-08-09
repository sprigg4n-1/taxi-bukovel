import { useTranslations } from "next-intl";
import Link from "next/link";

import { TELEGRAM_LINK } from "@/constants/links";

const LinkToTelegramButton = () => {
  const t = useTranslations("button");

  return (
    <Link
      className="bg-blue-500/70 hover:bg-blue-500 duration-300 ease-in-out py-2 px-10 rounded-2xl text-white text-center w-full max-w-fit block text-[16px] lg:text-[18px] font-bold"
      href={TELEGRAM_LINK}
      target="_blank"
    >
      {t("telegram")}
    </Link>
  );
};

export default LinkToTelegramButton;
