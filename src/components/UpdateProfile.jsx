import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { faDoorOpen, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



export default function UpdateProfile() {

    const countries = [
        { code: "+1", name: "United States", flag: "US" },
        { code: "+44", name: "United Kingdom", flag: "GB" },
        { code: "+92", name: "Pakistan", flag: "PK" },
    ];

    const [phone, setPhone] = useState("")
    const [phoneDropdown, setPhoneDropdown] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState({ code: "+92", name: "Pakistan", flag: "PK" })



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
                    <Link  className="py-1 cursor-pointer" role="none">
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
                    <div className='flex flex-col gap-4 p-4 ' >
                        <div className="flex text-start gap-2 items-center">
                            <span className="bg-primary text-white w-12 h-12 border border-gray-300 rounded-full" ><FontAwesomeIcon className="py-3 px-4" icon={faUser} /> </span>
                            <span className="text-xl font-semibold">Profile</span>
                        </div>
                        <div className="separator"></div>
                        <div className="w-1/2 text-start">
                            <label htmlFor="full-name" className="block mb-2 text-sm text-gray-400">Full Name</label>
                            <input type="text" id="full-name" aria-describedby="full-name-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border-r border-l border-gray-600 " placeholder="Andrew Garfield" />
                        </div>
                     <form className="flex flex-col gap-4" action="">
                           <div className="w-1/2 text-start">
                            <label htmlFor="email-text" className="block mb-2 text-xs text-gray-400">Email Address (Optional)</label>
                            <input type="email" id="email-text" aria-describedby="email-text-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="alexSalmon@gmail.com" />
                        </div>
                        <div className="w-1/2 text-start ">
                            <label htmlFor="tel" className="block mb-2 text-xs text-gray-400">Contact number</label>
                            <div className="flex rounded-md shadow-sm">

                                <div className="relative ">
                                    <button
                                        type="button"
                                        onClick={() => setPhoneDropdown(!phoneDropdown)}
                                        className="inline-flex h-full items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none"
                                    >
                                        <img src={`https://flagsapi.com/${selectedCountry.flag}/flat/24.png`} alt="" /> {selectedCountry.code}
                                        <svg
                                            className="w-3 h-3 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>


                                    {phoneDropdown && (
                                        <div className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded shadow">
                                            {countries.map((country) => (
                                                <button
                                                    key={country.code}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setPhoneDropdown(false);
                                                    }}
                                                    className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                                                >
                                                    <img src={`https://flagsapi.com/${country.flag}/flat/24.png`} alt="" /> ({country.code})
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <input
                                    type="tel"
                                    id="tel"
                                    className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 ml-2"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="w-1/2 text-start">
                            <label htmlFor="address-text" className="block mb-2 text-xs text-gray-400">Address</label>
                            <input type="text" id="address-text" aria-describedby="address-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="ABC Street 4 Ny" />
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