import "./Navbar.style.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import UK from "../../assets/uk.png";
import UAE from "../../assets/uae.png";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { Switch } from "@headlessui/react";

interface IProps {
  darkMode: boolean;
  onClick: () => void;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode, onClick }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (firstLoad) {
      setFirstLoad(false);
      setScrolling(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstLoad]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("menu-open", showMenu);
    document.body.classList.toggle("menu-closed", !showMenu);
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  const [t, i18n] = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className={`header ${
        scrolling ? "bg-[#fff]" : "bg-transparent"
      } duration-200 ${scrolling ? "bg-[#fff]" : "bg-transparent"} ${
        showMenu ? "menu-open" : ""
      } ${i18n.language === "en" ? "en" : "ar"}`}
      style={{
        display: `${scrolling === true ? "" : "none"}`,
        background: `${window.scrollY < 10 ? "transparent" : ""}`,
        animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        position: "fixed",
        top: 0,
        width: "100%",
        height: "78px",
        zIndex: "3000",
      }}
    >
      <div
        className={`menu__wrapper duration-200 ${
          scrolling ? "bg-[#fff]" : "text-transparent"
        }`}
        style={{
          background: `${window.scrollY < 10 ? "transparent" : ""}`,
          animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        }}
      >
        <div className="menu__bar">
          <Link
            to="/"
            title={t("navbar.logo")}
            aria-label="home"
            className="logo"
          >
            <img
              className={`${
                i18n.language === "en" ? "ml-0" : "max-sm:ml-0 ml-6"
              }`}
              src={LogoImg}
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="navigation mt-4 hide">
              <li>
                <Link
                  className="text-[#000] dark:text-white duration-300"
                  to="/"
                  title={t("navbar.track")}
                >
                  {t("navbar.track")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#000] dark:text-white duration-300"
                  to="/about-us"
                  title={t("navbar.about")}
                >
                  {t("navbar.about")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#000] dark:text-white duration-300"
                  to="/flight"
                  title={t("navbar.services")}
                >
                  {t("navbar.services")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#000] dark:text-white duration-300"
                  to="/services"
                  title={t("navbar.features")}
                >
                  {t("navbar.features")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#000] dark:text-white duration-300"
                  to="/partners"
                  title={t("navbar.statistics")}
                >
                  {t("navbar.statistics")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-3 mt-4">
          <div
            className={`flex flex-row items-center gap-1 ${
              i18n.language === "en" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <button
              title={t("navbar.lang")}
              className={`language-button duration-100 ${
                i18n.language === "en" ? "english" : "arabic"
              }`}
              onClick={() =>
                handleChangeLang(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? (
                <img className="w-6" src={UK} alt="english" />
              ) : (
                <img className="w-6" src={UAE} alt="arabic" />
              )}
            </button>
            <Switch
              title={t("navbar.toggle")}
              onClick={onClick}
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-[#252841]" : "bg-[#ff983f]"} ${
                i18n.language === "en" ? "flex-row" : "flex-row-reverse"
              }
          relative flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none flex justify-center items-center h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              >
                {darkMode ? (
                  <MoonIcon className="w-5 h-5 text-black" />
                ) : (
                  <SunIcon className="w-5 h-5 text-black" />
                )}
              </span>
            </Switch>
          </div>
          <div className="w-[1px] h-7 bg-slate-400 hide" />
          <div className="action-buttons hide">
            <Link
              to="/contact"
              title={t("navbar.login")}
              target="_blank"
              className={`primary flex ${
                i18n.language === "en" ? "flex-row" : "flex-row-reverse"
              } justify-between items-center gap-2 hover:to-blue-700`}
            >
              {i18n.language === "ar" ? (
                <ArrowLeftEndOnRectangleIcon className="w-5 h-5" />
              ) : (
                <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
              )}
              {t("navbar.login")}
            </Link>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="burger-menu z-20"
          type="button"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <XMarkIcon className={"fill-white"} />
          ) : i18n.language === "en" ? (
            <Bars3BottomRightIcon className={"fill-white"} />
          ) : (
            <Bars3BottomLeftIcon className={"fill-white"} />
          )}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav>
                <ul className="text-center space-y-5">
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link to="/" title="Home" onClick={handleNavLinkClick}>
                      {t("navbar.home")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/about-us"
                      title="about"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.about")}
                    </Link>
                  </li>

                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/services"
                      title="services"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.services")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/partners"
                      title="partners"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.partners")}
                    </Link>
                  </li>
                  <li className="text-black text-xl hover:text-primary duration-150">
                    <Link
                      to="/contact-us"
                      title="contact"
                      onClick={handleNavLinkClick}
                    >
                      {t("navbar.contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
