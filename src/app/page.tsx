import { FadeInOnView } from "@/components/FadeInOnView";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { SectionsBackground } from "@/components/SectionsBackground";
import { Header } from "@/sections/Header";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <SectionsBackground>
                <ProjectsSection />
                <About />
                <Contact />
            </SectionsBackground>
        </>
    );
};
export default Home;
