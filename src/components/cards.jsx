import headerCards from "@/data/cards";
import {
  Siren,
  Stethoscope,
  Microscope,
  Calendar,
  FlaskConical,
  Headset,
} from "lucide-react";

const iconMap = {
  emergency: <Siren className="w-6 h-6" />,
  doctor: <Stethoscope className="w-6 h-6" />,
  equipment: <Microscope className="w-6 h-6" />,
  calendar: <Calendar className="w-6 h-6" />,
  lab: <FlaskConical className="w-6 h-6" />,
  support: <Headset className="w-6 h-6" />,
};

function Cards() {
  return (
    <div data-aos="fade-up">
      <div className="flex ml-15 items-center gap-2 m-10">
        <div className="w-10 h-[2px] bg-red-900 mt-0"></div>
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          Why Choose Us ?
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        {headerCards.map((card) => (
          <div
            key={card.id}
            className="bg-sky-50 rounded-xl shadow-md p-6 hover:shadow-[0_0_20px_#0ea5e9] transition flex flex-col "
          >
            <div className="text-blue-600 mb-3">{iconMap[card.icon]}</div>

            <h3 className="text-lg font-semibold text-slate-900">
              {card.title}
            </h3>

            <p className="text-sm text-slate-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
