import { faGreaterThan, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


export default function AddInstructionDocument(){
    return (
        <>
        <Navbar/>
          <div className='w-full flex gap-4 p-4'>
            <div className='left-bar rounded-xl w-3/4  px-5 bg-white shadow-xl h-full py-5 flex flex-col gap-4'>
              <h2 className='text-start font-semibold text-lg'>Add Document that need to be served</h2>
              <p className='text-start'>Upload each document as standalone file. There order will match the sequence shown in all davit.</p>
                <form action="/profile" method="post" encType="multipart/form-data">
          <div className="mb-4">
              <div className='bg-[#dfd7d7e7] text-black w-full h-48 border-dotted border-[#666] border-2 flex flex-col justify-center items-center'>
                     <FontAwesomeIcon size='xl' icon ={faUpload}/>
                     <p>upload the pdf file here (max 25 mb)</p>
            <label className="cursor-pointer inline-block text-white py-2 px-4 rounded-lg transition duration-300 w-full">
                     <p className='underline text-primary font-semibold'>Browse</p>
              <input
                type="file"
                name="avatar"
                className="hidden"
                />
            </label>
                </div> 
          </div>
       <div className='text-start'>
   <p className="text-sm mb-1">upload receipt photo (optional)</p>
          <button
            type="submit"
            className="bg-[#535151] hover:bg-[#6e6c6c] text-white py-2 px-6 rounded-lg font-medium transition duration-300"
          >
            Upload
          </button>
       </div>
        </form>
        <hr />
        <div className='w-full flex'>
          <h2 className='my-3 font-semibold text-lg'>Uploaded Documents</h2>
        </div>
        <div className='flex justify-end'>
         <Link to='/instruction/serve/details' className='bg-primary px-4 py-2 rounded-xl text-white flex gap-4 items-center'> Next <FontAwesomeIcon icon={faGreaterThan} /></Link>
        </div>
            </div>
              <div className='right-bar bg-white shadow-xl rounded-xl w-1/4 h-full flex flex-col gap-4 py-4 '>
                              <div className='background font-semibold text-start py-2 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
                                  <p>Upload documents </p>
                              </div>
                              <div className='text-start py-1 text-sm px-3 rounded-2xl mx-3 flex justify-between'>
          
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