import { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import RestaurantList from "./components/RestaurantList";
import ProjectFilesWidget from "./components/ProjectFilesWidget";
import FilterComponent from "./components/FilterComponent";
import Footer from "./components/Footer";
import { cities } from "./components/RestaurantData";
import NavigationMenu from "./components/NavigationMenu";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [username, setUsername] = useState("");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (query) => {
    if (!isLoggedIn || userRole !== "customer") return;

    const lowerQuery = query.toLowerCase();
    if (lowerQuery === "restaurants") {
      setFilteredRestaurants(cities.flatMap((city) => city.restaurants));
    } else {
      const city = cities.find((city) => city.name.toLowerCase().includes(lowerQuery));
      setFilteredRestaurants(city ? city.restaurants : []);
    }
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setFilteredRestaurants((prev) =>
      [...prev].sort((a, b) =>
        order === "desc" ? parseInt(b.rating) - parseInt(a.rating) : parseInt(a.rating) - parseInt(b.rating)
      )
    );
  };

  const handleLogin = (enteredUsername, password) => {
    if (password !== "pass") return;

    if (enteredUsername === "gas") {
      setIsLoggedIn(true);
      setUsername("Gas");
      setUserRole("admin");
    } else if (enteredUsername === "john") {
      setIsLoggedIn(true);
      setUsername("John");
      setUserRole("customer");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername("");
    setFilteredRestaurants([]);
  };

  return (
    <div className="app-container">
      {showNav && <NavigationMenu isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} onLogin={handleLogin} />}
      
      {!isLoggedIn ? (
        <>
          <NavigationMenu isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} onLogin={handleLogin} />
          <SearchComponent onSearch={() => {}} />
        </>
      ) : userRole === "admin" ? (
        <>
          <NavigationMenu isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
          <h2 className="welcome-message">Welcome, {username} (Admin)</h2>
          <AdminDashboard />
        </>
      ) : (
        <>
          <NavigationMenu isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
          <h2 className="welcome-message">Welcome, {username}!</h2>
          <SearchComponent onSearch={handleSearch} />
          <FilterComponent onSort={handleSort} />
          <RestaurantList restaurants={filteredRestaurants} />
          <ProjectFilesWidget />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
