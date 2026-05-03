import doctors from "../data/doctors";
function AppointmentForm() {
  return (
    <div className="bg-transparent text-black flex flex-col lg:flex-row lg:justify-around gap-10 p-5">
      {/* Left Side (Title + Subtitle) */}
      <div className="w-full lg:w-1/2 pl-8">
        <div className="flex items-center gap-3 pt-10">
          <div className="w-10 h-[2px] bg-red-900"></div>
          <h1 className="text-black text-3xl sm:text-4xl font-bold">
            Make An Online Appointment
          </h1>
        </div>
        <p className="text-gray-600 mt-2 sm:text-2xl">
          Schedule your appointment online in just a few simple steps.
        </p>
      </div>
      {/* Form */}
      <form className="bg-transparent p-6 rounded-xl w-full max-w-lg flex flex-col gap-4">
        {/* First + Last Name */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 rounded-lg bg-transparent border border-gray-600 
                       focus:outline-none focus:border-white 
                       transition duration-300 hover:scale-105"
          />
        </div>

        <input
          placeholder="Date of Birth"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        />
        <input
          placeholder="Phone Number"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        />
        <select className=" p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-300 hover:scale-105">
          <option className="text-white">Select your gender</option>
          <option className="text-black">Male</option>
          <option className="text-black">Female</option>
        </select>
        <select className=" p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-300 hover:scale-105">
          <option className="text-white">Select a Speciality</option>
          {doctors.map((doctor, index) => (
            <option className="text-black" key={index}>
              {doctor.specialty}
            </option>
          ))}
        </select>
        <select className=" p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 transition duration-300 hover:scale-105">
          <option className="text-white">Emergency level</option>
          <option className="text-black">low</option>
          <option className="text-black">medium</option>
          <option className="text-black">high</option>
        </select>
        <textarea
          placeholder="Notes"
          rows="5"
          className="p-3 rounded-lg bg-transparent border border-gray-600 
                     focus:outline-none focus:border-white 
                     transition duration-300 hover:scale-105"
        ></textarea>
        {/* Button */}
        <button
          type="submit"
          className="bg-#cfe9f0 text-black border border-gray-600 py-3 rounded-lg font-semibold 
                     hover:bg-gray-400 hover:scale-105 
                     transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default AppointmentForm;
