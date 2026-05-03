import Doctors from "../../components/Doctors";
import Footer from "../../components/Footer";
function DoctorPage() {
  return (
    <div>
      <div className="flex ml-15 items-center gap-2 mt-15 ">
        <div className="w-10 h-[2px] bg-red-900 mt-0"></div>
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          Our Doctors
        </h1>
      </div>
      <p className="text-gray-600 mt-2 sm:text-2xl m-10">
        Meet our team of experienced and dedicated doctors.
      </p>
      <Doctors showButton={true} />
      <Footer />
    </div>
  );
}
export default DoctorPage;
