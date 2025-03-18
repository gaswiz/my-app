import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SearchComponent.css"; 

export default function SearchComponent({ borderRadius = "50px", onSearch }) {
  const placeholderText = "Type your command here...";
  const [userInput, setUserInput] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const [showTypingEffect, setShowTypingEffect] = useState(true);

 
  useEffect(() => {
    if (userInput) {
      setShowTypingEffect(false);
      return;
    }
    
    let index = 0;
    let deleting = false;

    const typingEffect = setInterval(() => {
      setAnimatedText((prev) =>
        deleting ? prev.slice(0, -1) : placeholderText.slice(0, prev.length + 1)
      );

      if (animatedText.length === placeholderText.length) {
        setTimeout(() => (deleting = true), 1000);
      }

      if (animatedText.length === 0) {
        deleting = false;
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [animatedText, userInput]);

 
  const handleSearch = () => {
    if (onSearch) {
      onSearch(userInput);
    }
    setUserInput(""); 
    setShowTypingEffect(true); 
  };

  return (
    
   
    <div className="search-container">

    <div body="body"> 
    <title> Restaurant App </title>
    </div>
    

      {/* Title with Rainbow Hover Effect */}
      <h1 className="text-8xl font-bold text-center uppercase mb-16 rainbow-title">
        Restaurants 
      </h1>

     


      {/* Search Bar with Button */}
      <motion.div
        initial={{ width: "350px", height: "80px" }}
        animate={{ width: "500px", height: "100px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="search-wrapper"
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Enter key triggers search
          placeholder={showTypingEffect ? animatedText : ""}
          className="search-input"
          style={{ borderRadius: borderRadius }}
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </motion.div>
    </div>
  );
}


