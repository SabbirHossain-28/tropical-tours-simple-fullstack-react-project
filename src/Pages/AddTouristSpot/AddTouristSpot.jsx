import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://tropical-tours-web-server.vercel.app/spots",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.insertedId){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your spot data added successfully",
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }
    })

  };
  return (
    <div>
      <Helmet>
        <title>Tropical Tours|Add Spot</title>
      </Helmet>
      <div className="max-w-7xl mx-auto mt-12 mb-12">
        <div className="bg-[#f3f9fc] p-10 rounded-md">
          <div className="text-center mb-4">
            <h2 className="font-rancho text-[#374151] text-5xl mb-4">
              Add Your Favorite Tourists Spot
            </h2>
            <p className="font-raleway text-[#1B1A1AB3] text-lg">
              This is where you can share your favorite tourist spots with the
              world. Simply fill out the form below with all the necessary
              information about your chosen destination.Tell us about the spot
              unique features, historical significance, and any insider tips you
              have for fellow travelers. Do not forget to upload stunning photos
              to showcase the beauty of the location.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="font-raleway  p-2 w-full"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="name"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your full-name"
                    className="font-raleway  p-2 w-full"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="spot"
                  >
                    Spot Name
                  </label>
                  <input
                    type="text"
                    name="spot"
                    id="spot"
                    placeholder="Enter spot name"
                    className="font-raleway  p-2 w-full"
                    {...register("spot", { required: true })}
                  />
                  {errors.spot && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="Chef"
                  >
                    Country Name
                  </label>
                  <select
                    className="w-full outline-none p-2"
                    name="country_name"
                    id="country_name"
                    {...register("country_name", { required: true })}
                  >
                    <option value="">Select Country name</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                  </select>
                  {errors.country_name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter spot location"
                    className="font-raleway  p-2 w-full"
                    {...register("location", { required: true })}
                  />
                  {errors.location && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="cost"
                  >
                    Average Cost
                  </label>
                  <input
                    type="text"
                    name="cost"
                    id="cost"
                    placeholder="Enter average cost"
                    className="font-raleway  p-2 w-full"
                    {...register("cost", { required: true })}
                  />
                  {errors.cost && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="season"
                  >
                    Seasonality
                  </label>
                  <input
                    type="text"
                    name="season"
                    id="season"
                    placeholder="Enter spot seasonality"
                    className="font-raleway  p-2 w-full"
                    {...register("season", { required: true })}
                  />
                  {errors.season && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="time"
                  >
                    Travel time
                  </label>
                  <input
                    type="text"
                    name="time"
                    id="time"
                    placeholder="Enter travel time"
                    className="font-raleway  p-2 w-full"
                    {...register("time", { required: true })}
                  />
                  {errors.time && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="visitors"
                  >
                    Total visitor/Per year
                  </label>
                  <input
                    type="text"
                    name="visitors"
                    id="visitors"
                    placeholder="Enter visitors quantity "
                    className="font-raleway  p-2 w-full"
                    {...register("visitors", { required: true })}
                  />
                  {errors.visitors && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className="block font-raleway text-xl text-[#1B1A1ACC]"
                    htmlFor="description"
                  >
                    Spot Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter spot description"
                    className="font-raleway  p-2 w-full"
                    {...register("description", { required: true })}
                  />
                  {errors.description && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div>
                <label
                  className="block font-raleway text-xl text-[#1B1A1ACC]"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  type="text"
                  name="photo"
                  id="Photo"
                  placeholder="Enter photo URL"
                  className="font-raleway  p-2 w-full"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <input
                    className="font-raleway font-semibold text-2xl text-white bg-[#2f9fb8] rounded-sm p-1 md:p-2"
                    type="submit"
                    value="Add Spot"
                  />
                </div>
                <div className="">
                  <Link to={"/"}>
                    <p className="flex items-center gap-2">
                      <FaArrowLeft></FaArrowLeft>
                      <span className="text-[#374151] text-3xl font-rancho">
                        Back to home
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSpot;
