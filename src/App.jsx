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
      <Content img="/images/carmain.png" />
      <VehicleModels />
      <Contacts />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
