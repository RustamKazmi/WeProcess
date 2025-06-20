

export default function InstructionStatusCard(){
    return (
        <div className="bg-white rounded-xl  h-1/2 p-4 shadow-md w-full ">
  {/* Header */}
  <div className="flex justify-between items-center mb-2">
    <div>
      <h2 className="font-semibold text-sm text-gray-800">Instructions status</h2>
      <p className="text-xs text-gray-500">Monthly instructions requested by firm</p>
    </div>
    <select className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-600">
      <option>Weekly</option>
      <option>Monthly</option>
      <option>Quarterly</option>
    </select>
  </div>

  {/* Donut Chart */}
  <div className="flex items-center justify-between mt-4">
    {/* Donut */}
<div className="relative w-36 h-36">
  {/* Segment 1: 50% */}
  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#6366f1_0_50%,transparent_0_100%)] rotate-0"></div>

  {/* Segment 2: 35% */}
  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#f472b6_0_35%,transparent_0_100%)] rotate-[180deg]"></div>

  {/* Segment 3: 15% */}
  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#666_0_15%,transparent_0_100%)] rotate-[306deg]"> </div>

  {/* Inner white circle (donut hole) */}
  <div className="absolute top-[12.5%] left-[12.5%] w-[75%] h-[75%] bg-white rounded-full z-10"></div>
</div>


    {/* Legend */}
    <div className="text-sm space-y-2 ml-4">
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 rounded-full bg-[#6366f1]"></span>
        <span>On Hold</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 rounded-full bg-[#f472b6]"></span>
        <span>In Progress</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="inline-block w-3 h-3 rounded-full bg-[#8b5cf6]"></span>
        <span>Completed</span>
      </div>
    </div>
  </div>
</div>
    )
}