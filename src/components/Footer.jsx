import "../styles/Footer.css";
import { FOOTER_DATA, APP_DOWNLOAD } from "../constants/footerData";

const Footer = () => {
  return (
    <>
      {/* App Download Section */}
      <section className="app-download-section">
        <div className="app-download-container">
          <div className="app-download-content">
            <h2>{FOOTER_DATA.appSection.title}</h2>
            <h3>{FOOTER_DATA.appSection.subtitle}</h3>
            <p>{FOOTER_DATA.appSection.description}</p>
            
            <div className="download-buttons">
              <a href={APP_DOWNLOAD.googlePlay.href} className="download-btn-image">
                <img 
                  src={APP_DOWNLOAD.googlePlay.image} 
                  alt="Get it on Google Play"
                  className="store-image"
                />
              </a>
              
              <a href={APP_DOWNLOAD.appStore.href} className="download-btn-image">
                <img 
                  src={APP_DOWNLOAD.appStore.image} 
                  alt="Download on the App Store"
                  className="store-image"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Car Rental Column */}
            <div className="footer-column">
              <h3>{FOOTER_DATA.carRental.title}</h3>
              <p>{FOOTER_DATA.carRental.description}</p>
              <div className="contact-info">
                <p>📞 {FOOTER_DATA.carRental.phone}</p>
                <p>✉️ {FOOTER_DATA.carRental.email}</p>
              </div>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3>{FOOTER_DATA.company.title}</h3>
              <ul>
                {FOOTER_DATA.company.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours Column */}
            <div className="footer-column">
              <h3>{FOOTER_DATA.workingHours.title}</h3>
              <div className="working-hours">
                {FOOTER_DATA.workingHours.hours.map((schedule, index) => (
                  <div key={index} className="hour-item">
                    <span className="day">{schedule.day}</span>
                    <span className="time">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Column */}
            <div className="footer-column">
              <h3>{FOOTER_DATA.subscription.title}</h3>
              <p>{FOOTER_DATA.subscription.description}</p>
              <form className="subscription-form">
                <input 
                  type="email" 
                  placeholder={FOOTER_DATA.subscription.placeholder}
                  className="email-input"
                />
                <button type="submit" className="submit-btn">
                  {FOOTER_DATA.subscription.buttonText}
                </button>
              </form>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Car Rental. All rights reserved.</p>
              <p className="created-by">Created by <strong>Collins Agbo</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
