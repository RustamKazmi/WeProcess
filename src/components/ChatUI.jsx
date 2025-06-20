import { faPlaneArrival } from "@fortawesome/free-solid-svg-icons/faPlaneArrival";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faSearch, faShare } from "@fortawesome/free-solid-svg-icons";
// import { FaPaperPlane } from "react-icons/fa";

export default function ChatUI() {
  const ChatList = [
    { name: "Support", message: "I need help...", time: "1m ago", unread: true },
    { name: "Ava Williams", message: "Has the sales team...", time: "2m ago" },
    { name: "Bryan Smith", message: "Ok, I’ll review it...", time: "5m ago" },
    { name: "Isabella Reid", message: "What about the new report?", time: "10m ago" },
    { name: "Laura Cooper", message: "Check this out!", time: "12m ago" },
  ]
  return (
    <>
      <Navbar />
      <div className="flex text-sm h-[81vh] bg-gray-50 gap-4 pt-2">
        {/* Sidebar */}
        <div className='left-bar h-full rounded-xl w-[23%] px-2 shadow-xl pt-4 flex flex-col gap-4 bg-white'>
          <div className="flex gap-3 self-center">
            <h2 className="text-xl font-semibold mb-4">Chats </h2>
            <span className="text-xs border flex flex-col w-8 h-8 rounded-full justify-center items-center background text-gray-400">5</span>
          </div>
          <div className="flex items-center px-2 py-2 mb-4 gap-2 background border border-gray-300 focus:ring focus:border-blue-300 rounded-full">
            <span><FontAwesomeIcon icon={faSearch} /></span>
            <input
              type="text"
              placeholder="Search here..."
              className="py-1 border-none focus:outline-none w-full"
            />
          </div>
          <div className="space-y-3 overflow-y-auto">
            {/* Chat List Items */}
            {ChatList.map((chat, idx) => (
              <div key={idx} className={`p-2 rounded-md flex gap-2 items-center justify-start cursor-pointer hover:bg-gray-100 text-start ${chat.unread ? "bg-gray-50" : ""}`}>
                <div className="w-12 h-12 rounded-full text-white flex items-center justify-center text-lg"><img className="w-fit rounded-full bg-gray-300 border border-gray-600" src='./images/avatar.png' alt="" /></div>
                <div className="flex flex-col gap-1 w-full">
                  <div className=" flex justify-between w-full">
                    <p className="font-medium">{chat.name}</p>
                    <p>{chat.time}</p>
                  </div>
                  <div className="text-gray-500 text-xs flex justify-between gap-3">
                    <span>{chat.message}</span>
                    <span className="text-primary font-semibold text-md">{chat.unread && "4+"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className='right-bar h-full bg-white shadow-xl rounded-xl w-[77%] flex flex-col gap-2 px-4 pt-4'>
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-2">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">A</div>
            <h3 className="text-lg font-semibold">Ava Williams</h3>
          </div>

            <div className="separator"></div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
            {/* Date separator */}
            <div className="text-center text-xs text-gray-500">Monday</div>

            {/* Received message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">A</div>
              <div>
                <div className="text-xs mb-1 text-gray-500 flex justify-between">
                  <p>Anil Williams</p>
                  <p >Monday 4:32 PM</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nunc risus tempor purus vitae id.</p>
                </div>
              </div>
            </div>

            {/* Sent message */}
            <div className="flex items-end justify-end gap-2">
              <div>
                <div className="text-xs mb-1 text-gray-500 flex justify-between">
                  <p>You</p>
                  <p >Monday 4:32 PM</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nunc risus tempor purus vitae id.</p>
                </div>
              </div>
            </div>

            {/* Date separator */}
            <div className="text-center text-xs text-gray-500 ">Today</div>

            {/* Received message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">A</div>
              <div>
                <div className="text-xs mb-1 text-gray-500 flex justify-between">
                  <p>Anil Williams</p>
                  <p >Monday 4:32 PM</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nunc risus tempor purus vitae id.</p>
                </div>
              </div>
            </div>



            {/* Sent message */}
            <div className="flex items-end justify-end gap-2">
              <div>
                <div className="text-xs mb-1 text-gray-500 flex justify-between">
                  <p>You</p>
                  <p >Monday 4:32 PM</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg max-w-md">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nunc risus tempor purus vitae id.</p>
                </div>
              </div>
            </div>
               {/* Typing... */}
          <div className="flex items-center gap-2  w-fit fixed bottom-28">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">A</div>
            <div className="text-gray-400 italic">Typing...</div>
          </div>
          </div>
            

       
          {/* Input Box */}
          <div className="border-t p-4 flex items-center gap-2 bg-white">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-green-600 p-2 rounded-full text-white">
              <FontAwesomeIcon icon={faShare} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
