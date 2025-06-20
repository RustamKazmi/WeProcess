import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan, faSquareCheck } from "@fortawesome/free-solid-svg-icons";


export default function ServeDetails() {


    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 p-4 text-[#494747]'>
                <div className='left-bar rounded-xl w-3/4 px-5 bg-white shadow-xl h-full py-5 flex flex-col gap-4'>
                    <div>
                        <h2 className="font-semibold text-start">Serve Details</h2>
                        <p className="text-start text-sm">Provide information serve by defining the type and assignee.</p>
                    </div>
                    <div className="flex w-full gap-3 justify-between px-2">

                        <div className="w-1/2 text-start">
                            <label htmlFor="case-name" className="block mb-2 text-sm text-gray-400">Case Name</label>
                            <input type="text" id="case-name" aria-describedby="case-name-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border-r border-l border-gray-600 " placeholder="Serve to Alex" />
                        </div>
                        <div className="w-1/2 text-start">
                            <label htmlFor="owner" className="block mb-2 text-sm text-gray-400">owner</label>
                            <input type="text" id="owner" aria-describedby="owner-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border-r border-l border-gray-600 " placeholder="Andrew Garfield" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-start">Select all relevant document types that are you serving.</p>
                        <div className="flex flex-wrap gap-3 text-black">
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">Divorce partition</button>
                            <button className="bg-primary text-white border border-gray-300 px-4 py-2 text-xs rounded-lg ">Non-Molestation order</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">possession notice</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">injunction</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">Stautotury Demand</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">Bankruptcy Partition</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">Child Arrangement Order</button>
                            <button className="bg-gray-100 border border-gray-300 px-4 py-2 text-xs rounded-lg ">Witness Summons</button>
                            <button className="bg-primary text-white border border-gray-300 px-4 py-2 text-xs rounded-lg ">Other (Please Specify)</button>
                        </div>
                        <div className="w-full py-3">
                            <input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-600 " placeholder="Please specify a reason" />
                        </div>
                        <div className="w-full py-3 flex justify-between">
                            <Link to='/instruction/add/document' className="px-3 py-2 flex items-center gap-2 background text-sm text-black border border-gray-300 rounded-lg"><FontAwesomeIcon icon={faLessThan} /><span>Back</span></Link>
                            <Link to='/instruction/recipient/details' className='bg-primary text-sm px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Next <FontAwesomeIcon icon={faGreaterThan} /></Link>
                        </div>
                    </div>
                </div>


                <div className='right-bar bg-white shadow-xl rounded-xl w-1/4 h-full flex flex-col gap-4 py-4 '>
                    <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p>Upload documents </p>
                        <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>
                    </div>
                    <div className='background font-semibold text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>

                        <p >Serve type</p>

                    </div>
                    <div className=' text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p >Recipient's details</p>
                    </div>
                    <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p>Service type</p>
                    </div>
                    <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
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