import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(()=>{
    setLoading(false);
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>unsubscribe();
  },[auth])
  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContextProvider;
