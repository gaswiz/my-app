import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import RestaurantList from "./components/RestaurantList";
import ProjectFilesWidget from "./components/ProjectFilesWidget";
import FilterComponent from "./components/FilterComponent";
import Footer from "./components/Footer"; // ✅ Import the new footer
import { cities } from "./components/RestaurantData";

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery === "restaurants") {
      setFilteredRestaurants(cities.flatMap(city => city.restaurants));
    } else {
      const city = cities.find(city => city.name.toLowerCase().includes(lowerQuery));
      setFilteredRestaurants(city ? city.restaurants : []);
    }
  };

  return (
    <div className="app-container">
      <SearchComponent onSearch={handleSearch} />
      <FilterComponent onFilter={() => {}} />
      <RestaurantList restaurants={filteredRestaurants} />
      <ProjectFilesWidget />
      
      {/* ✅ Add Footer Here */}
      <Footer />
    </div>
  );
}

export default App;
