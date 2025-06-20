import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchPage() {
    return (
        <>
            <Navbar />
            <div className='w-full flex flex-col gap-4 p-4 my-4  bg-white shadow-md rounded-lg text-[#494747]'>
                <div className="header flex gap-3 mb-4 items-center">
                    <h2 className="text-xl font-semibold">All Results </h2>
                    <span className="text-xs border flex flex-co w-6 h-6 rounded-full justify-center items-center background text-gray-400">5</span>
                </div>
                <div className="flex items-center px-4 py-2 mb-4 gap-2 background border border-gray-300 focus:ring focus:border-blue-300 rounded-full">
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="py-1 border-none focus:outline-none w-full"
                    />
                </div>
                <div className="search-result-container flex flex-col gap-1">
                    <h2 className="text-start px-2 font-semibold">All Results </h2>
                    <div className="flex items-start gap-2 background border-gray-300 border rounded-xl p-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                            <p className="font-semibold w-xs ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur debitis cum dolorem,  </p>
                                  <p className="desc w-5/6 my-1">Request to delver documents to john joe.</p>
                             <p className="font-bold text-md ">£1</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl p-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                            <p className="font-semibold w-xs mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur debitis cum dolorem,  </p>
                            <p>55 minutes ago.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl p-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                            <p className="font-semibold w-xs mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur debitis cum dolorem,  </p>
                            <p>55 minutes ago.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl p-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                            <p className="font-semibold w-xs mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur debitis cum dolorem,  </p>
                            <p>55 minutes ago.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl p-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                            <p className="font-semibold w-xs mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur debitis cum dolorem,  </p>
                            <p>55 minutes ago.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}