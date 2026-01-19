import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content.jsx";
import VehicleModels from "./components/VehicleModels.jsx";
import carImage from "./images/carmain.png";

function App() {
  return (
    <>
      <Header />
      <Content img={carImage} />
      <VehicleModels />
    </>
  );
}

export default App;
