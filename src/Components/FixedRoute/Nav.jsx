import { useContext, useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './Nav.css'
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

const {user} = useContext(AuthContext)
console.log(user)
const logOut = () =>{
    signOut(auth).then(() => {
  console.log('Log out successfull')
  toast.success('Log out successful!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    window.location.reload();
})
.catch((error) => {
      console.log(error.message)
    });
  }
    return (
        <nav className="w-full bg-transparent shadow-2xl font-mono">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block text-uppercase">
                            <h2 className="text-2xl font-bold"><span className="text-orange-700">Event</span>Horizon<span className="text-red-800 text-3xl">X</span></h2>
                        <div className="md:hidden">
                            <button
                                className="p-4 rounded-md"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
<FaXmark />
                                ) : (
<FaAlignRight />

                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="uppercase items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className=" hover:text-blue-600 text-center">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li className=" hover:text-blue-600 text-center">
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li className=" hover:text-blue-600 text-center">
                                <NavLink to={"/event"}>Event</NavLink>
                            </li>
                            <li className=" hover:text-blue-600 text-center">
                                <NavLink to={"/blog"}>Blog</NavLink>
                            </li>

                            {!user ? (<li className=" hover:text-blue-600 text-center">
                                <NavLink to={"/login"}>LogIN</NavLink> 
                            </li> ):                             (
                             <div className="flex items-center flex-col-reverse">
                                <p className="font-extrabold">{user?.displayName}</p>
                                <div className="dropdown dropdown-end pt-2">
                             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               <div className="w-10 rounded-full">
                                
                               <img className="object-cover" src={user?.photoURL} alt="User Profile" />


                               </div>
                             </label>
                             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                               <li className=" hover:text-blue-600 text-center
                               p-2">
                                <button onClick={logOut}>LOGOUT</button> 
                            </li>                             </ul>
                           </div>
                             </div>
                             )}
                        </ul>
                        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
                    </div>
                </div>
            </div>
        </nav>
    );
}