import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "How do I post a community requirement?",
    answer:
      "You can post a requirement by filling out the community requirement form on our platform."
  },
  {
    question: "Who verifies the volunteers assigned to us?",
    answer:
      "All volunteers go through a verification process before being assigned."
  },
  {
    question: "How quickly can we expect volunteer mobilization?",
    answer:
      "Volunteer mobilization depends on the requirement, but it is usually within a few days."
  },
  {
    question: "Can we run recurring community programs?",
    answer:
      "Yes, recurring programs can be scheduled and managed through our platform."
  },
  {
    question: "Is there a cost to post a requirement?",
    answer:
      "No, posting a requirement is completely free."
  }
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq-section">
      <p className="faq-label">FAQ</p>

      <h2 className="faq-title">
        Frequently Asked Questions
      </h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
             onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              <button className="faq-icon">
                {openIndexes.includes(index) ? "−" : "+"}
              </button>
            </div>

            {openIndexes.includes(index) && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;