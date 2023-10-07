import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from './../../firebase.config';






export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    // log In 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Register 
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const authValue = { signIn, signUp };
    return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
