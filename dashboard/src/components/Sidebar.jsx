import {
  FiHome,
  FiClock,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiMoreHorizontal,
} from "react-icons/fi";


export default function Sidebar() {
  return (
    <aside className="h-full w-64 flex flex-col bg-white text-gray-700 px-4 py-6 border-r">

      {/* Top */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold text-blue-600"></div>
        <FiMoreHorizontal className="cursor-pointer text-gray-500" />
      </div>

      {/* Navigation */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
          General
        </p>

        <SidebarItem icon={<FiHome />} text="Dashboard" />
        <SidebarItem icon={<FiClock />} text="History" active />
        <SidebarItem icon={<FiCalendar />} text="Calendar" />
        <SidebarItem icon={<FiUsers />} text="Appointments" />
        <SidebarItem icon={<FiBarChart2 />} text="Statistics" />
        <SidebarItem icon={<FiSettings />} text="Settings" />

      </div>

      {/* Tools */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
          Tools
        </p>

        <TeamItem letter="C" name="Chat" />
        <TeamItem letter="S" name="Support" />
        <TeamItem letter="S" name="Settings" />
      </div>

    </aside>
  );
}

/* ---------- Items ---------- */

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md mb-1 cursor-pointer
        ${
          active
            ? "bg-gray-100 text-blue-600"
            : "hover:bg-gray-100"
        }`}
    >
      <span className="text-lg text-gray-500">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function TeamItem({ letter, name }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100">
      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-700">
        {letter}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
}
