import { useTranslation } from "react-i18next";
import AboutImg from "../../assets/about.png";
import { LuBadgeInfo } from "react-icons/lu";

const AboutSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="about"
      className="w-full container mb-32"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <div className="flex flex-row max-sm:flex-col-reverse justify-between items-center">
        <div className="flex-1">
          <img src={AboutImg} alt="about" />
        </div>
        <div
          className={`${
            i18n.language === "en" ? "text-left" : "text-right"
          } flex-1`}
        >
          <h3 className="text-3xl mb-5 text-black dark:text-white max-sm:text-center">
            <span className="mark"> {t("about.title")}</span>
          </h3>
          <h4 className="text-black dark:text-white max-sm:text-center">
            {t("about.description")}
          </h4>

          <ul className="w-full mt-10 flex flex-col justify-start items-start">
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1 text-black dark:text-white">
                {t("about.info_1")}
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1 text-black dark:text-white">
                {t("about.info_2")}
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
            <li className="flex flex-row items-start justify-end mt-1 gap-3 w-full">
              <p className="flex-1 text-black dark:text-white">
                {t("about.info_3")}
              </p>
              <LuBadgeInfo className="w-6 h-6 text-primary" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
