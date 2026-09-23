import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🌱</span>

          <div>
            <h2>Little Stars</h2>
            <span>Montessori School</span>
          </div>
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#programs" onClick={closeMenu}>
            Programs
          </a>

          <a href="#events" onClick={closeMenu}>
            Events
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <Link
            to="/admission"
            className="nav-admission"
            onClick={closeMenu}
          >
            Admission
          </Link>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;