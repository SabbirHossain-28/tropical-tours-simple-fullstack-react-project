import { Helmet } from "react-helmet-async";
import { CgDollar } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import { useLoaderData} from "react-router-dom";

const SpotDetails = () => {
    
  const loadedSpotDetailsData = useLoaderData();
  console.log(loadedSpotDetailsData);
  const {photo,spot,cost,season,visitors,time,location,description}=loadedSpotDetailsData;
  return (
    <section className="flex min-h-[700px]  max-w-7xl mx-auto items-center justify-center bg-[#f3f9fc] px-8 mt-12 mb-12">
      <Helmet>
        <title>Tropical Tours|Spot Details</title>
      </Helmet>
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        <div className="max-w-lg space-y-3">
        <div>
            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-rancho leading-tight text-gray-900">Details Information about this spot</h1>
        </div>
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold font-rancho leading-tight text-gray-900">
            {spot}
          </h2>
          <p className="lg:text-lg sm:text-base text-sm text-gray-600">
            {location}
          </p>
          <p className="lg:text-lg font-semibold sm:text-base text-sm text-gray-600">
            Seasonality: <span className="font-normal">{season}</span>
          </p>
          <p className="lg:text-lg font-semibold sm:text-base text-sm text-gray-600">
            Total visitors: <span className="font-normal">Visits {visitors}people/<sub>year</sub></span>
          </p>
          <p className="lg:text-lg font-semibold sm:text-base text-sm text-gray-600">
            Travel time: <span className="font-normal">{time}</span>
          </p>
          <p className="lg:text-lg font-semibold sm:text-base text-sm text-gray-600 flex items-center gap-1">
            Average cost for visit:<span className="font-normal">{cost}</span><CgDollar></CgDollar>
          </p>   
          <p className="lg:text-lg font-semibold sm:text-base text-sm text-gray-600">
            Description:<span className="font-normal">{description}</span></p>   
          <div className="flex space-x-4">
            <button onClick={()=>window.history.back()} className="inline-flex flex-nowrap items-center justify-center rounded-md text-xl font-medium font-rancho ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
            <FaArrowLeft className="mr-2"></FaArrowLeft>Go Back
            </button>
          </div>
          <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
        </div>
        <div className="relative">
          <img
            src={photo}
            className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-xl md:rounded-b-full lg:rounded-tl-full object-cover"
            alt="Tourist Spot image"
          />
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;
