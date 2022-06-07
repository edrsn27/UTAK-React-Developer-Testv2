import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

import { ref, set } from "firebase/database";

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function writeUserData(uid, data) {
    return set(ref(db, "users/" + uid), {
      ...data,
    });
  }

  const signup = async (email, password, data) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await writeUserData(user.user.uid, data);
    return user;
  };
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    auth.signOut();
  };

  const forgotpassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          user.admin = idTokenResult.claims.admin;
        });
      }

      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    signin,
    signout,
    forgotpassword,
    writeUserData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
