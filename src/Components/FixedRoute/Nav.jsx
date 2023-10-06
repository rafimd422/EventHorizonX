import { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import './Nav.css'

export default function Nav() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-transparent shadow-2xl">
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

                            <li className=" hover:text-blue-600 text-center">
                                <NavLink to={"/login"}>Log In</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}