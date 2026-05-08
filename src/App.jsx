import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LightRays from "./components/LightRays";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import ContactPage from "./pages/contact/ContactPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import DoctorsDetails from "./pages/doctors/DoctorsDetails";
import AppointmentPage from "./pages/appointment/AppointmentPage";
import AboutPage from "./pages/about/AboutPage";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#cfe9f0"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="relative z-10 h-auto">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorsDetails />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
