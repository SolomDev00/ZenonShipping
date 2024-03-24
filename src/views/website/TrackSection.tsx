import { HashtagIcon } from "@heroicons/react/20/solid";
import Button from "../../components/schema/Button";
import { useTranslation } from "react-i18next";

const TrackSection = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="track"
      className="w-full mb-24"
      dir={i18n.language === "ar" ? "ltr" : "rtl"}
    >
      <div
        className={
          i18n.language === "en" ? "track-en-background" : "track-background"
        }
      >
        <div className="h-[10vh] flex flex-col justify-start max-sm:justify-center max-sm:items-center items-end px-40">
          <h3 className="text-white text-2xl font-semibold mb-5 max-sm:w-[500px] max-sm:text-center">
            {t("track.enter")}
          </h3>
          <form className="bg-white rounded-full w-[400px] px-1 py-1 flex flex-row">
            <Button className="w-[350px] px-8 rounded-full text-white text-base">
              {t("track.btn")}
            </Button>
            <input
              dir={i18n.language === "en" ? "ltr" : "rtl"}
              className="mx-1 text-black focus:outline-none focus:border-0 border-0 text-md w-full bg-transparent duration-200"
            />
            <HashtagIcon
              className={`w-10 ${
                i18n.language === "en" ? "ml-4" : "mr-4"
              } text-gray-500`}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
