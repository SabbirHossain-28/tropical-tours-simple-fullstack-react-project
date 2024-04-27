import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null);


const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const googleProvider=new GoogleAuthProvider();
const signInWithGoogle=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}

const gitHubProvider=new GithubAuthProvider();
const signInWithGitHub=()=>{
  return signInWithPopup(auth,gitHubProvider);
}
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
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);
  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    userLogOut,
    userLogin,
    signInWithGoogle,
    signInWithGitHub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContextProvider;
