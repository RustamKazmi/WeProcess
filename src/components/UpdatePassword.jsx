import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faEye, faEyeSlash, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



export default function UpdatePassword() {

    const [showCurrentPass, setShowCurrentPass] = useState(false);
    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 min-h-[80vh] p-4 text-[#494747] '>
                <div className='left-bar rounded-xl w-[23%] px-2 shadow-xl py-5 flex flex-col gap-4 bg-white'>
                    <h1 className="text-xl text-primary">Settings</h1>
                    <Link to='/update/profile' className={`${path == '/update/profile' && 'background shadow-md'} rounded-lg p-1 cursor-pointer`} role="none">
                        <div className="flex items-center gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                            <span className={`${path == '/update/profile' && 'bg-primary text-white'} border border-gray-300  rounded-full`}><FontAwesomeIcon className="py-3 px-4" icon={faUser} /></span>
                            <div className="text-sm text-start">
                                <p className="font-semibold">Profile</p>
                                <p className="text-xs">Update your personal information</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/update/password' className={`${path == '/update/password' && 'background shadow-md'} rounded-lg p-1 cursor-pointer`} role="none">
                        <div className="flex items-center gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                            <span className="border border-gray-300 background rounded-full"><FontAwesomeIcon className="py-3 px-4" icon={faLock} /></span>
                            <div className="text-sm text-start">
                                <p className="font-semibold">Change password</p>
                                <p className="text-xs">Change password</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="py-1 cursor-pointer" role="none">
                        <div className="flex items-center gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                            <span className="border border-gray-300 background rounded-full"><FontAwesomeIcon className="py-3 px-4" icon={faDoorOpen} /></span>
                            <div className="text-sm text-start">
                                <p className="font-semibold">Log out</p>
                                <p className="text-xs">secure Log out</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='right-bar bg-white shadow-xl rounded-xl w-[77%] flex flex-col gap-4 p-4 '>
                    <div className="flex flex-col gap-4 p-4 ">
                        <div className="flex text-start gap-2 items-center">
                            <span className="bg-primary text-white w-12 h-12 border border-gray-300 rounded-full" ><FontAwesomeIcon className="py-3 px-4" icon={faLock} /> </span>
                            <span className="text-xl font-semibold">Change password</span>
                        </div>
                        <div className="separator"> </div>
                        <form className="flex flex-col gap-4" action="">
                            <div className="w-1/2 text-start">
                                <label htmlFor="password" className="block mb-2 text-gray-900">Current Password</label>
                                <div className="relative border border-gray-400 rounded-lg ">
                                    <input id="hs-toggle-password" type={showCurrentPass ? "text" : "password"} className="py-2.5 sm:py-3 ps-4 pe-10 block w-full dark:placeholder-neutral-500 outline-none" placeholder="********" />
                                    <button onClick={() => setShowCurrentPass(!showCurrentPass)} type="button" className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">

                                        <span >{showCurrentPass ? <FontAwesomeIcon style={{ color: "#000" }} icon={faEye} /> : <FontAwesomeIcon style={{ color: "#000" }} icon={faEyeSlash} />}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="password" className="block mb-2 text-gray-900">New Password</label>
                                <div className="relative border border-gray-400 rounded-lg ">
                                    <input id="hs-toggle-password" type={showNewPass ? "text" : "password"} className="py-2.5 sm:py-3 ps-4 pe-10 block w-full dark:placeholder-neutral-500 outline-none" placeholder="********" />
                                    <button onClick={() => setShowNewPass(!showNewPass)} type="button" className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">

                                        <span >{showNewPass ? <FontAwesomeIcon style={{ color: "#000" }} icon={faEye} /> : <FontAwesomeIcon style={{ color: "#000" }} icon={faEyeSlash} />}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="password" className="block mb-2 text-gray-900">Confirm showPassword</label>
                                <div className="relative border border-gray-400 rounded-lg ">
                                    <input id="hs-toggle-password" type={showConfirmPass ? "text" : "password"} className="py-2.5 sm:py-3 ps-4 pe-10 block w-full dark:placeholder-neutral-500 outline-none" placeholder="********" />
                                    <button onClick={() => setShowConfirmPass(!showConfirmPass)} type="button" className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-hidden focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">

                                        <span >{showConfirmPass ? <FontAwesomeIcon style={{ color: "#000" }} icon={faEye} /> : <FontAwesomeIcon style={{ color: "#000" }} icon={faEyeSlash} />}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-3 w-fit px-4 text-start">
                                <button type="submit" className="bg-primary text-white rounded-lg px-4 py-2 text-sm">Update</button>
                                <Link to="/instructions" className="background border border-gray-400 rounded-lg px-4 py-2 text-sm">Cancel</Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}