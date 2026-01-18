import React from 'react'
import { Bell, User, Plus, Menu } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="w-full h-16 px-4 sm:px-6 flex items-center justify-between border-b bg-white">
      
      {/* Left - Name */}
       <div className="flex items-center gap-3">
         <button
           className="inline-flex lg:hidden p-2 rounded-md border hover:bg-gray-50"
           aria-label="Open menu"
           onClick={onMenuClick}
         >
           <Menu size={20} />
         </button>
         <div className="text-2xl font-bold tracking-tight">
         <span className="text-blue-600">Health</span>
         <span className="text-gray-800">care</span>
         <span className="text-blue-600">.</span>
         </div>
       </div>

      {/* Middle - Search with Notification */}
      <div className="relative hidden sm:block w-1/2 lg:w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Bell className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
      </div>

      {/* Right - User Icon & Add Button */}
      <div className="flex items-center gap-2 sm:gap-4">
        <User className="text-gray-600 cursor-pointer" size={24} />
        <button className="hidden sm:flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={18} />
          Add
        </button>
      </div>

    </nav>
  )
}

export default Navbar;
