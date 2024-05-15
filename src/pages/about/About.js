import React from "react";
import HeroSection from "../../components/global/HeroSection";
import AboutDetails from "../../components/about/AboutDetails";
import AboutFindWork from "../../components/about/AboutFindWork";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import AboutTestimonial from "../../components/about/AboutTestimonial";
import AboutBrand from "../../components/about/AboutBrand";
import AboutFunFactCounter from "../../components/about/AboutFunFactCounter";

function About() {
  return (
    <>
      <HeroSection Titale={"About"} url={background} />
      <AboutDetails />
      <AboutFunFactCounter />
      <AboutFindWork />
      <AboutTestimonial />
      <AboutBrand />
    </>
  );
}

export default About;
