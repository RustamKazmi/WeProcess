import React from "react"

export default function DashboardTable() {


let color;
    const records = [
    {
      wprNo: 6779,
      owner: "Andrew Garfield",
      serveName: "Serve to Alex",
      courtName: "Court A",
      serviceType: "Urgent",
      recipientsName: "Paul Adman",
      recipientsAddress: "Lorem Ipsum",
      dateIssues: "01/11/2023",
      deadLine: "11/11/2023",
      processStatus: ["1st Attempt", "pending", "green"]
    },
    {
      wprNo: 6787,
      owner: "Andrew Garfield",
      serveName: "Serve to Alex",
      courtName: "Court A",
      serviceType: "Urgent",
      recipientsName: "Paul Adman",
      recipientsAddress: "Lorem Ipsum",
      dateIssues: "01/11/2023",
      deadLine: "11/11/2023",
      processStatus: ["2nd Attempt", "pending", "yellow"]
    },
    {
      wprNo: 6775,
      owner: "Andrew Garfield",
      serveName: "Serve to Alex",
      courtName: "Court A",
      serviceType: "Urgent",
      recipientsName: "Paul Adman",
      recipientsAddress: "Lorem Ipsum",
      dateIssues: "01/11/2023",
      deadLine: "11/11/2023",
      processStatus: ["3rd Attempt","pending", "red"]
    },
    {
      wprNo: 6799,
      owner: "Andrew Garfield",
      serveName: "Serve to Alex",
      courtName: "Court A",
      serviceType: "Urgent",
      recipientsName: "Paul Adman",
      recipientsAddress: "Lorem Ipsum",
      dateIssues: "01/11/2023",
      deadLine: "11/11/2023",
      processStatus: ["in Transit"]
    },
    {
      wprNo: 6768,
      owner: "Andrew Garfield",
      serveName: "Serve to Alex",
      courtName: "Court A",
      serviceType: "Urgent",
      recipientsName: "Paul Adman",
      recipientsAddress: "Lorem Ipsum",
      dateIssues: "01/11/2023",
      deadLine: "11/11/2023",
      processStatus: ["1st Attempt", "pending", "green"]
    },

  ]

  
const colorMap = {
  red: {
    bg: "bg-red-100",
    text: "text-red-700"
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-700"
  },
  blue:{
    bg: "bg-blue-100",
     text: "text-blue-700"
  },
    yellow:{
    bg: "bg-yellow-100",
     text: "text-yellow-700"
  },

};

  return(

      <div className='instructions-table bg-white shadow-xl rounded-xl z-10'>
              <div className='flex justify-between px-4 pt-4 '>
                <div>
                  <h1 className='text-lg font-semibold text-start'>instructions in Progress</h1>
                  <p className='text-sm'>Monthly instructions requested by firm</p>
                </div>
                <div className='flex gap-4 text-sm mb-4'>
                  <button className='px-1 py-2 '>new requests</button>
                  <button className='border-b-2 px-1 border-[#064D44] py-2  '>inProgress</button>
                  <button className='px-1 py-2 '>completed</button>
                  <button className='px-1 py-2 '>invoices</button>
                </div>
              </div>
               <table className="table-auto w-full text-sm">
        <thead className="background">
            <tr>
                <th className="mx-4 py-2 rounded-l-full">WPR no.</th>
                <th className="mx-4 py-2">Owner</th>
                <th className="mx-4 py-2">Serve name</th>
                <th className="mx-4 py-2">Court name</th>
                <th className="mx-4 py-2">Service type</th>
                <th className="mx-4 py-2">Deadline</th>
                <th className="mx-4 py-2 rounded-r-full">Process Status</th>
            </tr>
        </thead>
        <tbody>
      {
        records.map((record)=>{
             color = record.processStatus[2];
               return  ( <tr key={record.wprNo}>
                <td className="py-2 rounded-l-full">{record.wprNo}</td>
                <td className="py-2">{record.owner}</td>
                <td className="py-2">{record.serveName}</td>
                <td className="py-2">{record.courtName}</td>
                <td className="py-2">{record.serviceType}</td>
                <td className="py-2">{record.deadLine}</td>
                <td className="py-2 rounded-r-full">
                    <button className={`
                           ${colorMap[color]?.bg || "bg-green-100"} 
                           ${colorMap[color]?.text || "text-green-700"}
     rounded-full px-2 py-1`}>{record.processStatus[0]}</button>
                </td>
            </tr> )
        })
      }

        </tbody>
    </table>
            </div>

     ) 
}