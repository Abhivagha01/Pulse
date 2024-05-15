import React from "react";
import { Box, Container, Grid, useTheme } from "@mui/material";
import img1 from "../../assets/images/blocks/bl-big-01.jpg";
import img2 from "../../assets/images/blocks/portfolio-big-02.jpg";
import img3 from "../../assets/images/blocks/portfolio-big-03.jpg";
import img4 from "../../assets/images/blocks/portfolio-big-04.jpg";
import HeroSection from "../../components/global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const VideoPopup = () => {
  const theme = useTheme()
  return (
    <>
      <HeroSection Titale={"Video Popup"} url={background} />

      <Box sx={{ borderBottom: "1px solid #ebebeb" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  position: "relative",
                  py: { sm: "100px", xs: "50px" },
                }}
              >
                <img
                  src={img1}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "100px", xs: "70px" },
                    height: { sm: "100px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: theme.palette.red,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ borderBottom: "1px solid #ebebeb" }}>
        <Container maxWidth="xl">
          <Grid container spacing={5} sx={{ py: { sm: "100px", xs: "50px" } }}>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={img2}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "100px", xs: "70px" },
                    height: { sm: "100px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    backgroundColor: theme.palette.red,
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={img3}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "100px", xs: "70px" },
                    height: { sm: "100px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    backgroundColor: "black",
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ borderBottom: "1px solid #ebebeb" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ py: { sm: "100px", xs: "50px" } }}>
            <Grid item md={4}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={img2}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "80px", xs: "70px" },
                    height: { sm: "80px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    backgroundColor: theme.palette.red,
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={img4}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "80px", xs: "70px" },
                    height: { sm: "80px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    backgroundColor: theme.palette.red,
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={img3}
                  alt="gallery1"
                  style={{ borderRadius: "15px" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateY(-50%) translateX(-50%)",
                    borderRadius: "50%",
                    width: { sm: "80px", xs: "70px" },
                    height: { sm: "80px", xs: "70px" },
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    transition: ".3s",
                    alignItems: "center",
                    backgroundColor: theme.palette.red,
                    "&:hover": {
                      transform: "translateY(-50%) translateX(-50%) scale(1.1)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    sx={{
                      fontSize: { sm: "40px", xs: "30px" },
                      color: "white",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default VideoPopup;
