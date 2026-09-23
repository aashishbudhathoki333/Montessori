import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about">
          <h2>About Our School</h2>
        </section>

        <section id="programs">
          <h2>Our Programs</h2>
        </section>

        <section id="events">
          <h2>Upcoming Events</h2>
        </section>

        <section id="gallery">
          <h2>School Gallery</h2>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
        </section>
      </main>
    </>
  );
}

export default Home;