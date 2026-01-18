import React from "react";

const Calendar = () => {
  const calendarData = [
    { day: "Mon", date: 25, times: ["10:00", "12:00"] },
    { day: "Tue", date: 26, times: ["08:00", "09:00"], active: "09:00" },
    { day: "Wed", date: 27, times: ["12:00", "13:00"] },
    { day: "Thu", date: 28, times: ["10:00", "11:00"], active: "11:00" },
    { day: "Fri", date: 29, times: ["12:00", "14:00", "16:00"] },
    { day: "Sat", date: 30, times: ["12:00"] },
    { day: "Sun", date: 31, times: ["09:00", "11:00"] },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">October 2021</h2>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500">This Week</span>
          <div className="flex gap-2 text-gray-400">
            <button className="w-6 h-6 rounded-md bg-gray-100">&lt;</button>
            <button className="w-6 h-6 rounded-md bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3 text-center text-sm">
        {calendarData.map((item) => (
          <div key={item.day} className="space-y-2">
            
            {/* Day + Date */}
            <div>
              <p className="font-medium text-gray-700">{item.day}</p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>

            {/* Time Slots */}
            {item.times.map((time) => (
              <div
                key={time}
                className={`py-1 rounded-lg text-xs
                  ${
                    item.active === time
                      ? "bg-blue-500 text-white font-medium"
                      : "bg-gray-100 text-gray-600"
                  }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;



