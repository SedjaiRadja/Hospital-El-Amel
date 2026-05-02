import Header from "@/components/Header";
import Cards from "@/components/cards";
import Doctors from "@/components/Doctors";
import Speciality from "@/components/Speciality";

function Home() {
  return (
    <div>
      <Header />
      <Cards />
      <Speciality />
      <Doctors showButton={true} />
    </div>
  );
}

export default Home;
