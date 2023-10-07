import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from "../../firebase.config"






export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    // log In 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // Register 
    const SignUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const AuthValue = {signIn, SignUp}
  return (
    <AuthContext.Provider value={AuthValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
