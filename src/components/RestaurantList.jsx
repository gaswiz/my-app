import { motion } from "framer-motion";
import "./RestaurantList.css"; // ✅ Import styles

export default function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list-container">
      {restaurants.length > 0 && <h2 className="section-title">Search Results</h2>}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="restaurant-list"
      >
        {restaurants.length > 0 ? (
          restaurants.map((r, index) => (
            <motion.div
              key={index}
              className="restaurant-card"
              whileHover={{ scale: 1.05 }} // ✅ Fancy hover effect
              transition={{ duration: 0.2 }}
            >
              <img
                src={r.image}
                alt={r.name}
                className="restaurant-image"
              />
              <div className="restaurant-details">
                <h3>{r.name}</h3>
                <p>{r.description}</p>
                <p className="rating">{r.rating}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No restaurants found. Try another search.</p>
        )}
      </motion.div>
    </div>
  );
}
