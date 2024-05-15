import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Aboutimg from "../../assets/images/about/Deatils/about-1.jpg";

function AboutDetails() {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ padding: { lg: "120px 0px", xs: "60px 0px" } }}>
          <Grid container justifyContent={"center"}>
            <Grid item sm={12} display={{ lg: "flex" }}>
              <Grid item lg={5} alignSelf={"center"}>
                <Box sx={{ padding: { md: "0px 33px", xs: "15px" } }}>
                  <img
                    src={Aboutimg}
                    alt={Aboutimg}
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 25px 65px rgba(0, 0, 0, .1);",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item lg={7} alignSelf={"center"}>
                <Box sx={{ padding: { md: "0px 33px", xs: "0px 20px" } }}>
                  <Box>
                    <Typography
                      variant="h1"
                      sx={{ fontSize: { md: "60px", xs: "40px" } }}
                      color={theme.palette.red}
                      fontWeight={700}
                      mb={2}
                    >
                      About
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={300}
                      color={theme.palette.grey}
                      sx={{ wordSpacing: "2px" }}
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      dont look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour, or randomised words which dont look even
                      slightly believable. If you are going.
                    </Typography>
                    <Box mt={{ md: 5, xs: 3 }} display={{ lg: "flex" }}>
                      <Box sx={{ padding: "0px 35px 0px 0px" }}>
                        <Typography
                          variant="h2"
                          sx={{ fontSize: "30px" }}
                          fontWeight={700}
                          mb={{ md: 3, xs: 1 }}
                        >
                          Our Mission
                        </Typography>
                        <Typography
                          fontSize={18}
                          fontWeight={300}
                          color={theme.palette.lightBlack}
                          sx={{ wordSpacing: "2px" }}
                        >
                          We believe in harnessing innovation to create products and services that enhance everyday life, empower individuals, and drive positive change in the world.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{ fontSize: "30px" }}
                          fontWeight={700}
                          mb={{ md: 3, xs: 1 }}
                          mt={{ md: 0, xs: 3 }}
                        >
                          Our Values
                        </Typography>
                        <Typography
                          fontSize={18}
                          fontWeight={300}
                          color={theme.palette.lightBlack}
                          sx={{ wordSpacing: "2px" }}
                        >
                          We foster a culture of collaboration, where diverse perspectives are valued and creativity is encouraged.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default AboutDetails;
