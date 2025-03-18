import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./FilterComponent.css"; // External styles

export default function FilterComponent({ onFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedRating, setSelectedRating] = useState("None");

  const toggleFilter = () => setIsOpen(!isOpen);

  const handleFilterChange = () => {
    onFilter({ city: selectedCity, rating: selectedRating });
  };

  return (
    <div className="filter-container">
      {/* Filter Icon - Always Fixed on Screen */}
      <button className="filter-button" onClick={toggleFilter}>
        <FontAwesomeIcon icon={faFilter} />
      </button>

      {/* Floating Filter List */}
      {isOpen && (
        <motion.div
          className="filter-list"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="filter-title">Filter Options</h3>

          {/* City Filter */}
          <div className="filter-item">
            <label>City</label>
            <select
              className="filter-dropdown"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                handleFilterChange();
              }}
            >
              <option value="All">All Cities</option>
              <option value="Patras">Patras</option>
              <option value="Thessaloniki">Thessaloniki</option>
              <option value="Athens">Athens</option>
            </select>
          </div>

          {/* Rating Filter */}
          <div className="filter-item">
            <label>Sort by Rating</label>
            <select
              className="filter-dropdown"
              value={selectedRating}
              onChange={(e) => {
                setSelectedRating(e.target.value);
                handleFilterChange();
              }}
            >
              <option value="None">Sort by Rating</option>
              <option value="High">High to Low</option>
              <option value="Low">Low to High</option>
            </select>
          </div>
        </motion.div>
      )}
    </div>
  );
}
