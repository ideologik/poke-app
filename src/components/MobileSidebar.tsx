import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 top-4 left-4 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none focus:ring"
      >
        <div className="flex flex-col gap-1">
          <div className="bg-white w-6 h-0.5"></div>
          <div className="bg-white w-6 h-0.5"></div>
          <div className="bg-white w-6 h-0.5"></div>
        </div>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-[80vw] h-full overflow-y-auto z-10 bg-white">
          <Sidebar closeSidebar={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
