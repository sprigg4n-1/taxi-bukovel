import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import BaseContainer from "@/components/common/BaseContainer";
import MainTitle from "@/components/common/MainTitle";

const NotFound = () => {
  const t = useTranslations("notFound");

  return (
    <main className="flex-1 my-12.5 sm:my-16 lg:my-25">
      <BaseContainer>
        <div className="flex flex-col items-center gap-4 text-center">
          <MainTitle title={t("title")} />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-primary/80">
            {t("text")}
          </p>
          <Link
            className="bg-accent/70 hover:bg-accent duration-300 ease-in-out py-2 px-10 rounded-2xl text-white text-center text-[16px] lg:text-[18px] font-bold"
            href="/"
          >
            {t("home")}
          </Link>
        </div>
      </BaseContainer>
    </main>
  );
};

export default NotFound;
