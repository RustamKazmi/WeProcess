import { faGreaterThan, faLessThan, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function RecipientDetails() {
    const countries = [
        { code: "+1", name: "United States", flag: "US" },
        { code: "+44", name: "United Kingdom", flag: "GB" },
        { code: "+92", name: "Pakistan", flag: "PK" },
    ];

    const [applicantdropdownOpen, setApplicantDropdownOpen] = useState(false);
    const [RecipientdropdownOpen, setRecipientDropdownOpen] = useState(false);
    const [applicantSelectedCountry, setApplicantSelectedCountry] = useState(countries[0]);
    const [recipientSelectedCountry, setRecipientSelectedCountry] = useState(countries[0]);
    const [applicantPhone, setApplicantPhone] = useState("");
    const [recepientPhone, setRecipientPhone] = useState("");

    const date = new Date();
    const futureDate = date.getDate() + 1;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');



    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 p-4 text-[#494747]'>
                <div className='left-bar rounded-xl w-3/4 px-5 bg-white shadow-xl h-full py-5 flex flex-col gap-4'>
                    <div>
                        <h2 className="font-semibold text-start">Recipient Details</h2>
                        <p className="text-start text-sm">Provide the information relevant to recipient and case details.</p>
                    </div>
                    <div className="bg-gray-200 rounded-2xl shadow-md p-4">
                        <h2 className="text-start mb-4">Applicant Info</h2>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start">
                                <label htmlFor="full-name" className="block mb-2 text-xs text-gray-400">Full Name</label>
                                <input type="text" id="full-name" aria-describedby="full-name-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="Alex Salmon" />
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="email-text" className="block mb-2 text-xs text-gray-400">Email Address (Optional)</label>
                                <input type="email" id="email-text" aria-describedby="email-text-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="alexSalmon@gmail.com" />
                            </div>
                        </div>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start ">

                                <label htmlFor="tel" className="block mb-2 text-xs text-gray-400">Contact number</label>

                                <div className="flex rounded-md shadow-sm">

                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setApplicantDropdownOpen(!applicantdropdownOpen)}
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none"
                                        >
                                            <img src={`https://flagsapi.com/${applicantSelectedCountry.flag}/flat/24.png`} alt="" /> {applicantSelectedCountry.code}
                                            <svg
                                                className="w-3 h-3 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>


                                        {applicantdropdownOpen && (
                                            <div className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded shadow">
                                                {countries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => {
                                                            setApplicantSelectedCountry(country);
                                                            setApplicantDropdownOpen(false);
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
                                        value={applicantPhone}
                                        onChange={(e) => setApplicantPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="address-text" className="block mb-2 text-xs text-gray-400">Address</label>
                                <input type="text" id="address-text" aria-describedby="address-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="ABC Street 4 Ny" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-2xl shadow-md p-4">
                        <h2 className="text-start mb-4">Recipient Info</h2>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start">
                                <label htmlFor="full-name" className="block mb-2 text-xs text-gray-400">Full Name</label>
                                <input type="text" id="full-name" aria-describedby="full-name-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="Alex Salmon" />
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="helper-text" className="block mb-2 text-xs text-gray-400">Email Address (Optional)</label>
                                <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="alexSalmon@gmail.com" />
                            </div>
                        </div>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start ">

                                <label htmlFor="tel" className="block mb-2 text-xs text-gray-400">Contact number</label>

                                <div className="flex rounded-md shadow-sm">

                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setRecipientDropdownOpen(!RecipientdropdownOpen)}
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none"
                                        >
                                            <img src={`https://flagsapi.com/${recipientSelectedCountry.flag}/flat/24.png`} alt="" /> {recipientSelectedCountry.code}
                                            <svg
                                                className="w-3 h-3 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>


                                        {RecipientdropdownOpen && (
                                            <div className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded shadow">
                                                {countries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => {
                                                            setRecipientSelectedCountry(country);
                                                            setRecipientDropdownOpen(false);
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
                                        value={recepientPhone}
                                        onChange={(e) => setRecipientPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="address-text" className="block mb-2 text-xs text-gray-400">Address</label>
                                <input type="text" id="address-text" aria-describedby="address-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="ABC Street 4 Ny" />
                            </div>
                        </div>
                        <div className="flex w-full flex-col mt-3">
                            <label htmlFor="recipient-details" className="text-start text-xs text-gray-500">Additional Details</label>
                            <textarea className="w-full outline-none border border-gray-400 rounded-md border-r-0" name="recipient-dtails" id="recipient-dtails" placeholder="Please enter other specifies regarding the case. if any..."></textarea>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-2xl shadow-md p-4">
                        <h2 className="text-start mb-4">Case Info</h2>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start">
                                <label htmlFor="issuing-court" className="block mb-2 text-xs text-gray-400">issuing court</label>
                                <input type="text" id="issuing-court" aria-describedby="issuing-court-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="Alex Salmon" />
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="court-case-number" className="block mb-2 text-xs text-gray-400">court case number</label>
                                <input type="text" id="court-case-number" aria-describedby="court-case-number-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " placeholder="alexSalmon@gmail.com" />
                            </div>
                        </div>
                        <div className="flex w-full gap-3 justify-between px-2">

                            <div className="w-1/2 text-start">
                                <label htmlFor="submission-date" className="block mb-2 text-xs text-gray-400">Date of submission</label>
                                <input defaultValue={defaultValue} type="date" id="submission-date" aria-describedby="submission-date-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " />
                            </div>
                            <div className="w-1/2 text-start">
                                <label htmlFor="next-hearing-date" className="block mb-2 text-xs text-gray-400">Date of next hearing</label>
                                <input defaultValue={defaultValue} type="date" id="next-hearing-date" aria-describedby="next-hearing-date-explanation" className="bg-gray-50 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-600 border border-gray-400 " />
                            </div>
                        </div>

                    </div>
                    <div className="w-full py-3 flex justify-between">
                        <Link to='/instruction/serve/details' className="px-3 py-2 flex items-center gap-2 background text-sm text-black border border-gray-300 rounded-lg"><FontAwesomeIcon icon={faLessThan} /><span>Back</span></Link>
                        <Link to='/instruction/service/type' className='bg-primary text-sm px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Next <FontAwesomeIcon icon={faGreaterThan} /></Link>
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
                    <div className='bg-[#ece8e8] font-semibold text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
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