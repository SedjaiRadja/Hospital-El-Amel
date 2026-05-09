import {
  HeartPulse,
  Baby,
  Stethoscope,
  Activity,
  BrainCircuit,
} from "lucide-react";
function Speciality() {
  const specialities = [
    { name: "Cardiology", icon: <HeartPulse /> },
    { name: "Pediatrics", icon: <Baby /> },
    { name: "Dentistry", icon: <Stethoscope /> },
    { name: "Gynecology", icon: <Activity /> },
    { name: "Neurology", icon: <BrainCircuit /> },
  ];
  return (
    <div data-aos="fade-up">
      <div className="flex ml-15 items-center gap-2 m-10">
        <div className="w-10 h-[2px] bg-red-900 mt-0"></div>
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          Our Specialities
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {specialities.map((speciality) => (
          <div className="cursor-target bg-sky-50 rounded-xl shadow-md p-6 hover:shadow-[0_0_20px_#0ea5e9] transition flex flex-col">
            <div className="text-blue-600 mb-3">{speciality.icon}</div>
            <h2 className="text-lg font-semibold mt-4">{speciality.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Speciality;
