import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";

const Countries = () => {
    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch("https://tropical-tours-web-server.vercel.app/countries")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto mb-12 mt-12 bg-[#f3f9fc] p-8">
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl lg:text-5xl font-bold font-rancho text-[#374151] mb-6">Discover Exotic Destinations with Tropical Tours</h2>
                <p className="font-raleway text-[#1B1A1AB3] text-sm md:text-base lg:text-base">Embark on a journey to some of the most enchanting destinations in Southeast Asia with Tropical Tours. From the lush landscapes of Vietnam to the pristine beaches of Thailand, each destination offers a unique blend of culture, history, and natural beauty waiting to be discovered. Explore our curated selection of destinations below and start planning your next adventure today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map((countryData,idx)=><CountriesCard key={idx} countryData={countryData}></CountriesCard>)
                }
            </div>
        </div>
    );
};

export default Countries;