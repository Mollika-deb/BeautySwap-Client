import React, { createContext, useEffect, useState,  } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)




const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

    const  googleProviderLogIn  = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateUserPofile = (profile)=>{
        return updateProfile(auth.currentUser,  profile);
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            return unSubscribe();
        }

    }, []);

    

    const authInfo = {user, loading,googleProviderLogIn, createUser, signIn, logOut, updateUserPofile
    }

   
    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;