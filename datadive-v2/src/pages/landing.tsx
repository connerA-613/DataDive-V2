import NavBar from "../Components/NavBar";
import Hero from "../Sections/Hero";
import HowItWorks from "../Sections/HowItWorks";
import Features from "../Sections/Features";


const Landing = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Hero />
      <HowItWorks />
      <Features />
    </div>
  );
}

export default Landing
