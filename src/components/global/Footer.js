import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/footer/left-1.png";
import img2 from "../../assets/images/footer/left-2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import background from "../../assets/images/footer/footer-3.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { NavLink } from "react-router-dom";
import ScrollToTopButton from "./Scrolltotop";
const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ mt: "50px" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: "40px 130px",
                background: `linear-gradient(90deg, #F61B10aa, #EF0963aa) , url(${img1})center/cover`,
                height: { md: "540px", sm: "327px" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "unset" },
                color: "white",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "50",
                  right: "10%",
                  width: { sm: "300px", xs: "220px" },
                  height: { sm: "300px", xs: "220px" },
                  zIndex: "0",
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                },
              }}
            >
              <Box sx={{ zIndex: "50" }}>
                <Typography sx={{ fontSize: "16px", letterSpacing: "4px" }}>
                  READY TO DO THIS
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { sm: "75px", xs: "50px" },
                    lineHeight: { sm: "90px", xs: "60px" },
                    textWrap: "nowrap",
                  }}
                >
                  Let's get <Box>to work</Box>
                </Typography>
                <NavLink style={{ color: "unset" }} to={"/contact"}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white ",
                      border: "2px solid white ",
                      fontSize: "17px",
                      letterSpacing: "2px",
                      ml: "0 ",
                      p: {
                        md: "15px 40px ",
                        sm: "10px 30px ",
                      },
                      mt: { md: "40px", xs: "20px" },
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "white ",
                        color: `${theme.palette.red} `,
                        border: "2px solid white ",
                      },
                    }}
                  >
                    CONTACT US
                  </Button>
                </NavLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  height: { md: "454px" },
                  background: `linear-gradient(rgba(8, 8, 8, 0.6), rgba(8, 8, 8, 0.6)), url(${background})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  py: { md: "0", xs: "40px" },
                }}
              >
                <Grid
                  container
                  sx={{ color: theme.palette.textGray, height: "100%" }}
                >
                  <Grid item sm={6} xs={12}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { sm: "center" },
                        px: { xs: "30px" },
                        cursor: "pointer",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "500",
                            mb: { sm: "30px", xs: "25px" },
                          }}
                        >
                          Quick Link
                        </Typography>
                        <Box
                          variant="li"
                          sx={{
                            fontSize: "17px",
                            mb: "10px",
                            transition: ".5s",
                            "&:hover": { color: theme.palette.red },
                          }}
                        >
                          Work
                        </Box>
                        <Box
                          variant="li"
                          sx={{
                            fontSize: "17px",
                            mb: "10px",
                            transition: ".5s",
                            "&:hover": { color: theme.palette.red },
                          }}
                        >
                          About
                        </Box>
                        <Box
                          variant="li"
                          sx={{
                            fontSize: "17px",
                            transition: ".5s",
                            "&:hover": { color: theme.palette.red },
                          }}
                        >
                          Let's Talk
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { sm: "center" },
                        px: { xs: "30px" },
                        cursor: "pointer",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "500",
                            mb: { sm: "30px", xs: "25px" },
                            mt: { sm: "0", xs: "30px" },
                          }}
                        >
                          Say Hello
                        </Typography>
                        <Box
                          variant="li"
                          sx={{
                            fontSize: "17px",
                            mb: "10px",
                            transition: ".5s",
                            "&:hover": { color: theme.palette.red },
                          }}
                        >
                          admin@example.com
                        </Box>
                        <Box
                          variant="li"
                          sx={{
                            fontSize: "17px",
                            mb: "10px",
                            transition: ".5s",
                            "&:hover": { color: theme.palette.red },
                          }}
                        >
                          hr@example.com
                        </Box>
                        <Box variant="li" sx={{ fontSize: "17px", mt: "20px" }}>
                          <FacebookIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: "30px",
                              transition: ".3s",
                              "&:hover": {
                                transform: "translateY(-4px)",
                                color: "white",
                              },
                            }}
                          />{" "}
                          <LinkedInIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: "30px",
                              transition: ".3s",
                              "&:hover": {
                                transform: "translateY(-4px)",
                                color: "white",
                              },
                            }}
                          />{" "}
                          <InstagramIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: "30px",
                              transition: ".3s",
                              "&:hover": {
                                transform: "translateY(-4px)",
                                color: "white",
                              },
                            }}
                          />{" "}
                          <TwitterIcon
                            sx={{
                              fontSize: "30px",
                              transition: ".3s",
                              "&:hover": {
                                transform: "translateY(-4px)",
                                color: "white",
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    sx={{
                      width: "100%",
                      px: "20px",
                      alignSelf: "center",
                      mt: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        alignSelf: { xs: "center" },
                        textAlign: { sm: "center" },
                      }}
                    >
                      Copyright © 2022 Pulse-Themes. All Rights Reserved.
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <ScrollToTopButton />
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
