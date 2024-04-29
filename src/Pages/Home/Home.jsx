import { Banner } from "../../Components/Banner/Baneer";
import Countries from "../../Components/Countries/Countries";
import TouristSpots from "../../Components/TouristSpots/TouristSpots";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
        </div>
    );
};

export default Home;