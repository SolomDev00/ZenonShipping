import { useTranslation } from "react-i18next";

const StatisticSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="statistics" className="w-full">
      <div className="statistic-background">
        <div className="flex flex-row max-sm:flex-col justify-between gap-10 relative z-10 container">
          <div
            className="flex-1 flex flex-col justify-between max-sm:justify-center max-sm:items-center max-sm:space-y-5"
            dir={i18n.language === "ar" ? "ltr" : "rtl"}
          >
            <div
              className={`flex ${
                i18n.language === "en"
                  ? "flex-col space-y-8"
                  : "flex-row space-y-0"
              } max-sm:flex-col justify-between`}
            >
              <div className="flex flex-col justify-between items-end gap-y-4 max-sm:mr-0 max-sm:items-center">
                <h4 className="text-4xl text-white">
                  <span
                    className={`mark ${
                      i18n.language === "en" ? "mr-[-50px]" : "mr-0"
                    } max-sm:mr-0`}
                  >
                    23
                  </span>
                </h4>
                <h4 className="text-2xl text-white">
                  {t("statistics.places")}
                </h4>
              </div>
              <div className="flex flex-col justify-between items-end gap-y-4 mr-5 max-sm:items-center">
                <h4 className="text-4xl text-white">
                  <span className="mark">148K</span>
                </h4>
                <h4 className="text-2xl text-white">
                  {t("statistics.shipment")}
                </h4>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end gap-y-4 mr-5 max-sm:mr-0 max-sm:items-center">
              <h4 className="text-4xl text-white">
                <span className="mark">920</span>
              </h4>
              <h4 className="text-2xl text-white">
                {t("statistics.customers")}
              </h4>
            </div>
          </div>
          <div
            className={`bg-primary flex-1 px-10 py-16 max-sm:text-center rounded-lg ${
              i18n.language === "en" ? "text-left" : "text-right"
            }`}
          >
            <h3 className="text-[1.7rem] max-sm:text-lg text-white mb-10">
              {t("statistics.title")}
            </h3>
            <p className="text-sm text-white/90">
              {t("statistics.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticSection;
