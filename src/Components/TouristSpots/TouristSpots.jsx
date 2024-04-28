import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";

const TouristSpots = () => {
    const loadedSpotsData=useLoaderData()
    return (
        <div className="max-w-7xl mx-auto bg-[#f3f9fc] p-6">
            <div className="text-center">
                <h2 className="text-4xl font-rancho text-[#374151]">Explore Popular Tourist Destinations</h2>
                <p className="font-raleway text-[#1B1A1AB3] text-base">Discover the gems of travel with our curated collection of popular tourist spots. From vibrant cityscapes to serene natural wonders, embark on a journey of exploration and adventure. Immerse yourself in captivating cultures, indulge in culinary delights, and create unforgettable memories at these iconic destinations. Start your adventure today and unlock the wonders of the world with us.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    loadedSpotsData.slice(0,6).map((spotData,idx) =><TouristSpotCard key={idx} spotData={spotData}></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;