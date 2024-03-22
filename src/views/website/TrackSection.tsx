import { HashtagIcon } from "@heroicons/react/20/solid";
import Button from "../../components/schema/Button";

const TrackSection = () => {
  return (
    <section id="track" className="w-full mb-24">
      <div className="track-background">
        <div className="h-[10vh] flex flex-col justify-start items-end px-40">
          <h3 className="text-white text-2xl font-semibold mb-5">
            أدخل كود الشحنة للتتبع
          </h3>
          <form className="bg-white rounded-full w-[380px] px-1 py-1 flex flex-row">
            <Button className="w-[220px] rounded-full text-white text-base">
              تتبع الشحنة
            </Button>
            <input
              dir="rtl"
              className="mx-1 border-transparent text-black focus:outline-none rounded-md text-md w-full bg-transparent duration-200"
            />
            <HashtagIcon className="w-10 mr-4 text-gray-500" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
