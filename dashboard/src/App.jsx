import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-12">
            {/* LEFT COLUMN */}
            <div className="space-y-6 lg:col-span-5 lg:border-r lg:border-gray-200 lg:pr-6">
              <Dashboard />
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7">
              <div className="w-full space-y-6">
                <Calendar />

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
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
