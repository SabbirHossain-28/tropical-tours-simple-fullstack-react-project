import { createContext } from "react";
import PropTypes from "prop-types";
import { getAuth } from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes={
    children:PropTypes.node,
}
export default AuthContextProvider;
