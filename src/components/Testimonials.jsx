import "../styles/Testimonials.css";
import { TESTIMONIALS_DATA, TESTIMONIALS_TEXT } from "../constants/testimonialsData";

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h3>{TESTIMONIALS_TEXT.subtitle}</h3>
                <h2>{TESTIMONIALS_TEXT.title}</h2>
                <p className="testimonials-description">
                    {TESTIMONIALS_TEXT.description}
                </p>
                
                <div className="testimonials-grid">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"{testimonial.content}"</p>
                                <div className="quote-icon">❝</div>
                            </div>
                            <div className="testimonial-author">
                                <img 
                                    src={testimonial.author.image} 
                                    alt={testimonial.author.name} 
                                />
                                <div className="author-info">
                                    <h4>{testimonial.author.name}</h4>
                                    <span>{testimonial.author.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;