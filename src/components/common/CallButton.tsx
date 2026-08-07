import { useTranslations } from "next-intl";

interface Props {
  tel: string;
}

const CallButton = ({ tel }: Props) => {
  const t = useTranslations("button");

  return (
    <a
      className="w-full bg-accent/70 text-white py-2 rounded-2xl text-[16px] uppercase font-bold"
      href={`tel:${tel}`}
    >
      {t("call")}
    </a>
  );
};

export default CallButton;
