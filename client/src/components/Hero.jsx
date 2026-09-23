import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-tag">
            🌈 LEARN • PLAY • GROW
          </div>

          <h1>
            Where Little Minds
            <span>Grow Big Dreams.</span>
          </h1>

          <p>
            A joyful and nurturing learning environment where
            children discover, explore, create, and grow with
            confidence.
          </p>

          <div className="hero-buttons">

            <Link to="/admission" className="primary-button">
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

            <a href="#programs" className="secondary-button">
              <Play size={17} />
              Explore Programs
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>10+</strong>
              <span>Years of Care</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>Happy Students</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Teachers & Staff</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-image-placeholder">
            <span>🎨</span>
            <h3>Learning Through Joy</h3>
            <p>Every child is unique.</p>
          </div>

          <div className="floating-card card-one">
            🧸
            <span>Play & Learn</span>
          </div>

          <div className="floating-card card-two">
            🎨
            <span>Create & Explore</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;