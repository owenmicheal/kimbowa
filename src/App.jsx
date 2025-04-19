import FeaturedCards from "./sections/FeaturedCards";
import LogoSection from "./sections/LogoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeaturedCards />
      <ExperienceSection />
    </>
  );
};

export default App;
