import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadinglottie from "../../../public/Lottie/loading.json"
import CountrySpotsCard from "../../Components/ContrySpotsCard/CountrySpotsCard";
import lottie4 from "../../../public/Lottie/nodatalottie.json"

const CountrySpots = () => {
    const [selectedCountrySpots, setSelectedCountrySpots] = useState([]);
    const [loading,setLoading]=useState(true)
    const { country_name } = useParams();
    useEffect(() => {
      fetch(`https://tropical-tours-web-server.vercel.app/spoots?country_name=${country_name}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedCountrySpots(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Make sure to set loading to false in case of an error
        });
    }, [country_name]);
  
    return (
      loading ? (
        <div className="flex justify-center items-center">
          <Lottie style={{width:"300px"}} animationData={loadinglottie} />
        </div>
      ) : (
        <div className="bg-[#f3f9fc] max-w-7xl mx-auto mt-12 mb-12 p-8">
          <div className="text-center">
            { selectedCountrySpots.length===0?<h2 className="text-xl md:text-2xl lg:text-5xl font-bold font-rancho text-[#374151] mb-6">Currently We Have No Tourist Spot Data Of {country_name}</h2>:
                <h2 className="text-xl md:text-2xl lg:text-5xl font-bold font-rancho text-[#374151] mb-6">These are Some Popular Tourist Spots Of {country_name}</h2>
                }
          </div>
          {
            selectedCountrySpots.length === 0 ? (
              <div className="flex justify-center items-center">
                <Lottie style={{width:"500px"}} animationData={lottie4} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  selectedCountrySpots.map((spotsData, idx) => <CountrySpotsCard key={idx} spotsData={spotsData} />)
                }
              </div>
            )
          }
        </div>
      )
    );
  };
  
  export default CountrySpots;
  