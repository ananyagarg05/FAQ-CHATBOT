import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What products does Rohit Enterprises offer?",
      answer:
        "Rohit Enterprises offers Fire Fighting Equipment, Power Press Machines, Safety Equipment, and Industrial Machines. These include fire extinguishers, fire nozzles, fire hose reels, power presses, and safety suits, among others.",
      open: false,
    },
    {
      question: "Are Rohit Enterprises' products certified?",
      answer:
        "Yes, Rohit Enterprises is ISO 9001:2015 certified and CE certified, ensuring the highest standards of quality and safety.",
      open: false,
    },
    {
      question: "What industries does Rohit Enterprises cater to?",
      answer:
        "Rohit Enterprises caters to industries such as firefighting services, manufacturing units, and industrial safety sectors.",
      open: false,
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by contacting us via phone, email, or through our website.",
      open: false,
    },
    {
      question: "What is the delivery process?",
      answer: "We offer both standard and express delivery options.",
      open: false,
    },
    {
      question: "How long has Rohit Enterprises been in business?",
      answer:
        "Rohit Enterprises has been in business since 1984, with over three decades of experience in manufacturing and exporting high-quality products.",
      open: false,
    },
    {
      question: "What are the payment modes available?",
      answer:
        "We accept multiple payment methods, including cash, credit card, bank transfer, cheque, demand draft (DD), and online payments.",
      open: false,
    },
    {
      question: "Where does Rohit Enterprises export its products?",
      answer:
        "Rohit Enterprises exports to several countries including the UK, China, Korea, and Germany.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${faq.open ? "open" : ""}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {faq.open && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
