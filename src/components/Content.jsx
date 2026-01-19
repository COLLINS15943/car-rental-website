const Content = ({ img }) => {
  return (
    <>
      <div className="content">
        <div className="contentLeft">
          <h2>Plan your trip now</h2>
          <h1>Save big with our car rental</h1>
          <div className="description">
            Rent the car of your dreams, Unbeatable prizes, unlimited miles,
            flexible pick-up options and much more
          </div>
          <div className="buttonsContainer">
            <button className="bookBtn">Book Now</button>
            <button className="learnBtn">Learn More</button>
          </div>
        </div>
        <div className="contentRight">
          <img src={img} alt="Car" className="carImage" />
        </div>
      </div>

      <section className="booking">
        <div className="booking-container">
          <h2>Book Your Car Now</h2>
          <form className="booking-form">
            <div className="form-group">
              <label htmlFor="car-type">Select Car Type</label>
              <select id="car-type" defaultValue="">
                <option value="">Choose a car</option>
                <option value="economy">
                  Economy - Compact & Fuel Efficient
                </option>
                <option value="sedan">Sedan - Comfortable & Stylish</option>
                <option value="suv">SUV - Spacious & Powerful</option>
                <option value="luxury">Luxury - Premium & High-end</option>
                <option value="van">Van - Large & Family-friendly</option>
                <option value="sports">Sports - Fast & Thrilling</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pickup">Pick-up Location</label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter pick-up location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dropoff">Drop-off Location</label>
              <input
                type="text"
                id="dropoff"
                placeholder="Enter drop-off location"
              />
            </div>
            <div className="form-group">
              <label htmlFor="pickup-date">Pick-up Date</label>
              <input type="date" id="pickup-date" />
            </div>
            <div className="form-group">
              <label htmlFor="dropoff-date">Drop-off Date</label>
              <input type="date" id="dropoff-date" />
            </div>
            <button type="submit" className="search-btn">
              Search Cars
            </button>
          </form>
        </div>
      </section>

      <section className="plan-section">
        <div className="plan-container">
          <h2>Plan your trip now</h2>
          <p className="plan-subtext">Quick and easy car rental</p>

          <div className="plan-grid">
            <div className="plan-card">
              <ion-icon class="car-icon" name="car-outline"></ion-icon>
              <h3>Select Car</h3>
              <p>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="plan-card">
              <svg
                className="contact-icon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z" />
              </svg>
              <h3>Contact Operator</h3>
              <p>
                Our experienced operators are available 24/7 to assist you with
                any questions or bookings you may have
              </p>
            </div>
            <div className="plan-card">
              <svg
                className="drive-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z" />
              </svg>
              <h3>Let's Drive</h3>
              <p>
                Pick up your car and enjoy the freedom to explore. Drive with
                confidence knowing you have reliable support
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
