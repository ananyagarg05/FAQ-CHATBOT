import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return; // Prevent empty message from being sent

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      let botResponse = { text: "", sender: "bot" };

      if (input.toLowerCase().includes("order")) {
        botResponse.text =
          "You can place an order via email, phone, or through our website.";
      } else if (input.toLowerCase().includes("products")) {
        botResponse.text =
          "We offer a range of products, including fire extinguishers, fire hose reels, power press machines, and safety equipment.";
      } else if (input.toLowerCase().includes("delivery")) {
        botResponse.text =
          "We offer both standard and express delivery options.";
      } else if (input.toLowerCase().includes("certified")) {
        botResponse.text =
          "Yes, we are ISO 9001:2015 certified and CE certified.";
      } else if (input.toLowerCase().includes("industries")) {
        botResponse.text =
          "We cater to industries like firefighting services, manufacturing, and industrial safety.";
      } else if (input.toLowerCase().includes("export")) {
        botResponse.text =
          "We export to countries such as the UK, China, Korea, and Germany.";
      } else if (input.toLowerCase().includes("payment")) {
        botResponse.text =
          "We accept payments via cash, credit card, bank transfer, cheque, demand draft, and online methods.";
      } else {
        botResponse.text =
          "Thank you for reaching out! How can I assist you further?";
      }

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 500); // Adding a delay for bot response
  };

  // Function to handle sending message on "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <h3>Chat Support</h3>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;
