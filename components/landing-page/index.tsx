import Navbar from "../Navbar";
import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Partners from "./Partners";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
