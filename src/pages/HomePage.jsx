import { motion } from "framer-motion";

export default function RestaurantList({ restaurants }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="restaurant-list"
    >
      {restaurants.map((r, index) => (
        <div key={index} className="restaurant-card">
          <img src={r.image} alt={r.name} className="restaurant-image" />
          <div>
            <h3>{r.name}</h3>
            <p>{r.description}</p>
            <p className="rating">{r.rating}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
