import doctors from "@/data/doctors";
import patients from "@/data/patients";
function Dashboard() {
  return (
    <div data-aos="fade-up" className="mb-10">
      <div className="grid gap-6 lg:grid-cols-4 p-10">
        {patients.map((patient) => {
          const doctor = doctors.find((d) => d.id === patient.doctorId);

          return (
            <div
              key={patient.id}
              className="cursor-target bg-gradient-to-br from-sky-50 to-slate-50 p-4 rounded-xl mx-5 shadow-md text-center hover:shadow-[0_0_20px_#0ea5e9] transition duration-300"
            >
              <h3 className="text-lg font-semibold text-black">
                {patient.fullName}
              </h3>
              <p className="text-sm text-slate-600">Phone : {patient.phone}</p>
              <p className="text-sm text-slate-600">
                Address : {patient.address}
              </p>
              <p className="text-sm text-slate-600">Age : {patient.age}</p>
              <p className="text-sm text-slate-600">
                Blood Type : {patient.bloodType}
              </p>
              <p className="text-sm text-slate-600">
                Disease: {patient.disease}
              </p>

              <p className="text-sm text-slate-600">
                Doctor: {doctor?.fullName}
              </p>

              <p className="text-sm text-slate-600">
                Specialty: {doctor?.specialty}
              </p>
              <p className="text-sm text-slate-600">
                Appointment Date : {patient.appointmentDate}
              </p>
              <p className="text-sm text-slate-600">Status: {patient.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Dashboard;
