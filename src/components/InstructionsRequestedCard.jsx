import React from "react"

export default function InstructionsRequestedCard(){
    return (
        <div className="bg-white rounded-xl h-1/2 p-4 shadow-md w-full">
  {/* Header */}
  <div className="flex justify-between items-center mb-2 text-start w-full">
    <div>
      <h2 className="font-semibold text-sm text-gray-800">Instructions requested</h2>
      <p className="text-xs text-gray-500">Monthly instructions requested by firm</p>
    </div>
    <select className="text-sm border border-gray-300 rounded-full px-2 py-1 text-gray-600">
      <option>Quarterly</option>
      <option>Monthly</option>
    </select>
  </div>

  {/* Chart */}
   <div className='flex w-full'>
        <div className=" font-semibold mb-1 text-gray-800 w-1/3 text-start">455</div>
  <div className=" font-semibold mb-1 text-gray-800 w-1/3 text-start">409</div>
        <div className=" font-semibold mb-1 text-gray-800 w-1/3 text-start">222</div>
    </div>
  <div className="flex items-end justify-between h-36 gap-1 w-full">
   
    {/* January */}
    <div className="flex flex-col items-center w-1/3">
    
      <div className="h-24 w-full bg-black rounded-t-xl"></div>
      <span className="text-xs mt-1 text-gray-600">January</span>
    </div>

    {/* February */}
    <div className="flex flex-col items-center w-1/3">
    
      <div className="relative w-full h-8 bg-pink-500 rounded-t-xl">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white text-pink-500 text-[10px] font-semibold rounded-full px-2 shadow-sm">
          -10%
        </div>
      </div>
      <span className="text-xs mt-1 text-gray-600">February</span>
    </div>

    {/* March */}
    <div className="flex flex-col items-center w-1/3">

      <div className="w-full h-14 bg-purple-200 rounded-t-xl bg-[repeating-linear-gradient(-45deg,_#c084fc,_#c084fc_4px,_#e9d5ff_4px,_#e9d5ff_8px)]"></div>
      <span className="text-xs mt-1 text-gray-600">March</span>
    </div>
  </div>
</div>
    )
}