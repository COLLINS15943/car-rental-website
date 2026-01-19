import { useState } from "react";

const VehicleModels = () => {
  const vehicles = [
    {
      id: 1,
      name: "Economy",
      description: "Compact & Fuel Efficient",
      price: "$40/day",
      year: 2024,
      doors: 4,
      ac: "Yes",
      fuel: "Petrol",
      image: "./src/images/economy.png",
    },
    {
      id: 2,
      name: "Sedan",
      description: "Comfortable & Stylish",
      price: "$60/day",
      year: 2024,
      doors: 4,
      ac: "Yes",
      fuel: "Petrol",
      image: "https://via.placeholder.com/400x300?text=Sedan",
    },
    {
      id: 3,
      name: "SUV",
      description: "Spacious & Powerful",
      price: "$80/day",
      year: 2024,
      doors: 4,
      ac: "Yes",
      fuel: "Diesel",
      image: "https://via.placeholder.com/400x300?text=SUV",
    },
    {
      id: 4,
      name: "Luxury",
      description: "Premium & High-end",
      price: "$120/day",
      year: 2024,
      doors: 4,
      ac: "Yes",
      fuel: "Petrol",
      image: "https://via.placeholder.com/400x300?text=Luxury",
    },
    {
      id: 5,
      name: "Van",
      description: "Large & Family-friendly",
      price: "$100/day",
      year: 2023,
      doors: 3,
      ac: "Yes",
      fuel: "Diesel",
      image: "https://via.placeholder.com/400x300?text=Van",
    },
    {
      id: 6,
      name: "Sports",
      description: "Fast & Thrilling",
      price: "$150/day",
      year: 2024,
      doors: 2,
      ac: "Yes",
      fuel: "Petrol",
      image: "https://via.placeholder.com/400x300?text=Sports",
    },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  return (
    <section className="vehicle-models">
      <div className="vehicle-container">
        <h2>Our Vehicle Models</h2>
        <p className="vehicle-subtext">
          Choose from our wide range of vehicles
        </p>

        <div className="vehicle-display">
          {/* Left: Vehicle Names */}
          <div className="vehicle-sidebar">
            <h3>Select a Vehicle</h3>
            <ul className="vehicle-list">
              {vehicles.map((vehicle) => (
                <li key={vehicle.id}>
                  <button
                    className={`vehicle-name-btn ${
                      selectedVehicle.id === vehicle.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedVehicle(vehicle)}
                  >
                    {vehicle.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle: Vehicle Image */}
          <div className="vehicle-image-section">
            <img
              src={selectedVehicle.image}
              alt={selectedVehicle.name}
              className="vehicle-display-image"
            />
            <p className="vehicle-image-title">{selectedVehicle.name}</p>
          </div>

          {/* Right: Vehicle Specifications Table */}
          <div className="vehicle-specs">
            <h3>Specifications</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td className="spec-label">Rent per Day</td>
                  <td className="spec-value">{selectedVehicle.price}</td>
                </tr>
                <tr>
                  <td className="spec-label">Model Year</td>
                  <td className="spec-value">{selectedVehicle.year}</td>
                </tr>
                <tr>
                  <td className="spec-label">Doors</td>
                  <td className="spec-value">{selectedVehicle.doors}</td>
                </tr>
                <tr>
                  <td className="spec-label">AC</td>
                  <td className="spec-value">{selectedVehicle.ac}</td>
                </tr>
                <tr>
                  <td className="spec-label">Fuel Type</td>
                  <td className="spec-value">{selectedVehicle.fuel}</td>
                </tr>
              </tbody>
            </table>
            <button className="reserve-btn">Reserve Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
