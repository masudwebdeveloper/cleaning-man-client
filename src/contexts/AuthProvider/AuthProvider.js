import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../components/firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googlePovider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googlePovider);
   }

   const logOut = () => {
      return signOut(auth)
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false)
      })
      return () => {
        return unsubscribe();
      }
   },[])
   const authInfo = {
      user,
      login,
      logOut,
      loading,
      createUser,
      googleSignIn,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;