import "./App.css";
import { Routes, Route } from "react-router-dom";
import LightRays from "./components/LightRays";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import ContactPage from "./pages/contact/ContactPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import DoctorsDetails from "./pages/doctors/DoctorsDetails";

function App() {
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
      <div className="relative z-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorsDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
