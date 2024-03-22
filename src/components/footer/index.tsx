import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="bg-[#212d5d] pb-3" dir="rtl">
      <div className="container">
        <div className="flex flex-row justify-center items-center gap-3 cursor-pointer pt-10">
          <LuInstagram className="text-white w-8 h-8" />
          <LuTwitter className="text-white w-8 h-8" />
          <LuLinkedin className="text-white w-8 h-8" />
          <LuYoutube className="text-white w-8 h-8" />
          <LuFacebook className="text-white w-8 h-8" />
        </div>
        <div className="w-full h-[1px] bg-[#565656] mt-6 mb-2" />
        <div className="w-full flex flex-row-reverse max-sm:flex-col-reverse max-sm:gap-y-1 justify-between items-center">
          <p className="w-full text-sm text-white text-center">
            .Copyright 2021 - 2024 ZenonSoftware. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
