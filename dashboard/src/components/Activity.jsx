import React from 'react';

const Activity = () => {

  const days = [
  { label: 'Mon', bars: [60, 40, 70] },
  { label: 'Tues', bars: [65, 35, 55] },
  { label: 'Wed', bars: [45, 30, 50] },
  { label: 'Thurs', bars: [55, 40, 65] },
  { label: 'Fri', bars: [80, 55, 75] },
  { label: 'Sat', bars: [60, 45, 70] },
  { label: 'Sun', bars: [40, 30, 50] },
];

const barColors = ['bg-indigo-500', 'bg-cyan-400', 'bg-violet-500'];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <div className="flex justify-between mb-3">
        <p className="font-medium text-gray-800">Activity</p>
        <span className="text-sm text-gray-500">3 appointments this week</span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 items-end">
        {days.map((day) => (
          <div key={day.label} className="flex flex-col items-center">
            <div className="flex items-end gap-1 h-28">
              {day.bars.map((h, idx) => (
                <div
                  key={idx}
                  className={`w-2 rounded ${barColors[idx % barColors.length]}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <span className="mt-2 text-[10px] text-gray-500">{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;


