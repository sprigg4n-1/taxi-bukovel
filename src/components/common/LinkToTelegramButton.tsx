import { useTranslations } from "next-intl";
import Link from "next/link";

const LinkToTelegramButton = () => {
  const t = useTranslations("button");

  return (
    <Link
      className="bg-blue-500/70 hover:bg-blue-500 duration-300 ease-in-out py-2 px-10 rounded-2xl text-[14px] sm:text-[16px] lg:text-[18px]"
      href="https://t.me/Bodich007"
      target="_blank"
    >
      {t("telegram")}
    </Link>
  );
};

export default LinkToTelegramButton;
