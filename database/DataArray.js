export const DataArr = [
    {
        id: 1,
        parentTitle: "Firebase",
        mainTitle: "Firebase Auth",
        importItem:`import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
         signOut } from 'firebase/auth'`,
        mainCode: ` const firebaseConfig = {
    apiKey: "AIzaSyBmvAJLFa744wvMl_6OxWLFov3SnQR6RSE",
    authDomain: "myapp-2b982.firebaseapp.com",
    projectId: "myapp-2b982",
    storageBucket: "myapp-2b982.appspot.com",
    messagingSenderId: "687608008922",
    appId: "1:687608008922:web:b902a54ab10cdee803d5e3",
    databaseURL:"https://myapp-2b982-default-rtdb.firebaseio.com/"
};


const FirebaseContext = createContext(null)
const FirebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)
const FirebaseGoogleAuthProvider=new GoogleAuthProvider()

export const useFirebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState('');
    const SignUp = (email, pass) => {
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass);
    }
    const LogIn = async(email, pass) => {
        try{
            return await signInWithEmailAndPassword(FirebaseAuth, email, pass)
        }catch(err){
            console.log(err)
        }
    }
    const GoogleLogIn =async()=>{
        try{
        return await signInWithPopup(FirebaseAuth,FirebaseGoogleAuthProvider);
        }catch(err){
        console.log(err)
        }
    }
    useEffect(() => {
        const Status = () => onAuthStateChanged(FirebaseAuth, (currentUser) => {
              setUser(currentUser)
            })
            return Status()
    }, []);
    function LogOut(){
        return signOut(FirebaseAuth)
    }
    
    
    return (
        <FirebaseContext.Provider value={{user,GoogleLogIn, LogIn, LogOut, SignUp }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}`,
        "openCommand": "npm run dev"
    }
]