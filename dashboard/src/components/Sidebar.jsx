import {
  FiHome,
  FiClock,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiMessageSquare,
  FiHeadphones,
  FiMoreHorizontal,
} from "react-icons/fi";
import React from "react";


export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen ? (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-30 lg:hidden"
          onClick={onClose}
        />
      ) : null}

      <aside
        className={
          "fixed lg:static z-40 h-full w-64 flex flex-col bg-white text-gray-700 px-4 py-6 border-r transition-transform duration-200 " +
          (isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0")
        }
      >

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

        <SidebarItem icon={<FiHome />} text="Dashboard" active />
        <SidebarItem icon={<FiClock />} text="History" />
        <SidebarItem icon={<FiCalendar />} text="Calendar" />
        <SidebarItem icon={<FiUsers />} text="Appointments" />
        <SidebarItem icon={<FiBarChart2 />} text="Statistics" />

      </div>

      {/* Tools */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
          Tools
        </p>

        <TeamItem icon={<FiMessageSquare />} text="Chat" />
        <TeamItem icon={<FiHeadphones />} text="Support" />
        <TeamItem icon={<FiSettings />} text="Settings" />

      </div>

      </aside>
    </>
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

function TeamItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
        ${active ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100"}`}
    >
      <span className="text-lg text-gray-500">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

