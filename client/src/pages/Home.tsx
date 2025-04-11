import OurServices from "@/components/home/OurServices";
import ContactCTA from "../components/home/ContactCTA";
import DesignProcess from "../components/home/DesignProcess";
import FeaturedProjects from "../components/home/FeaturedProjects";
import HeroSection from "../components/home/HeroSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <DesignProcess />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
