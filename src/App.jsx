import FeaturedCards from "./components/FeaturedCards";
import LogoSection from "./components/LOgoSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeaturedCards />
    </>
  );
};

export default App;
