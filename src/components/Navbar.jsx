import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faEnvelope,
  faTimes,
  faAdd,
  faUser,
  faUserAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileDropdown, setProfileDropdown] = useState(false)
  const [notificationDropdown, setNotificationDropdown] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [searchResults, setSearchResults] = useState(false)

  const location = useLocation();
  const path = location.pathname;


  return (
    <nav className="bg-primary text-white px-4 py-2 md:px-8 shadow-xl rounded-xl ">
      <div className="flex h-full md:flex-col py-5 justify-between">
        <div className="flex justify-between w-full">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-white text-primary font-bold w-8 h-8 flex items-center justify-center rounded-full">
              WP
            </div>
            <span className="font-semibold text-lg">WeProcess</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link to='/dashboard' className={`${path == '/dashboard' ? 'active' : ''} hover:opacity-80 px-4 py-1 rounded-full`}>dashboard</Link>
            <Link to='/instructions' className={`${(path == '/instructions' || path.startsWith('/instruction/')) ? 'active' : ''} hover:opacity-80 px-4 py-1 rounded-full`}>instructions</Link>
            <Link to='/invoices' className={`${path == '/invoices' ? 'active' : ''} hover:opacity-80 px-4 py-1 rounded-full`}>invoices</Link>
          </div>

          {/* Icons & Avatar */}
          <div className="hidden md:flex items-center gap-4">

            <div>
              {
                searchResults ? (<button onClick={() => setSearchResults(!searchResults)}> <IconCircle icon={faSearch} /></button>) :
                  (<button onClick={() => setShowSearchBox(!showSearchBox)}> <IconCircle icon={faSearch} /></button>)
              }
              {
                showSearchBox && (
                  <div onClick={() => {
                    setSearchResults(!searchResults)
                    setShowSearchBox(!showSearchBox)
                  }} className="absolute right-0 z-10 text-start w-72 origin-top-right" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="flex text-black items-center px-2 py-1 mb-4 gap-2  bg-white shadow-lg  focus:ring focus:border-blue-300 rounded-full">
                      <span ><FontAwesomeIcon icon={faSearch} /></span>
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="py-1 border-none focus:outline-none"
                      />
                    </div>
                  </div>
                )

              }
              {
                searchResults && (
                  <div className="absolute right-0 z-10 p-3 text-start mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="flex items-center px-2 py-1 mb-4 gap-2 bg-white text-black border border-gray-300 focus:ring focus:border-blue-300 rounded-full">
                      <span><FontAwesomeIcon icon={faSearch} /></span>
                      <input
                        type="text"
                        placeholder="Search here..."
                        className="py-1 border-none focus:outline-none"
                      />
                    </div>

                    <div>

                    <h3 className="text-black ">Results</h3>
                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold">Lorem ipsum dolor </p>
                            <p className="font-bold text-md">£1</p>
                          </div>
                          <p className="desc w-5/6">Request to delver documents to john joe.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                       <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold">Lorem ipsum dolor </p>
                            <p className="font-bold text-md">£1</p>
                          </div>
                          <p className="desc w-5/6">Request to delver documents to john joe.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold">Lorem ipsum dolor </p>
                            <p className="font-bold text-md">£1</p>
                          </div>
                          <p className="desc w-5/6">Request to delver documents to john joe.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold">Lorem ipsum dolor </p>
                            <p className="font-bold text-md">£1</p>
                          </div>
                          <p className="desc w-5/6">Request to delver documents to john joe.</p>
                        </div>
                      </div>

                      <div className="separator"></div>

                       <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold">Lorem ipsum dolor </p>
                            <p className="font-bold text-md">£1</p>
                          </div>
                          <p className="desc w-5/6">Request to delver documents to john joe.</p>
                        </div>
                      </div>

                    </div>

                  <div className="w-full text-center text-sm">
                      <Link to="/search/Results" className="underline text-blue-300">show all</Link>
                  </div>

                  </div>
                )
              }

            </div>
            <div>
              <button onClick={() => setNotificationDropdown(!notificationDropdown)} ><IconCircle icon={faBell} /></button>
              {
                notificationDropdown && (
                  <div className="absolute right-0 z-10 p-3 text-start mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="flex justify-between ">
                      <h3 className="text-black ">All notifications</h3>
                      <Link to="/notifications" className="underline text-blue-400 text-sm"> show all</Link>
                    </div>
                    <div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <p>55 minutes ago.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <p>55 minutes ago.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <p>55 minutes ago.</p>
                        </div>
                      </div>

                      <div className="separator"></div>
                      <div className="flex items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <p>55 minutes ago.</p>
                        </div>
                      </div>

                      <div className="separator"></div>

                      <div className="flex  items-star gap-2 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <div className="w-8 h-8 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" /></div>
                        <div className="text-xs text-start w-3/4">
                          <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <p>55 minutes ago.</p>
                        </div>
                      </div>

                    </div>

                  </div>
                )
              }
            </div>
            <Link to="/chats"><IconCircle icon={faEnvelope} /></Link>



            <div>
              <img
                src="/images/avatar.png"
                alt="Avatar"
                className="w-8 h-8 rounded-full ring-2 ring-white"
                onClick={() => setProfileDropdown(!profileDropdown)}
              />
              {
                profileDropdown && (
                  <div className="absolute right-0 z-10 text-start mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <Link to='/update/profile' className="py-1 cursor-pointer" role="none">
                      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <span className="border border-gray-300 background rounded-full"><FontAwesomeIcon className="py-3 px-4" icon={faUser} /></span>
                        <div className="text-xs text-start">
                          <p className="font-semibold">Profile</p>
                          <p>Update Profile</p>
                        </div>
                      </div>
                    </Link>
                    <Link to='/update/password' className="py-1 cursor-pointer" role="none">
                      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <span className="border border-gray-300 background rounded-full"><FontAwesomeIcon className="py-3 px-4" icon={faLock} /></span>
                        <div className="text-xs text-start">
                          <p className="font-semibold">Change password</p>
                          <p>Change password</p>
                        </div>
                      </div>
                    </Link>
                    <Link className="py-1 cursor-pointer" role="none">
                      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">
                        <span className="border border-gray-300 background rounded-full"><FontAwesomeIcon className="py-3 px-4" icon={faLock} /></span>
                        <div className="text-xs text-start">
                          <p className="font-semibold">Log out</p>
                          <p>secure Log out</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              }
            </div>
          </div>

        </div>
        <div className="hidden md:flex w-full justify-between ">
          {path == '/dashboard' && <div className="mt-20">

            <h2 className="font-semibold w-full text-start text-2xl">Good Morning, Andrew!</h2>

          </div>
          }
          {
            path == '/instructions' && (
              <div className="w-1/2 mt-20">
                <h2 className="font-semibold w-full text-start text-2xl pb-3">Instructions</h2>
                <div className="flex gap-3 w-full text-white">
                  <button className="text-sm w-28 py-2 rounded-xl bg-white text-black">All</button>
                  <button className="text-sm w-28 py-2 rounded-x flex items-center gap-2">  
                                        <div className="w-2 h-2 bg-blue-700 rounded-full" />
                                    <span>new requests</span>
                                    </button>
                      <button className="text-sm w-28 py-2 rounded-x flex items-center gap-2">  
                                        <div className="w-2 h-2 bg-yellow-700 rounded-full" />
                                    <span>in Progress</span>
                                    </button>
                         <button className="text-sm w-28 py-2 rounded-x flex items-center gap-2">  
                                        <div className="w-2 h-2 bg-green-700 rounded-full" />
                                    <span>Completed</span>
                                    </button>
                </div>
              </div>
            )
          }
          {
            path == '/invoices' && (
              <div className="w-1/2 mt-20">
                <h2 className="font-semibold w-full text-start text-2xl pb-3">Invoices</h2>
                <div className="flex gap-3 w-full text-white">
                  <button className="text-sm w-28 py-2 rounded-xl bg-white text-black">All</button>
                   <button className="text-sm w-28 py-2 rounded-x flex items-center gap-2">  
                                        <div className="w-2 h-2 bg-yellow-700 rounded-full" />
                                    <span>pending</span>
                                    </button>
                    <button className="text-sm w-28 py-2 rounded-x flex items-center gap-2">  
                                        <div className="w-2 h-2 bg-green-700 rounded-full" />
                                    <span>Completed</span>
                                    </button>
                </div>
              </div>
            )
          }
          {
            (path == "/dashboard" || path == "/instructions") && (
              <div className="flex items-end">
                <Link to='/instruction/add/document' className="text-center px-6 py-2 bg-secondary rounded-xl" ><FontAwesomeIcon icon={faAdd} /> new instruction</Link>
              </div>
            )
          }
          {
            path.startsWith('/instruction/') && (
              <div className="w-full mt-20">
                <div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold text-start text-2xl mb-4 ">New Instruction</h2>
                    <span className="text-sm self-end mb-1">
                      {path == '/instruction/add/document' && "1/6"}
                      {path == '/instruction/serve/details' && "2/6"}
                      {path == '/instruction/recipient/details' && "3/6"}
                      {path == '/instruction/service/type' && "/46"}
                      {path == '/instruction/payment/method' && "5/6"}
                      {path == '/instruction/confirmation' && "6/6"}

                    </span>
                  </div>
                  <div className="flex w-full">
                    <div className={`progress-bar
             ${path == '/instruction/add/document' && 'w-[16%]'}
             ${path == '/instruction/serve/details' && 'w-[32%]'}
             ${path == '/instruction/recipient/details' && 'w-[48%]'}
             ${path == '/instruction/service/type' && 'w-[64%]'}
             ${path == '/instruction/payment/method' && 'w-[80%]'}
             ${path == '/instruction/confirmation' && 'w-[99.5%] rounded-full'}
              h-2 bg-secondary rounded-l-full`}>   </div>
                    <div className={`progress-bar
               ${path == '/instruction/add/document' && 'w-[84%]'}
               ${path == '/instruction/serve/details' && 'w-[68%]'}
               ${path == '/instruction/recipient/details' && 'w-[52%]'}
               ${path == '/instruction/service/type' && 'w-[36%]'}
               ${path == '/instruction/payment/method' && 'w-[20%]'}
               ${path == '/instruction/confirmation' && 'w-[.5%]'}
               h-2 background rounded-r-full`}></div>
                  </div>

                </div>
              </div>
            )
          }
        </div>

        {/* Hamburger */}

        <div className="md:hidden flex items-center gap-2">
          <IconCircle icon={faSearch} />
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col gap-6 justify-center items-center text-lg text-white">
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 cursor-pointer"
          />
          <button>dashboard</button>
          <button>Instructions</button>
          <button>Invoices</button>
          <div className="flex gap-4">
            <IconCircle icon={faBell} />
            <IconCircle icon={faEnvelope} />
          </div>
          <img
            src="/images/avatar.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
        </div>
      )}

    </nav>
  );
}

// Helper component for circular icons
const IconCircle = ({ icon }) => (
  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
    <FontAwesomeIcon icon={icon} />
  </div>
);
