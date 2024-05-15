import React from "react";
import Herosection from "../../components/Home/Herosection";
import OurPortofolio from "../../components/Home/OurPortofolio";
import Team from "../../components/Home/Team";
import CreativeService from "../../components/global/CreativeService";
import AboutTestimonial from "../../components/about/AboutTestimonial";
import AboutBrand from "../../components/about/AboutBrand";
import LatestNews from "../../components/Home/LatestNews";
import HomeCounter from "../../components/Home/HomeCounter";

const Home = () => {
  return (
    <>
      <Herosection />
      <CreativeService />
      <OurPortofolio />
      <HomeCounter />
      <Team />
      <AboutTestimonial />
      <LatestNews />
      <AboutBrand />
    </>
  );
};

export default Home;
