import { useTranslation } from "react-i18next";
import LandingImg from "../../assets/landing.png";
import Button from "../../components/schema/Button";

const LandingSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="landing" className="w-full container h-screen">
      <div className="flex flex-row justify-between items-center gap-5 pt-52">
        <div className="flex justify-center items-center flex-1">
          <img className="max-w-full" src={LandingImg} alt="about-us" />
        </div>
        <div
          className={`${
            i18n.language === "en" ? "text-left" : "text-right"
          } flex-1`}
        >
          <h3 className="text-base max-sm:text-2xl text-gray-400 dark:text-gray-400 font-semibold mb-2">
            {t("landing.title")}
          </h3>
          <h1 className="text-3xl max-sm:text-2xl text-primary dark:text-primary font-semibold">
            {t("landing.semiDescription")}
          </h1>
          <p className="text-2xl max-sm:text-lg text-[#333] dark:text-white pt-5">
            {t("landing.description")}{" "}
          </p>
          <div className="flex justify-end mt-8">
            <Button className="py-2 px-3 rounded-xl">معرفة المزيد!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
