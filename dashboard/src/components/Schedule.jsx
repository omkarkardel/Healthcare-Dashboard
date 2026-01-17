import React from 'react'

function AppointmentCard({ title, time, icon }) {
  return (
    <div className="relative bg-indigo-100 rounded-xl p-4">
      <p className="text-sm font-medium text-indigo-900">{title}</p>
      <span className="mt-1 block text-xs text-indigo-700">{time}</span>
      {icon ? (
        <span className="absolute bottom-2 right-3 text-base select-none">
          {icon}
        </span>
      ) : null}
    </div>
  )
}

const Schedule = () => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="font-medium mb-4 text-gray-800">The Upcoming Schedule</p>

      {/* Thursday */}
      <p className="text-xs text-gray-500 mb-2">On Thursday</p>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <AppointmentCard title="Health checkup complete" time="11:00 AM" icon="🖊️" />
        <AppointmentCard title="Ophthalmologist" time="14:00 PM" icon="🧿" />
      </div>

      {/* Saturday */}
      <p className="text-xs text-gray-500 mb-2">On Saturday</p>
      <div className="grid grid-cols-2 gap-3">
        <AppointmentCard title="Cardiologist" time="12:00 AM" icon="❤️" />
        <AppointmentCard title="Neurologist" time="16:00 PM" icon="🧠" />
      </div>
    </div>
  )
}

export default Schedule;

