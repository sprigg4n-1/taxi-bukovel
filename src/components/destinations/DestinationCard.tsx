import { useTranslations } from "next-intl";

import { DestinationRoute } from "@/constants/destinations";

interface Props {
  route: DestinationRoute;
}

const DestinationCard = ({ route }: Props) => {
  const t = useTranslations();

  return (
    <div className="bg-card text-card-foreground rounded-2xl border border-border flex flex-col gap-2">
      <h3 className="font-bold text-[16px] flex items-center gap-3 justify-center border-b border-border p-2">
        {t(`locations.${route.from}`)}
        <span className="text-muted-foreground">⇄</span>
        {t(`locations.${route.to}`)}
      </h3>

      <div className="flex flex-col items-center justify-center gap-2 p-2 text-[12px] text-muted-foreground">
        <span>
          {t("destinations.distanceLabel")}: {route.distanceKm}{" "}
          {t("destinations.distanceUnit")}
        </span>
        <span>
          {t("destinations.durationLabel")}: {route.durationMinutes}{" "}
          {t("destinations.durationUnit")}
        </span>

        <span className="text-accent font-bold text-[14px]">
          {t("destinations.priceLabel")}: {route.price}{" "}
          {t("destinations.priceCurrency")}
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
