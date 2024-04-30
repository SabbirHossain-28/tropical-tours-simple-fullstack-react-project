import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountriesCard = ({ countryData }) => {
  const { photo, country_name, description } = countryData;
  return (
    
    <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md dark:bg-[#18181B] md:w-[350px]">
        <Link to={`/countrySpots/${country_name}`}>
      <img
        className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
        src={photo}
        alt="country_image"
      />
      <div className="space-y-2">
        <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">
          {country_name}
        </h2>
        <div className="flex gap-1 font-raleway">
          <p>{description}</p>
        </div>
      </div>
      </Link>
    </div>
  
  );
};

CountriesCard.propTypes = {
  countryData: PropTypes.object,
};
export default CountriesCard;
