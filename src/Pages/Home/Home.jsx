import { useEffect, useState } from "react";
import { Banner } from "../../Components/Banner/Baneer";
import Countries from "../../Components/Countries/Countries";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import ContactUs from "../../Components/ContactUs/ContactUs";
import FeqSection from "../../Components/FAQ/FaqSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("localTheme");
    setTheme(storedTheme || "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("localTheme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  
  return (
    <div className="p-4 md:p-6 lg:p-0">
      <Helmet>
        <title>Tropical Tours | Home</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-4">
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on border p-2 bg-[#2f9fb8] text-white font-semibold font-rancho">LIGHT MODE</div>
        <div className="swap-off border p-2 bg-[#2f9fb8] font-semibold font-rancho">DARK MODE</div>
      </label>
      </div>
      <Banner></Banner>
      <TouristSpots></TouristSpots>
      <Countries></Countries>
      <FeqSection></FeqSection>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
