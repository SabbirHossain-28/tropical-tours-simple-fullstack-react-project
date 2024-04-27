import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContextProvider/ContextProvider";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formImage1 from "../../assets/images/draw1.jpg";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, userLogOut } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const toastId = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, email, photo, password } = data;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (
      (password.length < 6 || !passwordRegex.test(password)) &&
      !toast.isActive(toastId.current)
    ) {
      return (toastId.current = toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter"
      ));
    }
    createUser(email, password).then((userCredential) => {
      updateUserProfile(name, photo).then(() => {
        console.log("User update successfully");
      });
      if (userCredential) {
        Swal.fire({
          title: "Registration Successful",
          text: "Now please login to your account",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            userLogOut();
            navigate("/login");
          }
        });
      }
    })
    .catch(error=>{
        if(error && !toast.isActive(toastId.current)){
            toastId.current=toast.error("User is already registered");
        }
    })
  };
  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-14 ">
      <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row gap-4 border rounded-lg shadow-xl p-4">
        <div className=" lg:w-1/2 flex justify-center items-center">
          <img className="w-full" src={formImage1} alt="" />
        </div>
        <div className=" lg:w-1/2 p-4">
          <div className="text-center mb-4">
            <h1 className="text-4xl text-[#374151] font-bold font-rancho">
              Create an account here
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                className="bg-slate-100 w-full p-2 text-[#1B1A1A99] rounded-md font-raleway"
                type="text"
                name="name"
                placeholder="Your name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <input
                className="bg-slate-100 w-full p-2 text-[#1B1A1A99] rounded-md font-raleway"
                type="email"
                name="email"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div>
              <input
                className="bg-slate-100 w-full p-2 text-[#1B1A1A99] rounded-md font-raleway"
                type="url"
                name="photo"
                placeholder="Your photo URL"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="relative">
              <input
                className="bg-slate-100 w-full p-2 text-[#1B1A1A99] rounded-md font-raleway"
                type={showPassword ? "text" : "password"}
                name="pasword"
                placeholder="Your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <span
                onClick={handlePasswordShowToggler}
                className="absolute right-2 top-3"
              >
                {showPassword ? (
                  <IoMdEyeOff className="text-gray-400 text-xl"></IoMdEyeOff>
                ) : (
                  <IoMdEye className="text-gray-400 text-xl "></IoMdEye>
                )}
              </span>
            </div>
            <div>
              <input
                className="bg-slate-100 w-full p-2 text-[#1B1A1A99] rounded-md hover:bg-blue-300 transition-all duration-500 hover:scale-90 font-raleway"
                type="submit"
                value="Create Account"
              />
            </div>
            <div>
              <p className="font-raleway text-[#374151] font-medium ">
                Already have an account?Please{" "}
                <span className="text-xl text-blue-600 font-rancho font-medium ">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={4000}
      ></ToastContainer>
    </div>
  );
};

export default Register;
