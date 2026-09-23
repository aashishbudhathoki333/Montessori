import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <span>🌱</span>

            <div>
              <h2>Little Stars</h2>
              <p>Montessori School</p>
            </div>
          </Link>

          <p className="footer-description">
            A joyful and nurturing learning environment where
            children discover, explore, create, and grow with
            confidence.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>

            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>

            <a href="#" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <a href="#programs">Programs</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <h3>Programs</h3>

          <span>Play Group</span>
          <span>Nursery</span>
          <span>LKG</span>
          <span>UKG</span>
          <span>Grade 1 – 3</span>

        </div>

        <div className="footer-column footer-contact">

          <h3>Contact</h3>

          <div>
            <MapPin size={17} />
            <span>School Road, Your City, Nepal</span>
          </div>

          <div>
            <Phone size={17} />
            <span>+977 98XXXXXXXX</span>
          </div>

          <div>
            <Mail size={17} />
            <span>info@littlestarsschool.com</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div>
          © 2026 Little Stars Montessori School.
          All rights reserved.
        </div>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;