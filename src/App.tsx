import "./App.css";
import MainView from "./components/MainView/MainView";
import MobileSidebar from "./components/MobileSidebar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="hidden md:block w-[20vw]">
        <Sidebar />
      </div>
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="flex-1">
        <MainView />
      </div>
    </div>
  );
}

export default App;
