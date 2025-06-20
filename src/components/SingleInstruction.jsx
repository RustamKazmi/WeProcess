import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "./Navbar";
import {
    faEye,
    faChevronDown,
    faCheckCircle,
    faSpinner,
    faCircleDot,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SingleInstruction() {
    const sectionClass =
        "bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4 w-full text-start";

    const labelClass = "text-gray-500 text-sm";
    const valueClass = "text-gray-800 font-medium";

    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 p-4 text-[#494747]'>
                <div className='left-bar rounded-xl w-3/4 px-5 bg-white shadow-xl h-full py-5 flex flex-col gap-4'>

                    {/* Top: Header */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Instruction details</h2>
                        <Link to="/invoices" className="flex items-center text-green-600 hover:underline text-sm font-medium">
                            <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-1" />
                            View Invoice
                        </Link>
                    </div>

                    {/* Documents */}
                    <div className="flex space-x-4">
                        {[1, 2].map((item) => (
                            <div
                                key={item}
                                className="flex flex-col items-center justify-center w-28 h-28 bg-gray-100 border border-dashed border-gray-300 rounded-lg text-center"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                                    alt="PDF"
                                    className="w-10 h-10 mb-2"
                                />
                                <span className="text-[10px] text-gray-700 font-medium">Affidavit Document {item}</span>
                                <span className="text-[10px] text-gray-500">1.5MB</span>
                            </div>
                        ))}
                    </div>


                    <div className="w-full text-sm font-sans">

                        {/* Applicant Info */}
                        <div className={sectionClass}>
                            <h3 className="font-semibold text-[16px] text-gray-700 mb-4">Applicant info</h3>
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

                            </div>

                        </div>

                        {/* Recipient Info */}
                        <div className={sectionClass}>
                            <h3 className="font-semibold text-[16px] text-gray-700 mb-4">Recipient info</h3>
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
                            <h3 className="font-semibold text-[16px] text-gray-700 mb-4">Serve info</h3>
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
                            <h3 className="font-semibold text-[16px] text-gray-700 mb-4">Court info</h3>
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
                            <h3 className="font-semibold text-[16px] text-gray-700 mb-4">Payment info</h3>
                            <div className="grid grid-cols-2 gap-y-3">
                                <div>
                                    <p className={labelClass}>payment mode</p>
                                    <p className={valueClass}>Card payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-bar bg-white shadow-xl rounded-xl w-1/4 h-full flex flex-col gap-4 py-4 '>

                    <div className="max-w-md w-full mx-auto p-4 space-y-6 bg-white rounded-xl shadow-md">
                        {/* Profile Info */}
                        <div className="flex flex-col items-center space-y-2">
                            <img
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="User"
                                className="w-16 h-16 rounded-full border-4 border-white shadow"
                            />
                            <h2 className="text-lg font-semibold">Max Rauchenberg</h2>
                            <p className="text-xs text-gray-500">LEVEL 2</p>

                            {/* Stats */}
                            <div className="w-full">
                                <div className="flex gap-2 justify-between mt-4 w-full">
                                    <div className="bg-white shadow-lg w-full rounded-lg p-2 text-start text-sm">
                                        <p className="font-bold text-orange-500">40</p>
                                        <p className="text-xs text-gray-600">Jobs taken</p>
                                    </div>
                                    <div className="bg-white shadow-lg w-full rounded-lg p-2 text-start text-sm">
                                        <p className="font-bold text-green-600">32</p>
                                        <p className="text-xs text-gray-600">Jobs completed</p>
                                    </div>
                                </div>
                                <div className="bg-white shadow-lg w-full rounded-lg p-2 text-start text-sm">
                                    <p className="font-bold text-green-600">86%</p>
                                    <p className="text-xs text-gray-600">Success rate</p>
                                </div>
                            </div>
                        </div>

                        {/* Attempt Details */}
                        <div className="space-y-2">

                            <h3 className="text-sm font-semibold text-gray-700">Attempt details</h3>

                            {/* Map Placeholder */}
                            <div className="w-full h-48 rounded-xl overflow-hidden border">
                                <MapContainer center={[40.7128, -74.0060]} zoom={13} className="h-48 w-full rounded-xl">
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution="&copy; OpenStreetMap contributors"
                                    />
                                    <Marker icon='./node_modules/leaflet/dist/images/marker-icon.png' position={[40.7128, -74.0060]}>
                                        <Popup>Job Location</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>

                            <div className="separator"></div>

                            {/* Attempt 2 */}
                            <details open className="bg-gray-50 w-full rounded-lg p-4">
                                <summary className="cursor-pointer text-sm font-medium flex items-center justify-start gap-3">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 text-xs" />
                                    <span>Attempt 2</span>
                                </summary>
                                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1" />
                                        <span>
                                            <strong>Job Complete</strong><br />
                                            Completed on 29th March, 2024
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FontAwesomeIcon icon={faSpinner} className="text-yellow-500 mt-1" spin />
                                        <span>
                                            <strong>In translation</strong><br />
                                            Started on 25th March, 2024
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FontAwesomeIcon icon={faCircleDot} className="text-gray-500 mt-1" />
                                        <span>
                                            <strong>Start</strong><br />
                                            Got the documents on 22nd March, 2024
                                        </span>
                                    </li>
                                </ul>
                            </details>

                            {/* Attempt 1 */}
                            <details className="bg-gray-50 rounded-lg p-4">
                               <summary className="cursor-pointer text-sm font-medium flex items-center justify-start gap-3">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-500 text-xs" />
                                    <span>Attempt 1</span>
                                </summary>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}