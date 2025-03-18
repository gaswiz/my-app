import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SearchBar.css"; // External styles


export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <motion.input
        type="text"
        placeholder="Search Restaurants or Cities..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}  // ✅ FIX: onKeyDown instead of onKeyPress
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}
