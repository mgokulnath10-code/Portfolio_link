import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import Experience from "./components/Experience";
import Certificate from "./components/Certifications";
function App() {
  return (
    <>

      <Loader />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;