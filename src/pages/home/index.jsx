import Header from "./elements/header";
import Privilege from "./elements/home.privilege";
import Features from "./elements/home.features";
import End from "./elements/home.end";
import ContactUs from "./elements/home.contact-us";

const Hero = () => {
  return (
    <>
      <Header />
      <Privilege />
      <Features />
      <ContactUs />
      <End />
    </>
  );
};

export default Hero;
