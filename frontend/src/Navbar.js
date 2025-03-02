import { Link } from "react-router-dom";
import "./styles.css"; // Import global styles

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear login state
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
          {isLoggedIn && <Link to="/grandma" className="nav-link">Grandma</Link>}
        </div>
        <div className="nav-right">
          {isLoggedIn ? (
            <button className="nav-link-logout-button" onClick={handleLogout} style={{ all: 'unset', cursor: 'pointer', color: "white" }}>Logout</button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}