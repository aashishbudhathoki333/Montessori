import { ArrowRight, Camera } from "lucide-react";
import "./Gallery.css";

const galleryItems = [
  {
    title: "Creative Learning",
    category: "Classroom",
    emoji: "🎨",
  },
  {
    title: "Happy Playtime",
    category: "Activities",
    emoji: "🧸",
  },
  {
    title: "Little Explorers",
    category: "Learning",
    emoji: "🔍",
  },
  {
    title: "Art & Creativity",
    category: "Art",
    emoji: "🖍️",
  },
  {
    title: "Outdoor Fun",
    category: "Outdoor",
    emoji: "🌳",
  },
  {
    title: "Celebration Day",
    category: "Events",
    emoji: "🎉",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <div>
            <span className="section-tag">
              SCHOOL GALLERY
            </span>

            <h2>
              Little Moments.
              <span>Beautiful Memories.</span>
            </h2>
          </div>

          <p>
            Take a glimpse into our classrooms, activities,
            celebrations, and the joyful moments that make
            school life special.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-item" key={item.title}>

              <div className="gallery-image">
                <span>{item.emoji}</span>

                <div className="gallery-overlay">
                  <Camera size={20} />
                  <span>View Photo</span>
                </div>
              </div>

              <div className="gallery-info">
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>

                <ArrowRight size={18} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;