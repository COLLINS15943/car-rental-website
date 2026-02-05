import "../styles/VehicleModels.css";
import { useState, useCallback } from "react";
import { VEHICLES, SPEC_LABELS, UI_TEXT } from "../constants/vehicleData";

const VehicleModels = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);

  const handleVehicleSelect = useCallback((vehicle) => {
    setSelectedVehicle(vehicle);
  }, []);

  return ( 
    <>
      <section className="vehicle-models">
        <div className="vehicle-container">
          <h2>{UI_TEXT.title}</h2>
          <p className="vehicle-subtext">{UI_TEXT.subtitle}</p>
          
          <div className="vehicle-display">
            {/* Left: Vehicle Buttons */}
            <div className="vehicle-buttons">
              {VEHICLES.map((vehicle) => (
                <button
                  key={vehicle.id}
                  className={`vehicle-btn ${selectedVehicle.id === vehicle.id ? 'active' : ''}`}
                  onClick={() => handleVehicleSelect(vehicle)}
                >
                  {vehicle.name}
                </button>
              ))}
            </div>

            {/* Middle: Car Display */}
            <div className="vehicle-image-display">
              <div className="vehicle-image-container">
                <img 
                  key={selectedVehicle.id}
                  src={selectedVehicle.image} 
                  alt={selectedVehicle.name}
                  loading="eager"
                />
              </div>
              <div className="vehicle-price-only">
                <span className="display-price">{selectedVehicle.price}<span className="period">{UI_TEXT.priceUnit}</span></span>
              </div>
              <button className="rent-now-btn">{UI_TEXT.rentButton}</button>
            </div>

            {/* Right: Specifications Table */}
            <div className="vehicle-specs">
              <h4>{UI_TEXT.specsTitle}</h4>
              <table className="specs-table">
                <tbody>
                  {Object.entries(selectedVehicle.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td>{SPEC_LABELS[key]}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleModels;