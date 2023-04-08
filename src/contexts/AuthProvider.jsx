import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // state 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // social provider
    const googleProvider = new GoogleAuthProvider();

    // create user with email 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // signIn with email 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Goggle Authentication

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside auth state changed', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            };
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signIn,
        signInWithGoogle,
        logOut, 
        verifyEmail
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;