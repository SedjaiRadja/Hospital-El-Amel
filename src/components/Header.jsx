import header from "../assets/header.jpg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="relative">
      {/* Image */}
      <img
        src={header}
        alt="Hospital Header"
        className="w-full h-[350px] object-cover object-[85%_center] rounded-lg shadow-md 
             sm:h-[500px] lg:h-[800px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-black/30 to-transparent rounded-lg"></div>

      {/* Content (Text + Buttons) */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-16 gap-3 sm:gap-4">
        {/* Title */}
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-teal-900 max-w-xs sm:max-w-md lg:max-w-xl">
          TAKE CARE OF YOUR <br className="sm:hidden" /> HEALTH
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-xl lg:text-2xl text-slate-700 max-w-xs sm:max-w-md lg:max-w-lg">
          Professional medical care for you <br className="sm:hidden" /> and
          your family
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 ">
          <Link to="/about">
            <button className="cursor-pointer cursor-target bg-teal-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base font-medium shadow-md">
              About Us
            </button>
          </Link>

          <Link to="/appointment">
            <button className="cursor-pointer cursor-target bg-blue-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-800 transition text-sm sm:text-base font-medium shadow-md">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
