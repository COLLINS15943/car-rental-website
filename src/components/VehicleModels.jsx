import "../styles/VehicleModels.css";
import { useState } from "react";

const VehicleModels = () => {
  const vehicles = [
    {
      id: 1,
      name: "Economy",
      image: "/images/economy.png",
      price: "$25",
      specs: {
        seats: "4",
        transmission: "Manual",
        airConditioning: "Yes",
        doors: "2",
        fuelType: "Petrol",
        luggage: "1 Large bag"
      },
      description: "Compact & Fuel Efficient"
    },
    {
      id: 2,
      name: "SUV",
      image: "/images/SUV.png",
      price: "$45",
      specs: {
        seats: "7",
        transmission: "Automatic",
        airConditioning: "Yes",
        doors: "5",
        fuelType: "Petrol/Diesel",
        luggage: "3 Large bags"
      },
      description: "Spacious & Powerful"
    },
    {
      id: 3,
      name: "Luxury",
      image: "/images/luxury.png",
      price: "$75",
      specs: {
        seats: "5",
        transmission: "Automatic",
        airConditioning: "Premium Climate",
        doors: "4",
        fuelType: "Premium Petrol",
        luggage: "2 Large bags"
      },
      description: "Premium & High-end"
    },
    {
      id: 4,
      name: "Van",
      image: "/images/van.png",
      price: "$55",
      specs: {
        seats: "8",
        transmission: "Automatic",
        airConditioning: "Yes",
        doors: "4",
        fuelType: "Diesel",
        luggage: "5 Large bags"
      },
      description: "Large & Family-friendly"
    },
    {
      id: 5,
      name: "Sports",
      image: "/images/sports.png",
      price: "$95",
      specs: {
        seats: "2",
        transmission: "Manual/Automatic",
        airConditioning: "Yes",
        doors: "2",
        fuelType: "Premium Petrol",
        luggage: "1 Small bag"
      },
      description: "Fast & Thrilling"
    }
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  return (
    <section className="vehicle-models">
      <div className="vehicle-container">
        <h2>Vehicle Models</h2>
        <p className="vehicle-subtext">Choose from our diverse fleet</p>

        <div className="vehicle-display">
          {/* Left: Vehicle Buttons */}
          <div className="vehicle-buttons">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                className={`vehicle-btn ${selectedVehicle.id === vehicle.id ? 'active' : ''}`}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                {vehicle.name}
              </button>
            ))}
          </div>

          {/* Middle: Car Display */}
          <div className="vehicle-image-display">
            <div className="vehicle-image-container">
              <img src={selectedVehicle.image} alt={selectedVehicle.name} />
            </div>
            <div className="vehicle-price-only">
              <span className="display-price">{selectedVehicle.price}<span className="period">/day</span></span>
            </div>
            <button className="rent-now-btn">Rent Now</button>
          </div>

          {/* Right: Specifications Table */}
          <div className="vehicle-specs">
            <h4>Specifications</h4>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Seats</td>
                  <td>{selectedVehicle.specs.seats}</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td>{selectedVehicle.specs.transmission}</td>
                </tr>
                <tr>
                  <td>Air Conditioning</td>
                  <td>{selectedVehicle.specs.airConditioning}</td>
                </tr>
                <tr>
                  <td>Doors</td>
                  <td>{selectedVehicle.specs.doors}</td>
                </tr>
                <tr>
                  <td>Fuel Type</td>
                  <td>{selectedVehicle.specs.fuelType}</td>
                </tr>
                <tr>
                  <td>Luggage</td>
                  <td>{selectedVehicle.specs.luggage}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;