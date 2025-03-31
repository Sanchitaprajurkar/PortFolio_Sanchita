import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Safety from "./components/Safety";
import Services from "./components/Services";
import ChildCare from "./components/ChildCare";
import PetCare from "./components/PetCare";
import SeniorCare from "./components/SeniorCare";
import HouseKeeping from "./components/HouseKeeping";
import FindCaregiver from "./components/FindCaregiver";
import Becomecaregiver from "./components/Becomecaregiver";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServiceCategories />
                <HowItWorks />
                <Testimonials />
                <CallToAction />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/how-it-works" element={<HowItWorks />} />

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/child-care" element={<ChildCare />} />
          <Route path="/pet-care" element={<PetCare />} />
          <Route path="/senior-care" element={<SeniorCare />} />
          <Route path="/house-keeping" element={<HouseKeeping />} />

          {/* Caregiver Routes */}
          <Route path="/find-caregiver" element={<FindCaregiver />} />
          <Route path="/become-caregiver" element={<Becomecaregiver />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
