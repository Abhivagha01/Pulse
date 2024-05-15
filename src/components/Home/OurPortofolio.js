import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";

import Heading from "../global/Heading";
import PortfolioSlider from "../global/PortfolioSlider";
const OurPortofolio = () => {
  const theme = useTheme();

 
  return (
    <Box sx={{ backgroundColor: theme.palette.LightBlueBackground }}>
      <Container maxWidth="xl">
        <Box sx={{ pt: "120px" }}>
          <Heading
            heading={"Our Portfolio"}
            description={`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.`}
          />
          <Box sx={{ my: "50px" }}>
            <PortfolioSlider />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default OurPortofolio;
