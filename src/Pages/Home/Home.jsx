import { Banner } from "../../Components/Banner/Baneer";
import Countries from "../../Components/Countries/Countries";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";
import {  useTheme } from "../../Theme/ThemeContext";

const Home = () => {
    const { theme } = useTheme();
    return (
        <div className={`theme-${theme}`}>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;