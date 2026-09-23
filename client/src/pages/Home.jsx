import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Programs />

        <section id="about">
          <h2>About Our School</h2>
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