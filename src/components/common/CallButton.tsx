import { useTranslations } from "next-intl";

import { PHONE_NUMBER } from "@/constants/links";

const CallButton = () => {
  const t = useTranslations("button");

  return (
    <a
      className="w-full block sm:hidden bg-accent/70 text-white text-center py-2 rounded-2xl text-[16px] uppercase font-bold"
      href={`tel:${PHONE_NUMBER}`}
    >
      {t("call")}
    </a>
  );
};

export default CallButton;
