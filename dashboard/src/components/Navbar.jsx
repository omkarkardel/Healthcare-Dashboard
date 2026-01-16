import React from 'react'
import { Bell, User, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between border-b bg-white">
      
      {/* Left - Name */}
      <div className="text-xl font-semibold">
        <span>Health</span>care.
      </div>

      {/* Middle - Search with Notification */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Bell className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
      </div>

      {/* Right - User Icon & Add Button */}
      <div className="flex items-center gap-4">
        <User className="text-gray-600 cursor-pointer" size={24} />
        <button className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add
        </button>
      </div>

    </nav>
  )
}

export default Navbar
