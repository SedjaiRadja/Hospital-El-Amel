import { useParams } from "react-router-dom";
import doctors from "@/data/doctors";
import { Link } from "react-router-dom";
function DoctorsDetails() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return <p className="text-center text-xl mt-10">Doctor not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <img
            src={doctor.image}
            alt={doctor.fullName}
            className="h-48 w-48 mx-auto rounded-full object-cover mb-4 border-4 border-blue-300 shadow-sm"
          />
          <h1 className="text-3xl font-bold text-gray-900">
            {doctor.fullName}
          </h1>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Date of Birth:</span>
            <span className="text-gray-600">{doctor.dateOfBirth}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Specialty:</span>
            <span className="text-gray-600">{doctor.specialty}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">availability:</span>
            <span className="text-gray-600">{doctor.availability}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Experience:</span>
            <span className="text-gray-600">
              {doctor.experienceYears} years
            </span>
          </div>
          {/* Bio */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-gray-700">Bio:</span>
            <p className="text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
              {doctor.bio}
            </p>
          </div>

          {/* Education (نخليه كما هو أو نفس الأسلوب إذا طويل) */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-gray-700">Education:</span>
            <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
              {doctor.education}
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-gray-700">Certifications:</span>

            <div className="flex flex-wrap gap-2">
              {(Array.isArray(doctor.certifications)
                ? doctor.certifications
                : doctor.certifications?.split(",") || []
              ).map((cert, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {cert.trim()}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Address:</span>
            <span className="text-gray-600">{doctor.address}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">rating: </span>
          <span className="text-gray-600">{doctor.rating}</span>
        </div>
        <Link to={"/doctors"}>
          <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition ">
            go back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorsDetails;
