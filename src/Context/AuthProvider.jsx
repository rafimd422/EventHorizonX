import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from './../../firebase.config';




export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  


    // log In 
    const signIn = (email,password) =>{
      setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Register 
    const signUp = (email,password) =>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Varify
    const verify = () => {
      setLoading(true)
      return sendEmailVerification(auth.currentUser)

    }


   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false)
      } else {
        console.log("User is signed out");
        setLoading(false)
      }
    });
  
    return () => {
      unSubscribe();
        };

  }, []);

    const authValue = { signIn, signUp,verify,user,loading};
    return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
