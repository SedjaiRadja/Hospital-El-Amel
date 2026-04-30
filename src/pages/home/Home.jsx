import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Cards from "@/components/cards";
import Doctors from "@/components/Doctors";
function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <Cards />
      <Doctors />
    </div>
  );
}
export default Home;
