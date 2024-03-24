import {
  LuBadgeCheck,
  LuRocket,
  LuRotateCcw,
  LuStore,
  LuTruck,
} from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section
      id="services"
      className="w-full container mb-32"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <h3 className="text-4xl text-center mb-12 text-black dark:text-white">
        <span className="mark-z">{t("services.title")}</span>
      </h3>
      <div className="flex flex-col justify-between items-center gap-5">
        <div className="flex flex-row max-sm:flex-col justify-between items-center gap-5">
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuTruck className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t1")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d1")}
            </p>
          </div>
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuRocket className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t2")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d2")}
            </p>
          </div>
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuBadgeCheck className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t3")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d3")}
            </p>
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-col justify-between items-center gap-5">
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuRotateCcw className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t4")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d4")}
            </p>
          </div>
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <LuStore className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t5")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d5")}
            </p>
          </div>
          <div className="w-[350px] bg-transparent dark:bg-white min-h-[250px] flex flex-col justify-between items-center rounded-md shadow-lg p-5">
            <div className="bg-primary p-5 rounded-full mb-3">
              <FaMoneyBillWave className="text-white w-12 h-12" />
            </div>
            <h3 className="text-black text-xl mb-1">{t("services.t6")}</h3>
            <p className="text-[#000000de] dark:text-black text-center text-sm">
              {t("services.d6")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
