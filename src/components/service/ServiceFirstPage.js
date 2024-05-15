import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import { Box } from "@mui/material";
import CreativeServiceTitle from "../global/CreativeServiceTitle";
import CreativeService from "../global/CreativeService";
const ServiceFirstPage = () => {
  return (
    <>
      <HeroSection Titale={"Service"} url={background} />
      <Box sx={{ backgroundColor: "#F8F9FC" }}>
        <CreativeServiceTitle title={"Digital Marketing"} />
        <CreativeService />
      </Box>

      <CreativeServiceTitle title={"Strategy"} />
      <CreativeService />

      <Box sx={{ backgroundColor: "#F8F9FC" }}>
        <CreativeServiceTitle title={"Creative Agency"} />
        <CreativeService />
      </Box>

      <CreativeServiceTitle title={"Development"} />
      <CreativeService />
    </>
  );
};

export default ServiceFirstPage;
