import { faIndianRupee, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ServiceTypeCard({service}){
    return (
      <div className="flex flex-col gap-5 justify-center background min-w-[24%] py-5 shadow-lg rounded-lg border border-gray-400">
        <h2 className="text-primary text-sm font-medium">{service.type}</h2>
        <img className="w-1/2 self-center h-20" src={`${service.img}`} alt="rider" />
        <div className="text-xs leading-5">
          <p>{service.description[0]}</p>
          <p>{service.description[1]}</p>
          <p>{service.description[2]}</p>
        </div>
        <p className="font-semibold"><span className="text-xl"><FontAwesomeIcon icon={faIndianRupeeSign} /></span><span className="text-2xl">{service.price}</span></p>
        <input type="checkbox" name={`${service.type}`}/>
         
      </div>
    )
}