import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Cards from "@/components/cards";
import Doctors from "@/components/Doctors";
import Speciality from "@/components/Speciality";
function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Cards />
      <Speciality />
      <Doctors />
    </div>
  );
}
export default Home;
