import doctors from "@/data/doctors";
import { Link } from "react-router-dom";
function Doctors({ showButton = false }) {
  return (
    <div data-aos="fade-up" className="mb-10">
      <div className="grid gap-6 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-gradient-to-br from-sky-50 to-slate-50 p-4 rounded-xl mx-5 shadow-md text-center hover:shadow-[0_0_20px_#0ea5e9] transition duration-300"
          >
            <div className="flex justify-center items-center">
              <img
                src={doctor.image}
                alt={doctor.fullName}
                className="h-40 w-40 mx-auto rounded-full object-cover mb-4 border-4 border-blue-300 shadow-sm"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">
                  {doctor.fullName}
                </h2>
                <p className="text-sm text-slate-600">{doctor.dateOfBirth}</p>
                <p className="text-sm text-slate-600">
                  specialty : {doctor.specialty}
                </p>
                <p className="text-sm text-slate-600">
                  Experience: {doctor.experienceYears} years
                </p>
                {showButton && (
                  <Link to={`/doctors/${doctor.id}`}>
                    <button className="mt-4 bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                      View Profile
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Doctors;
