import { MdAttachMoney, MdLocationOn } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { LuGift } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const FeatureSection = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section
      id="features"
      className="w-full container mb-32"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <div className="features-background">
        <h3 className="text-4xl text-center mb-12 text-black dark:text-white">
          <span className="mark-z">{t("features.title")}</span>
        </h3>
        <div className="flex flex-row max-sm:flex-col justify-between gap-5 relative z-10">
          <div className="flex flex-col justify-between items-center gap-5">
            <div className="w-[350px] bg-white dark:bg-white min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-10 max-sm:mt-0">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <MdAttachMoney className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">{t("features.t1")}</h3>
              <p className="text-[#000000de] dark:text-black text-center text-sm">
                {t("features.d1")}
              </p>
            </div>
            <div className="w-[350px] bg-white dark:bg-white min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-12 max-sm:mt-0">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <FaStore className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">{t("features.t2")}</h3>
              <p className="text-[#000000de] dark:text-black text-center text-sm">
                {t("features.d2")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <div className="w-[350px] bg-white dark:bg-white min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 max-sm:mt-0">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <MdLocationOn className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">{t("features.t3")}</h3>
              <p className="text-[#000000de] dark:text-black text-center text-sm">
                {t("features.d3")}
              </p>
            </div>
            <div className="w-[350px] bg-white dark:bg-white min-h-[235px] flex flex-col justify-between items-center rounded-md shadow-lg p-5 mt-4 max-sm:mt-0">
              <div className="bg-primary border-[6px] border-[#ffffffcc] p-5 rounded-full mb-3">
                <LuGift className="text-white w-12 h-12" />
              </div>
              <h3 className="text-black text-xl mb-1">{t("features.t4")}</h3>
              <p className="text-[#000000de] dark:text-black text-center text-sm">
                {t("features.d4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
