import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content.jsx";
import VehicleModels from "./components/VehicleModels.jsx";
import Contacts from "./components/Contacts.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Content img="/images/carmain.png" />
      </div>
      <div id="vehicles">
        <VehicleModels />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
