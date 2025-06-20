import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Confirmation() {
    const sectionClass =
        "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4 w-full text-start";

    const labelClass = "text-gray-500 text-sm";
    const valueClass = "text-gray-800 font-medium";

    return (<>
        <Navbar />
      
        <div className='w-full flex gap-4 p-4 text-[#494747] '>
             
            <div className='left-bar rounded-xl w-full px-5 shadow-xl h-full  py-5 flex flex-col gap-4 bg-white'>
                <div>
                    <h2 className="font-semibold text-start">Confirmation</h2>
                    <p className="text-start text-sm">Please confirm all the added information is accurate.</p>
                </div>

                <div className="w-full text-sm font-sans">
                    {/* Recipient Info */}
                    <div className={sectionClass}>
                        <h3 className="font-semibold text-gray-700 mb-4">Recipient info</h3>
                        <div className="grid grid-cols-2 gap-y-3">
                            <div>
                                <p className={labelClass}>Full name</p>
                                <p className={valueClass}>Alex Salmon</p>
                            </div>
                            <div>
                                <p className={labelClass}>Email address (optional)</p>
                                <p className={valueClass}>alex.salmon@gmail.com</p>
                            </div>
                            <div>
                                <p className={labelClass}>Contact number</p>
                                <p className={valueClass}>875-523-5940</p>
                            </div>
                            <div>
                                <p className={labelClass}>Address</p>
                                <p className={valueClass}>ABC Street 4, NY</p>
                            </div>
                            <div className="col-span-2">
                                <p className={labelClass}>Additional details</p>
                                <p className={valueClass}>
                                    These are the additional details added by the user.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Serve Info */}
                    <div className={sectionClass}>
                        <h3 className="font-semibold text-gray-700 mb-4">Serve info</h3>
                        <div className="grid grid-cols-2 gap-y-3">
                            <div>
                                <p className={labelClass}>Serve type</p>
                                <p className={valueClass}>Non-Molestation Order, Other</p>
                            </div>
                            <div>
                                <p className={labelClass}>Service type</p>
                                <p className={valueClass}>Standard</p>
                            </div>
                        </div>
                    </div>

                    {/* Court Info */}
                    <div className={sectionClass}>
                        <h3 className="font-semibold text-gray-700 mb-4">Court info</h3>
                        <div className="grid grid-cols-2 gap-y-3">
                            <div>
                                <p className={labelClass}>Making court</p>
                                <p className={valueClass}>Alex Salmon</p>
                            </div>
                            <div>
                                <p className={labelClass}>Court case number</p>
                                <p className={valueClass}>alex.salmon@gmail.com</p>
                            </div>
                            <div>
                                <p className={labelClass}>Date of submission</p>
                                <p className={valueClass}>875-523-5940</p>
                            </div>
                            <div>
                                <p className={labelClass}>Date of next hearing</p>
                                <p className={valueClass}>ABC Street 4, NY</p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className={sectionClass}>
                        <h3 className="font-semibold text-gray-700 mb-4">Payment details</h3>
                        <div className="grid grid-cols-2 gap-y-3">
                            <div>
                                <p className={labelClass}>Account name</p>
                                <p className={valueClass}>Andrew Garfield</p>
                            </div>
                            <div>
                                <p className={labelClass}>Account number</p>
                                <p className={valueClass}>65176371829 1972</p>
                            </div>
                            <div>
                                <p className={labelClass}>Billing address</p>
                                <p className={valueClass}>ABC Street 4, NY</p>
                            </div>
                            <div>
                                <p className={labelClass}>Sort Code</p>
                                <p className={valueClass}>555</p>
                            </div>
                            <div className="col-span-2">
                                <p className={labelClass}>Bank</p>
                                <p className={valueClass}>United Bank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-3 flex justify-between">
                    <Link to='/instruction/payment/method' className="px-3 py-2 flex items-center gap-2 background text-black border border-gray-300 rounded-lg"><FontAwesomeIcon icon={faLessThan} /><span>Back</span></Link>
                    <Link to='/instructions'   className='bg-primary text-sm px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Confirm Instructions <FontAwesomeIcon icon={faGreaterThan} /></Link>
                </div>
            </div>

            <div className='right-bar bg-white shadow-xl rounded-xl w-1/4 h-full flex flex-col gap-4 py-4 '>
                <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                    <p>Upload documents </p>
                    <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>
                </div>
                <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>

                    <p >Serve type</p>
                    <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>

                </div>
                <div className='text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                    <p >Recipient's details</p>
                    <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>

                </div>
                <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                    <p>Service type</p>
                    <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>

                </div>
                <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                    <p>payment method</p>
                    <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>
                </div>
                <div className='bg-[#ece8e8] font-semibold text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                    <p>Confirmation</p>
                </div>
            </div>
        </div>

    </>
    );
}
