import { signInWithEmailAndPassword } from "firebase/auth"
import { createContext } from "react"
import auth from "../../firebase.config"






export const AuthContext = createContext(null)


const AuthProvider = () => {

    // log In 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }




    const AuthValue = {}
  return (
    <AuthContext.Provider value={AuthValue}>
      
    </AuthContext.Provider>
  )
}

export default AuthProvider
