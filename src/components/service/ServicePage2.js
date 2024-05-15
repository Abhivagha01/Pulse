import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import img from "../../assets/images/services-page(2)/page-2(1).png";
import img1 from "../../assets/images/services-page(2)/page-2(2).png";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/services-page(2)/background.jpg";

const ServicePage2 = () => {
  const theme = useTheme();
  return (
    <>
      <HeroSection Titale={"WEBSITE DEVELOPMENT"} url={background} />
      <Container maxWidth="xl">
        <Box sx={{ pt: { xs: "100px" } }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item md={6}>
              <Box sx={{ height: { lg: "650px" }, width: { lg: "600px" } }}>
                <img src={img} alt="Image1 Page2" />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingX: { md: "30px" },
                  color: theme.palette.darkGray,
                  fontSize: "18px",
                  mt: { xs: "10px", md: "0" },
                }}
              >
                <Box>
                  <Box>
                    <Typography sx={{ fontSize: "18px" }}>
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of
                      Lorem Ipsum. You need to be sure there isn't anything
                      embarrassing
                    </Typography>
                    <Typography sx={{ fontSize: "18px", my: "25px" }}>
                      hidden in the middle of text. All the Lorem Ipsum
                      generators tend toitrrepeat predefined chunks. Necessary,
                      making this the first true generator on the Internet.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        mb: "20px",
                        color: "black",
                        fontSize: "35px",
                        fontWeight: "500",
                        lineHeight: "35px",
                      }}
                    >
                      Proceess of metel
                    </Typography>
                    <Box>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Yet this above sewed flirted opened ouch
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Goldfinch realistic sporadic ingenuous
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Abominable this abidin far then like piquan
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Risus commodo viverra
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pt: { sm: "100px", xs: "50px" } }}>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item md={6} order={{ md: 1, xs: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  paddingX: { md: "30px" },
                  color: theme.palette.darkGray,
                  fontSize: "18px",
                  mt: { xs: "10px", md: "0" },
                }}
              >
                <Box>
                  <Box>
                    <Typography sx={{ fontSize: "18px" }}>
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of
                      Lorem Ipsum. You need to be sure there isn't anything
                      embarrassing
                    </Typography>
                    <Typography sx={{ fontSize: "18px", my: "25px" }}>
                      hidden in the middle of text. All the Lorem Ipsum
                      generators tend toitrrepeat predefined chunks. Necessary,
                      making this the first true generator on the Internet.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        mb: "20px",
                        color: "black",
                        fontSize: "35px",
                        fontWeight: "500",
                        lineHeight: "35px",
                      }}
                    >
                      Our Working Process
                    </Typography>
                    <Box>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Yet this above sewed flirted opened ouch
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Goldfinch realistic sporadic ingenuous
                        </li>
                      </Typography>
                      <Typography sx={{ fontSize: "18px", mb: "10px" }}>
                        <li style={{ listStyle: "unset" }}>
                          Abominable this abidin far then like piquan
                        </li>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} order={{ md: 2, xs: 1 }}>
              <Box sx={{ height: { lg: "650px" }, width: { lg: "600px" } }}>
                <img src={img1} alt="Image1 Page2" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ServicePage2;
