const Contacts = () => {
    return (
        <section className="contact-All">
            <div className="contact-Heading">
                <h1>Save big with our cheap car rental!</h1>
                <p>Top Airports. Local Suppliers. <span className="highlight">24/7</span> Support</p>
            </div>
            <div className="three-car-image">
                <img src="/images/three-car.png" alt="Three Cars" />
            </div>
            
            <div className="why-choose-us">
                <div className="why-choose-container">
                    <div className="why-choose-left">
                        <h3>Why Choose Us</h3>
                        <h2>Best valued deals you will ever find</h2>
                        <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality service and exceptional savings.</p>
                        <button className="find-details-btn">Find Details</button>
                    </div>
                    
                    <div className="why-choose-right">
                        <div className="feature-item">
                            <h4>Cross Country Drive</h4>
                            <p>Take your driving experience to the next level with our cross-country drive options. Enjoy the freedom to explore new destinations and create unforgettable memories.</p>
                        </div>
                        
                        <div className="feature-item">
                            <h4>All Inclusive Pricing</h4>
                            <p>Get everything you need in one convenient, transparent price. Our all-inclusive pricing covers all the essentials, so you can focus on enjoying your journey.</p>
                        </div>
                        
                        <div className="feature-item">
                            <h4>No Hidden Charges</h4>
                            <p>What you see is what you get. We believe in transparent pricing with no surprises or hidden fees. Enjoy peace of mind with our straightforward pricing policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
