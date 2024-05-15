import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import AboutBrand from "../about/AboutBrand";
import { Box, Container, Grid, useTheme } from "@mui/material";
import img1 from "../../assets/images/about/brand/brand-01.png";
import img2 from "../../assets/images/about/brand/brand-02.png";
import img3 from "../../assets/images/about/brand/brand-03.png";
import img4 from "../../assets/images/about/brand/brand-04.png";
import img5 from "../../assets/images/about/brand/brand-05.png";
import img6 from "../../assets/images/about/brand/brand-06.png";
const BlocksClientLogo = () => {
  const theme = useTheme();

  const client = [
    {
      imageSrc: img1,
    },
    {
      imageSrc: img2,
    },
    {
      imageSrc: img3,
    },
    {
      imageSrc: img4,
    },
    {
      imageSrc: img5,
    },
    {
      imageSrc: img6,
    },
  ];
  return (
    <>
      <HeroSection Titale={"Client Logo"} url={background} />
      <Box
        sx={{
          py: "120px",

          backgroundColor: theme.palette.LightBlueBackground,
        }}
      >
        <Container>
          <Grid container>
            {client.map((image, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Box
                  sx={{
                    border: "1px solid rgba(1,1,1,0.04)",
                    width: "100%",
                    height: { md: "220px", xs: "150px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: theme.palette.red,
                      borderRadius: "10px",
                      "& .img": {
                        opacity: "1 !important",
                        WebkitFilter: "brightness(0) invert(1)",
                        filter: "brightness(0) invert(1)",
                        position: "static",
                        zIndex: "1100000",
                      },
                    },
                  }}
                >
                  <Box sx={{ height:{sm: "120px",xs:"80px"}, width: {sm:"160px",xs:"100px"} }}>
                    <img
                      className="img"
                      src={image.imageSrc}
                      style={{
                        opacity: "0.5",
                        transition: "0.4s",
                        objectFit: "contain",
                      }}
                      alt="client1"
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <AboutBrand />
    </>
  );
};

export default BlocksClientLogo;
