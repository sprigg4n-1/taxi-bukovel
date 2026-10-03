import { useTranslations } from "next-intl";

import BaseContainer from "../common/BaseContainer";
import MainTitle from "../common/MainTitle";
import { faqItems } from "@/constants/faq";

const FaqMain = () => {
  const t = useTranslations("faq");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((id) => ({
      "@type": "Question",
      name: t(`items.${id}.q`),
      acceptedAnswer: { "@type": "Answer", text: t(`items.${id}.a`) },
    })),
  };

  return (
    <BaseContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col gap-5">
        <div className="mb-4 flex text-center items-center flex-col justify-center">
          <MainTitle title={t("title")} />
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-primary/80">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-220 flex-col gap-3">
          {faqItems.map((id) => (
            <details
              key={id}
              className="group rounded-2xl border border-border bg-card p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-primary">
                  {t(`items.${id}.q`)}
                </h3>
                <span className="text-accent transition-transform group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-[12px] sm:text-[14px] lg:text-[16px] text-muted-foreground">
                {t(`items.${id}.a`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </BaseContainer>
  );
};

export default FaqMain;
