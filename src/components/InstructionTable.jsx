import { text } from "@fortawesome/fontawesome-svg-core";
import { useLocation, useNavigate } from "react-router-dom"


export default function InstructionTable() {
  const location = useLocation();
  const path = location.pathname;

  const navigate = useNavigate()

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
      processStatus: ["2nd Attempt", "paid", "yellow"]
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
      processStatus: ["3rd Attempt", "pending", "red"]
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
      processStatus: ["in Transit", "paid"]
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
      processStatus: ["pending", "pending", "purple"]
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
      processStatus: ["3rd Attempt", "pending", "red"]
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
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700"
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-700"
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700"
    }

  };
  return (

    <div className='instructions-table bg-white shadow-xl rounded-xl z-10'>
      <div className='flex justify-between px-4 pt-4 '>
        <div>
          <h1 className='text-lg font-semibold text-start'>instructions in Progress</h1>
          <p className='text-sm'>Monthly instructions requested by firm</p>
        </div>
        <div>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-600">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Quarterly</option>
          </select>
        </div>
      </div>
      <table className="table-auto w-full text-sm">
        <thead className="background">
          <tr >
            <th className="mx-4 py-2 rounded-l-2xl">WPR no.</th>
            <th className="mx-4 py-2">Owner</th>
            <th className="mx-4 py-2">Serve name</th>
            <th className="mx-4 py-2">Court name</th>
            <th className="mx-4 py-2">Service type</th>
            <th className="mx-4 py-2">Recipient's name</th>
            <th className="mx-4 py-2">Recipient's address</th>
            <th className="mx-4 py-2">Date issues</th>
            <th className="mx-4 py-2">Deadline</th>
            <th className="mx-4 py-2 rounded-r-2xl">Process Status</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map((record) => {
              color = record.processStatus[2];
              return (
                <tr key={record.wprNo} onClick={() => {
                  navigate(`/single/instruction/${record.wprNo}/${record.serveName.replaceAll(' ', '-')}`);
                }}>
                  <td className="py-2 rounded-l-2xl">{record.wprNo}</td>
                  <td className="py-2">{record.owner}</td>
                  <td className="py-2">{record.serveName}</td>
                  <td className="py-2">{record.courtName}</td>
                  <td className="py-2">{record.serviceType}</td>
                  <td className="py-2">{record.recipientsName}</td>
                  <td className="py-2">{record.recipientsAddress}</td>
                  <td className="py-2">{record.dateIssues}</td>
                  <td className="py-2">{record.deadLine}</td>
                  <td className="py-2 rounded-r-2xl">
                    {<button className={`
                                       ${(path == '/instructions') && (colorMap[color]?.bg || "bg-blue-100")} 
                                        ${(path == '/instructions') && (colorMap[color]?.text || "text-blue-700")}
                                        ${(path == '/invoices' && record.processStatus[1] == "paid") && "bg-green-100 text-green-700"}
                                        ${(path == '/invoices' && record.processStatus[1] == "pending") && "bg-yellow-100 text-yellow-700"}
                                     rounded-full px-2 py-1 w-28 font-semibold`}>
                      {(path == '/instructions') && record.processStatus[0]}
                      {(path == '/invoices') && record.processStatus[1]}
                    </button>}

                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}