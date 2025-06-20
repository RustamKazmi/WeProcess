import { faGreaterThan, faLessThan, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServiceTypeCard from "./serviceTypeCard";
import { Link } from "react-router-dom";

export default function ServiceType() {

    const ServiceTypeArr = [
        {
            type : 'Standard',
            img: '/images/rider.png',
            description: ['Over 10 days period','delivery within 3 attempts','Documents deliver at doorsteps'],
            price: "150"
        },  
         {
            type : 'Standard',
            img: '/images/rider.png',
            description: ['Over 10 days period','delivery within 3 attempts','Documents deliver at doorsteps'],
            price: "150"
        }, 
          {
            type : 'Standard',
            img: '/images/rider.png',
            description: ['Over 10 days period','delivery within 3 attempts','Documents deliver at doorsteps'],
            price: "150"
        }, 
          {
            type : 'Standard',
            img: '/images/rider.png',
            description: ['Over 10 days period','delivery within 3 attempts','Documents deliver at doorsteps'],
            price: "150"
        },
    ]

    return (
        <>
            <Navbar />
            <div className='w-full flex gap-4 p-4 text-[#494747] '>
                <div className='left-bar rounded-xl w-3/4 px-5 shadow-xl h-full py-5 flex flex-col gap-4 bg-white'>
                 <div>
                        <h2 className="font-semibold text-start">Service Type</h2>
                        <p className="text-start text-sm">Please select the service you would like to opt for.</p>
                    </div>
                    <div className="container flex gap-4 w-full ">
                      {
                        ServiceTypeArr.map((service)=>{
                            return (
                                <>
                                  <ServiceTypeCard  service={service} />
                                </>
                            )
                        })
                      }
                    </div>
                       <div className="w-full py-3 flex justify-between">
                            <Link to='/instruction/recipient/details' className="px-3 py-2 flex items-center gap-2 background text-sm text-black border border-gray-300 rounded-lg"><FontAwesomeIcon icon={faLessThan} /><span>Back</span></Link>
                            <Link to='/instruction/payment/method' className='bg-primary text-sm px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Next <FontAwesomeIcon icon={faGreaterThan} /></Link>
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
                    <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                        <p >Recipient's details</p>
                        <span><FontAwesomeIcon icon={faSquareCheck} style={{ color: "#06845e", }} /></span>

                    </div>
                    <div className='bg-[#ece8e8] font-semibold text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
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