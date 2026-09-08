import { useState, useEffect, useRef } from "react";
import "../styles/Testimonials.css";
import { TESTIMONIALS_DATA, TESTIMONIALS_TEXT } from "../constants/testimonialsData";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isMouseDown = useRef(false);

  // Chunk testimonials into pairs of 2 for balanced desktop display
  const slides = [];
  for (let i = 0; i < TESTIMONIALS_DATA.length; i += 2) {
    slides.push(TESTIMONIALS_DATA.slice(i, i + 2));
  }

  // Auto-advance slides every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (touchEndX.current !== 0) {
      if (diff > 45) {
        handleNext();
      } else if (diff < -45) {
        handlePrev();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
    setIsPaused(false);
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    isMouseDown.current = false;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    setIsPaused(false);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h3>{TESTIMONIALS_TEXT.subtitle}</h3>
        <h2>{TESTIMONIALS_TEXT.title}</h2>
        <p className="testimonials-description">
          {TESTIMONIALS_TEXT.description}
        </p>

        {/* Carousel Wrapper */}
        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Previous Arrow */}
          <button 
            className="slider-arrow prev" 
            onClick={handlePrev} 
            aria-label="Previous testimonials"
          >
            ‹
          </button>

          {/* Testimonials Viewport */}
          <div className="testimonials-viewport">
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slidePair, slideIndex) => (
                <div key={slideIndex} className="testimonials-slide">
                  <div className="testimonials-grid">
                    {slidePair.map((testimonial) => (
                      <div key={testimonial.id} className="testimonial-card">
                        <div className="testimonial-content">
                          <p>"{testimonial.content}"</p>
                          <div className="quote-icon">❝</div>
                        </div>
                        <div className="testimonial-author">
                          <img
                            src={testimonial.author.image}
                            alt={testimonial.author.name}
                            draggable="false"
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
              ))}
            </div>
          </div>

          {/* Next Arrow */}
          <button 
            className="slider-arrow next" 
            onClick={handleNext} 
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="testimonials-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${currentSlide === idx ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;