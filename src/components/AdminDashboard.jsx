import React from "react";
import "./AdminDashboard.css"; // ✅ Import CSS

const restaurantData = {
  Patras: [
    { name: "Achaia Delight", booked: 0 },
    { name: "Souvlaki Express", booked: 0 },
    { name: "Burger Haven", booked: 0 },
    { name: "Italian Bites", booked: 0 },
    { name: "Vegan Vibes", booked: 0 },
  ],
  Thessaloniki: [
    { name: "Taverna Olympus", booked: 0 },
    { name: "Fish & Grill", booked: 0 },
    { name: "Pizza Paradise", booked: 0 },
    { name: "Steakhouse Prime", booked: 0 },
    { name: "Healthy Bowls", booked: 0 },
  ],
  Athens: [
    { name: "Acropolis View", booked: 10 },
    { name: "Baklava Bliss", booked: 5 },
    { name: "Mediterraneo", booked: 2 },
    { name: "Meze House", booked: 0 },
    { name: "Brunch Spot", booked: 10 },
  ],
};


const getStatusClass = (booked) => {
  if (booked === 0) return "badge available"; 
  if (booked === 10) return "badge sold-out"; 
  if (booked >= 5) return "badge limited"; 
  return "badge available"; 
};

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {Object.entries(restaurantData).map(([city, restaurants]) => (
        <div key={city}>
          <h3 className="admin-section-title">{city}</h3>
          <div className="restaurant-status">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="status-card">
                <span>{restaurant.name} - {restaurant.booked}/10 booked</span>
                <span className={getStatusClass(restaurant.booked)}>
                  {restaurant.booked === 0 ? "Available" : restaurant.booked >= 5 ? "Limited" : "Sold Out"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
