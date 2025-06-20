import { faAppleAlt, faBook, faGreaterThan, faLessThan, faMobileAndroid, faMobileAndroidAlt, faPager, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";


export default function PaymentMethod() {
    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 p-4 text-[#494747] '>
                <div className='left-bar rounded-xl w-3/4 px-5 shadow-xl h-full py-5 flex flex-col gap-4 bg-white'>
                    <div>
                        <h2 className="font-semibold text-start">Payment Method</h2>
                        <p className="text-start text-sm">Please provide payment details.</p>
                    </div>
                    <div className="coupon w-1/2 text-start">
                        <label htmlFor="coupon" className="block mb-2 text-xs text-gray-400">Add coupon (optional)</label>
                        <input type="text" id="coupon" aria-describedby="coupon-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="provide a valid coupon ID" />
                    </div>
                    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-sm font-sans text-sm">
                        {/* Header */}
                        <div className="flex justify-between items-start border-b pb-4">
                            <div className="flex gap-3">
                                <div className="text-6xl font-bold text-primary">WP</div>
                                <div className=" text-start">
                                    <p className="text-sm text-gray-600">WeProcess</p>
                                    <p className="text-sm text-gray-600">weprocesslegal.com</p>
                                    <p className="text-sm text-gray-600">0530521256</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h2 className="text-3xl font-bold text-gray-400">Invoice</h2>
                                <p className="text-sm text-gray-500">#692523-01</p>
                            </div>
                        </div>

                        {/* Billed Info */}
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Billed To</p>
                                <p className="text-gray-600">Company name</p>
                                <p className="text-gray-600">Company Address</p>
                                <p className="text-gray-600">City, Country - 00000</p>
                                <p className="text-gray-600">+0 (000) 123-4567</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Billed From</p>
                                <p className="text-gray-600">WeProcess</p>
                                <p className="text-gray-600">Kings House</p>
                                <p className="text-gray-600">202 Lower High Street</p>
                                <p className="text-gray-600">Watford, England - WD17 2EH</p>
                                <p className="text-gray-600">0530521256</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700 mb-1">Invoice Date</p>
                                <p className="text-gray-600 mb-2">01.08.2023</p>
                                <p className="font-semibold text-gray-700 mb-1">Due Date</p>
                                <p className="text-gray-600">15.08.2023</p>
                            </div>
                            {/* Amount Due */}
                            <div>
                                <span>Amount Due</span>
                                <div className="bg-yellow-100 border h-10  border-yellow-300 text-primary font-semibold px-4 py-2 rounded-md">

                                    <span>£51.20</span>
                                </div>
                            </div>
                        </div>



                        {/* Order Details */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-gray-700 mb-2 text-start">Order details</h3>
                            <div className="border border-gray-300 rounded-md overflow-hidden">
                                <div className="grid grid-cols-5 bg-gray-100 p-2 font-semibold text-gray-700 text-xs">
                                    <div className="col-span-1">Quantity</div>
                                    <div className="col-span-2">Title / Description</div>
                                    <div className="col-span-1 text-right">Unit Price</div>
                                    <div className="col-span-1 text-right">Subtotal</div>
                                </div>
                                <div className="grid grid-cols-5 p-2 text-gray-700 border-t">
                                    <div className="col-span-1">1</div>
                                    <div className="col-span-2">
                                        Standard Serving Order - (Applicant vs Respondent) - served on [DATE]
                                    </div>
                                    <div className="col-span-1 text-right">£150</div>
                                    <div className="col-span-1 text-right">£150</div>
                                </div>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between mt-4 text-gray-700 font-semibold">
                                <p>Total </p>
                                <p className="ml-2">£51.20</p>
                            </div>

                            {/* Note */}
                            <div className="mt-2 text-gray-600 text-sm text-start">
                                <p><FontAwesomeIcon icon={faBook} /> Please pay within 15 days of receiving this invoice.</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-32">
                            <p className="text-sm text-gray-600 text-start">Thank you for the business!</p>
                        </div>

                        {/* Payment Info */}
                        <div className="mt-4 border-t pt-4 text-sm text-gray-700">
                            <div className="grid grid-cols-5 gap-2 mt-2 text-xs text-gray-600">
                                <p className="font-semibold">PAYMENT INFO</p>
                                <div>Bank name:</div>
                                <div>Sort code:</div>
                                <div>Account #:</div>
                                <div>VAT #:</div>
                            </div>
                            <div className="grid grid-cols-5 gap-2 text-sm text-gray-800">
                                <div>
                                    <p className="text-gray-600">WEPROCESS LTD</p>

                                </div>
                                <div>Lloyds Bank</div>
                                <div>30-98-57</div>
                                <div>38117763</div>
                                <div>340 0467 39</div>
                            </div>
                            <p className="mt-2 text-gray-500 text-start">For invoice enquiries contact: 07598735186 or email: billing@weprocesslegal.com</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2 className="font-bold text-start text-sm">Pay with</h2>
                        <div className="card-payment-container flex gap-4 justify-between">
                            <button className="flex items-center w-full justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-800 bg-white hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 rounded-full border-1 border-primary flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>Pay with Card payment</span>
                                </div>
                                <FontAwesomeIcon icon={faAppleAlt} className="ml-4 text-xl text-black" />
                            </button>
                            <button className="flex items-center w-full justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-800 bg-white hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 rounded-full border-1 border-primary flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>Pay with Card payment</span>
                                </div>
                                <FontAwesomeIcon style={{ color: "green" }} icon={faMobileAndroidAlt} className="ml-4 text-xl text-black" />
                            </button>
                            <button className="flex items-center w-full justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-800 bg-white hover:bg-gray-50">
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 rounded-full border-1 border-primary flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                    <span>Pay with Card payment</span>
                                </div>
                                <FontAwesomeIcon style={{ color: "skyBlue" }} icon={faIdCard} className="ml-4 text-xl text-black" />
                            </button>

                        </div>
                    </div>
                    <div className="w-full py-3 flex justify-between">
                        <Link to='/instruction/payment/method' className="px-3 py-2 flex items-center gap-2 background text-sm text-black border border-gray-300 rounded-lg"><FontAwesomeIcon icon={faLessThan} /><span>Back</span></Link>
                        <Link to='/instruction/confirmation' className='bg-primary text-sm px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Next <FontAwesomeIcon icon={faGreaterThan} /></Link>
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
                    <div className='bg-[#ece8e8] font-semibold text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p>payment method</p>
                    </div>
                    <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p>Confirmation</p>
                    </div>
                </div>

            </div>
        </>
    )
}