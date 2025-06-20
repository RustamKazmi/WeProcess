import { useState } from "react";
import DashboardTable from "./DashboardTable";
import InstructionOverviewcard from "./instructionOverviewcard";
import InstructionsRequestedCard from "./InstructionsRequestedCard";
import Navbar from "./Navbar";
import InstructionStatusCard from "./InstructionStatusCard";

export default function Dashboard (){
  const instructionCardData = [
    {
      title : "Total Instructions",
      desc: "Count of the instrunctions created",
      count: 250,
      additionalInfo : ["27 this month", "green"]
    },
        {
      title : "Instructions in progress",
      desc: "Total count of in progress instructions",
      count: 7,
      additionalInfo : ["4 urgent", "red"]
    },
      {
      title : "Instructions completed",
      desc: "Instructions completed this month",
      count: 50,
      additionalInfo : ["5 with pending invoices", "red"]
    }
  ]
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
      processStatus: ["1st Attempt", "paid"]
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
      processStatus: ["1st Attempt", "pending"]
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
      processStatus: ["1st Attempt", "paid"]
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
      processStatus: ["1st Attempt", "pending"]
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
      processStatus: ["1st Attempt", "pending"]
    },

  ]
    return (
        <>
            <Navbar />
    
        <div className='w-full flex '>
                  <div className='w-4/6 px-5 pr-5 flex flex-col gap-4'>
                    <div className='flex gap-4 pt-3'>
                     {
                      instructionCardData.map((instruction)=>{
                        return <InstructionOverviewcard key={instruction.title} instruction={instruction} />
                      })
                     }
                    </div>
                    <DashboardTable />
                  </div>
        
        
                  <div className='right-bar w-2/6 h-full flex flex-col gap-4 py-4 '>
                    <InstructionsRequestedCard />
                    <InstructionStatusCard />
        
                  </div>
                </div>
                    </>
    )
}