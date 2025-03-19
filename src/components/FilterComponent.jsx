import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./FilterComponent.css"; // External styles

export default function FilterComponent({ onSort }) {
  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortChange = () => {
    const newOrder = sortOrder === "desc" ? "asc" : "desc";
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <div className="filter-container">
      <button onClick={handleSortChange} className="filter-button">
        Sort by Rating: {sortOrder === "desc" ? "Highest to Lowest" : "Lowest to Highest"}
      </button>
    </div>
  );
}
