import BodyParts from "./BodyParts";
import Activity from "./Activity";
// import humanImg from "../assets/human.jpeg";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
      <div className="space-y-6">
        <BodyParts />
        <Activity />
      </div>
    </div>
  );
}






