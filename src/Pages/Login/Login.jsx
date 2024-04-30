import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import lottie2 from "../../../public/Lottie/loginimg.json";
import { AuthContext } from "../../AuthContextProvider/ContextProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin, signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const location=useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toastId=useRef(null);

  const onSubmit = (data) => {
    const { email, password } = data;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (
      (password.length < 6 || !passwordRegex.test(password)) &&
      !toast.isActive(toastId.current)
    ) {
      return (toastId.current = toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter"
      ));
    }
    userLogin(email,password)
    .then(userCredential=>{
        if(userCredential){
            Swal.fire({
                title: "Login Successful",
                text: "Explore Tropical Tours",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
              })
              .then(result=>{
                if(result.isConfirmed){
                  navigate(location?.state? location.state:"/")
                }
              })
        }
    })
    .catch(error=>{
        if(error && !toast.isActive(toastId.current)){
          toastId.current=toast.error("Invalid email and password");
        }
    })
  };
  const handleGoogleSignin=()=>{
    signInWithGoogle()
    .then(userCredential=>{
        if(userCredential){
            Swal.fire({
                title: "Successfully Login With Google",
                text: "Explore Tropical Tours",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
              })
              .then(result=>{
                if(result.isConfirmed){
                  navigate(location?.state? location.state:"/")
                }
              })
        }
    })
    .catch(error=>{
        if(error && !toast.isActive(toastId.current)){
          toastId.current=toast.error("This Google account is already used");
        }
    })
  }
  const handleGithubSignin=()=>{
    signInWithGitHub()
    .then(userCredential=>{
        if(userCredential){
            Swal.fire({
                title: "Successfully Login With Google",
                text: "Explore Tropical Tours",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
              })
              .then(result=>{
                if(result.isConfirmed){
                  navigate(location?.state? location.state:"/")
                }
              })
        }
    })
    .catch(error=>{
        if(error && !toast.isActive(toastId.current)){
          toastId.current=toast.error("This Github account is already used");
        }
    })
  }

  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="p-14">
      <Helmet>
        <title>Tropical Tours | Login</title>
      </Helmet>
      <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl mx-auto border shadow-xl rounded-lg">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <Lottie style={{ width: "100%" }} animationData={lottie2} />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl text-[#374151] dark:text-white font-bold font-rancho">
              Login here
            </h1>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
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
                  value="Login"
                />
              </div>
            </form>
            <div className="divider font-rancho text-[#374151] text-lg font-bold">OR</div>
            <div className="text-center">
              <div className="mb-4">
                <p className="font-rancho text-[#374151] text-2xl font-bold">Log in with</p>
              </div>
              <div className="flex justify-center gap-4 mb-4">
                <button onClick={handleGoogleSignin} className="btn">
                  <FcGoogle></FcGoogle>Google
                </button>
                <button onClick={handleGithubSignin} className="btn">
                        <FaGithub></FaGithub>Github
                      </button>
              </div>
            </div>
            <div className="text-center">
              <p className="font-raleway text-[#374151] font-medium ">
                Do not have any account?Please{" "}
                <span className="text-xl text-blue-600 font-rancho font-medium ">
                  <Link to="/register">Register First</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={4000} />
    </div>
  );
};

export default Login;
