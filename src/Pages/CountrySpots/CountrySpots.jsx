import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountrySpots = () => {
  const [selectedCountrySpots, setSelectedCountrySpots] = useState([]);
  const { country_name } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/spoots?country_name=${country_name}`)
      .then((res) => res.json())
      .then((data) => setSelectedCountrySpots(data));
  }, [country_name]);
  console.log(selectedCountrySpots);
  return (
    <div></div>
  );
};

export default CountrySpots;
