import { FadeInOnView } from "@/components/FadeInOnView";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

const Home = () => {
    return (
        <>
            <Header />
            <FadeInOnView>
                <HeroSection />
            </FadeInOnView>
            <FadeInOnView>
                <ProjectsSection />
            </FadeInOnView>
            <FadeInOnView>
                <About />
            </FadeInOnView>
            <FadeInOnView>
                <Contact />
            </FadeInOnView>
            <FadeInOnView>
                <Footer />
            </FadeInOnView>
        </>
    );
};
export default Home;
