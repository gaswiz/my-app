import React from "react";
import "./RestaurantList.css"; 

const RestaurantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="restaurant-image"
              onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Available"}
            />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <span className="rating">{restaurant.rating}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RestaurantList;
