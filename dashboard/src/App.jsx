import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import BodyParts from "./components/BodyParts";
// import Activity from "./components/Activity";
import Calendar from "./components/Calendar";
import Dentists from "./components/Dentists";
import Physiotherapy from "./components/Physiotherapy";
import Schedule from "./components/Schedule";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      {/* Top Navbar */}
      <Navbar/>

      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT COLUMN */}
            <div className="col-span-5 space-y-6 border-r border-gray-200 pr-6">
              <Dashboard/>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-7">
              <div className="w-full space-y-6">
                <Calendar />

                <div className="grid grid-cols-2 gap-4">
                  <Dentists />
                  <Physiotherapy />
                </div>
                <Schedule />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
