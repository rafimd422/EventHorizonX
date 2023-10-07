import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from './../../firebase.config';




export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("User is signed out");
      }
    });
  
    return () => {
      unSubscribe(); 
    };
  }, []);
  


    // log In 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Register 
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Varify
    const verify = () => {
      return sendEmailVerification(auth.currentUser)
   }




    const authValue = { signIn, signUp,verify,user};
    return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
