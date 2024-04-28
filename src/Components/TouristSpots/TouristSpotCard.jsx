import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TouristSpotCard = ({ spotData }) => {
    const {_id,photo,spot,location,season}=spotData

  return (
    <div>
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg  dark:bg-[#18181B] border-2">
        <img
          className="h-[275px]  rounded-lg object-cover"
          src={photo}
          alt="card navigate ui"
        />
        <div className="h-28">
          <h1 className="text-lg font-semibold ">{spot}</h1>
          <p className="text-sm text-gray-500 dark:text-white/60 mb-2">
            {location}
          </p>
          <p className="text-sm text-gray-500 dark:text-white/60">
            {season}
          </p>
          
        </div>
        <div className="flex gap-4">
          <Link to={`/spotDetails/${_id}`}>
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

TouristSpotCard.propTypes={
    spotData:PropTypes.object,
}
export default TouristSpotCard;
