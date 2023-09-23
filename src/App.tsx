import "./App.css";
import MainView from "./components/MainView";
import MobileSidebar from "./components/MobileSidebar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex ">
      <div className="hidden md:block w-[20vw]">
        <Sidebar />
      </div>
      <div className="md:hidden w-[80vw]">
        <MobileSidebar />
      </div>
      <div className="w-[80vw]">
        <MainView />
      </div>
    </div>
  );
}

export default App;
