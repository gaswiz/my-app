import { useState } from "react";
import "./NavigationMenu.css";

export default function NavigationMenu({ isLoggedIn, username, onLogout, onLogin }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePopup = () => setShowPopup(!showPopup);
  const switchForm = () => setIsSignUp(!isSignUp);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginUsername, password);
    setShowPopup(false);
  };

  return (
    <>
      <nav className="nav-menu">
        <div className="nav-title">Reservly</div>
        <div className="nav-links">
          <a href="#" className="nav-item">Recommendations</a>
          <a href="#" className="nav-item">Contact Us</a>
          {isLoggedIn ? (
            <>
              <span className="nav-greeting">Welcome, {username}!</span>
              <button onClick={onLogout} className="nav-button">Logout</button>
            </>
          ) : (
            <button onClick={togglePopup} className="nav-button">Login</button>
          )}
        </div>
      </nav>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isSignUp && <input type="email" placeholder="Email" required />}
              <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
            </form>
            <p onClick={switchForm} className="switch-form">
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
            </p>
            <button className="close-button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}




