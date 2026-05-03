import Header from "@/components/Header";
import Cards from "@/components/cards";
import Doctors from "@/components/Doctors";
import Speciality from "@/components/Speciality";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <Speciality />
      <div className="flex ml-15 items-center gap-2 m-10 ">
        <div className="w-10 h-[2px] bg-red-900 mt-0"></div>
        <h1 className="text-black text-2xl sm:text-3xl font-bold">
          Our Doctors
        </h1>
      </div>
      <Doctors showButton={true} />
      <Footer />
    </div>
  );
}

export default Home;
