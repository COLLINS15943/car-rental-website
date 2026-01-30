import { useState } from "react";
import "../styles/FAQ.css";
import { FAQ_DATA, FAQ_TEXT } from "../constants/faqData";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1); // First question open by default

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h3>{FAQ_TEXT.subtitle}</h3>
          <h2>{FAQ_TEXT.title}</h2>
          <p className="faq-description">{FAQ_TEXT.description}</p>
        </div>

        <div className="faq-content">
          <div className="faq-image">
            <img src="/images/economy.png" alt="Car" />
          </div>
          
          <div className="faq-questions">
            {FAQ_DATA.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button
                  className={`faq-question ${activeQuestion === faq.id ? 'active' : ''}`}
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <span className="question-number">{faq.id}.</span>
                  <span className="question-text">{faq.question}</span>
                  <span className="toggle-icon">
                    {activeQuestion === faq.id ? '−' : '+'}
                  </span>
                </button>
                
                {activeQuestion === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;