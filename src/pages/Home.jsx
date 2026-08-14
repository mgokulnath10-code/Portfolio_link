import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectsSection from "../components/Projects";
import Education from "../components/Education";
import Certificate from "../components/Certificate";
import GitHubStats from "../components/GitHubStats";
import LeetCode from "../components/LeetCode";
import ContactSection from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Education />
      <Certificate />
      <GitHubStats />
      <LeetCode />
      <ContactSection />
    </>
  );
}

export default Home;