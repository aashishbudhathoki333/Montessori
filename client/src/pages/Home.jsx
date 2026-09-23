import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "./About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Programs />

        <Events />

        <Gallery />

        <Contact />
      </main>
       <Footer />
    </>
  );
}

export default Home;