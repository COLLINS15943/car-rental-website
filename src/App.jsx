import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content.jsx";
import VehicleModels from "./components/VehicleModels.jsx";
import Contacts from "./components/Contacts.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import SignInPage from "./pages/SignInPage.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <div className="home-layout">
        <div id="home">
          <Content img="/images/carmain.png" />
        </div>
        <div id="vehicles">
          <VehicleModels />
        </div>
        <div id="why-us">
          <Contacts />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/"       element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;

