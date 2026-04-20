import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
