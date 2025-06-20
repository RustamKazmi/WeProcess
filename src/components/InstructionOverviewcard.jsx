

export default function InstructionOverviewcard({instruction}) {
    const color = instruction.additionalInfo[1];

const colorMap = {
  red: {
    bg: "bg-red-50",
    text: "text-red-700"
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700"
  },
};
    return (
        <div className="bg-white text-black w-1/3 shadow-xl rounded-2xl">
            <div className="px-3 py-2 flex flex-col justify-between h-full">
                <h2 className="text-start max-w-10/12 text-xl">{instruction.title}</h2>
                <p className="text-start text-sm max-w-10/12">{instruction.desc}</p>
                <div className="flex items-center mt-4 max-w-10/12 ">
                    <p className="text-3xl font-semibold">{instruction.count}</p>
                    <span
  className={`text-[10px] px-2 py-1 font-semibold rounded-full 
    ${colorMap[color]?.bg || "bg-gray-100"} 
    ${colorMap[color]?.text || "text-gray-700"}`}
>
  {instruction.additionalInfo[0]}
</span>
                </div>
            </div>
        </div>
    )
}

