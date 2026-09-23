import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import Events from "../components/Events";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Programs />

        <Events />

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