import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import HomeLoading from "../components/loading/home";
import Footer from "../components/footer";
import ScrollButton from "../components/TopBtn";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.color = darkMode ? "#fff" : "#000";
    document.body.style.backgroundColor = darkMode ? "#fff" : "#2f3031";
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`${darkMode && "dark"} root-layout`}>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center bg-[#2f3031]">
          <HomeLoading />
        </div>
      ) : (
        <>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onClick={toggleDarkMode}
          />
          <main className="min-h-screen w-full">
            <Outlet />
            <ScrollButton />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
