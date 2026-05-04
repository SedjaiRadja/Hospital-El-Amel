import About from "../../components/About";
import Footer from "../../components/Footer";
import doctors from "../../assets/doctors.jpg";

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col lg:flex-row h-auto">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <About />
        </div>

        {/* RIGHT IMAGE (FULL HEIGHT) */}
        <div className="hidden lg:block w-1/2 self-stretch">
          <img
            src={doctors}
            alt="Hospital"
            className="h-full w-full object-cover block"
          />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default AboutPage;
