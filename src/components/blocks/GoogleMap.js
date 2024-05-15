import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";

function GoogleMap() {
  const theme = useTheme();
  return (
    <>
      <HeroSection Titale={"Google Map"} url={background} />
      <Box sx={{ padding: { md: "120px 0px", xs: "60px 0px" } }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
          backgroundColor: theme.palette.LightBlueBackground,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item md={4} sm={6} xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>350
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%", height: "650px" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height={650} frameBorder={0} style={{ border: 0 }} />              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default GoogleMap;
