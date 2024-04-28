import { useLoaderData } from "react-router-dom";
import AllSpotsCard from "./AllSpotsCard";

const AllSpots = () => {
    const allTouristSpotsData=useLoaderData();
    console.log(allTouristSpotsData);
    return (
        <div className="max-w-7xl mx-auto bg-[#f3f9fc] p-8 mb-12">
        <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold font-rancho text-[#374151] mb-6">Explore All Popular Tourist Spots</h2>
            <p className="font-raleway text-[#1B1A1AB3] text-sm md:text-base lg:text-base">Welcome to Tropical Tours Southeast Asia Adventure! Immerse yourself in the exotic charm of Southeast Asia as you explore our curated collection of stunning tourist spots. From the azure shores of Bali to the lush jungles of Vietnam, embark on a virtual journey through this vibrant and diverse region.Let Tropical Tours be your guide as you discover the hidden gems and breathtaking landscapes of Southeast Asia from the comfort of your home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
               allTouristSpotsData.map((spotsData,idx)=><AllSpotsCard key={idx} spotsData={spotsData}></AllSpotsCard>) 
            }
        </div>
    </div>
    );
};

export default AllSpots;