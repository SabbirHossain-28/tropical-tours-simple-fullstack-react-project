import { useContext } from "react";
import Lottie from "lottie-react";
import { AuthContext } from "../AuthContextProvider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import lottie3 from "../../public/Lottie/loading.json"

const PrivetRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className="min-h-screen  flex items-center justify-center"><Lottie style={{ width: "300px" }} animationData={lottie3}></Lottie></div>
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
