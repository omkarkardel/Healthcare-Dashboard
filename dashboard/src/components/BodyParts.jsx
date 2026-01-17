import React from "react"; 
import humanImg from "../assets/human.jpeg";
import { GiLungs, GiTooth, GiBoneKnife } from "react-icons/gi";

function HealthCard({ icon, title, date, progress, colorClass }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-sm p-4 h-full">
      <div className="text-3xl text-indigo-500 shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">Date: {date}</p>
        <div className="mt-2 h-[6px] w-full rounded-full bg-gray-200">
          <div className={`h-[6px] rounded-full ${colorClass}`} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

const BodyParts = () => {
  return (
     <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="font-semibold text-gray-800 mb-4">Body Health</h2>
      <div className="flex gap-6 items-center h-[420px]">
        <div className="w-[320px] h-full relative flex justify-center items-center">
          <img src={humanImg} alt="Human Body" className="h-full w-auto object-contain" />
        </div>
        <div className="w-[360px] h-full grid grid-rows-3 gap-3">
          <HealthCard icon={<GiLungs />} title="Lungs" date="26 Oct 2021" progress={25} colorClass="bg-rose-400" />
          <HealthCard icon={<GiTooth />} title="Teeth" date="26 Oct 2021" progress={80} colorClass="bg-emerald-500" />
          <HealthCard icon={<GiBoneKnife />} title="Bone" date="26 Oct 2021" progress={40} colorClass="bg-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default BodyParts;
