import React, { useRef } from "react";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import HeroSection from "../global/HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import PortfolioSlider from "../global/PortfolioSlider";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Heading from "../global/Heading";
import portfolio1 from "../../assets/images/Home/portfolio-1.jpg";
import portfolio2 from "../../assets/images/Home/portfolio-2.jpg";
import portfolio3 from "../../assets/images/Home/portfolio-3.jpg";
import portfolio4 from "../../assets/images/Home/portfolio-4.jpg";

const PortfolioBlock = () => {
  const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const swiperRef = useRef(null);

  const allWorks = [
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio2,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio3,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio4,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: portfolio2,
    },
  ];

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const styles = {
    slide: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      height: "550px",
      width: "90%",
    },
  };
  return (
    <>
      <HeroSection Titale={"Portfolio"} url={background} />
      <Box sx={{ py: "50px" }}>
        <Container maxWidth="xl">
          <PortfolioSlider />
        </Container>
      </Box>

      <Box
        sx={{ py: "50px", backgroundColor: theme.palette.LightBlueBackground }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Heading
              heading={"Default"}
              description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.`}
              align="center"
            />
          </Box>

          <Box my={"40px"}>
            <Grid container>
              {allWorks.map((item, ind) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={ind}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box className="portfolio" sx={styles.slide}>
                    <Box className="thumbnail-inner" sx={{ height: "100%" }}>
                      <Box
                        className="thumbnail"
                        sx={{ backgroundImage: `url(${item.backImg})` }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        padding: "30px",
                        bottom: "0",
                        zIndex: "2",
                      }}
                    >
                      <Typography
                        component={"p"}
                        sx={{
                          color: theme.palette.textGray,
                          fontSize: "14px",
                          letterSpacing: "0.9px",
                          mb: "18px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        component={"h2"}
                        sx={{
                          color: theme.palette.common.white,
                          fontSize: "24px",
                          fontWeight: "600",
                        }}
                      >
                        {item.heading}
                      </Typography>
                      <Button
                        variant="outlined"
                        className="button"
                        sx={{
                          mt: "40px",
                          fontSize: "13px",
                          padding: "7px 18px !important",
                          color: `${theme.palette.common.white} !important`,
                        }}
                      >
                        CASE STUDY
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ py: "40px", textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.LightBlueBackground,
                  backgroundColor: theme.palette.red,
                  border: `2px solid ${theme.palette.red}`,
                  fontSize: "16px",
                  padding: "17px 40px",
                  "&:hover": {
                    backgroundColor: theme.palette.LightBlueBackground,
                    color: theme.palette.red,
                    border: `2px solid ${theme.palette.red}`,
                  },
                }}
              >
                VIEW MORE PRODUCT
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className="block">
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", py: "60px" }}>
            <Heading
              heading={"Carousel Full Width"}
              description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.`}
              align="center"
            />
          </Box>
        </Container>

        <Box sx={{ position: "relative !important" }}>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation]}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            slidesPerView={4}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2.5,
              },
              1200: {
                slidesPerView: 4.5,
              },
            }}
          >
            {allWorks.map((item, index) => (
              <SwiperSlide
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className="portfolio" sx={styles.slide}>
                  <Box className="thumbnail-inner" sx={{ height: "100%" }}>
                    <Box
                      className="thumbnail"
                      sx={{ backgroundImage: `url(${item.backImg})` }}
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      padding: "30px",
                      bottom: "0",
                      zIndex: "2",
                    }}
                  >
                    <Typography
                      component={"p"}
                      sx={{
                        color: theme.palette.textGray,
                        fontSize: "14px",
                        letterSpacing: "0.9px",
                        mb: "18px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component={"h2"}
                      sx={{
                        color: theme.palette.common.white,
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Button
                      variant="outlined"
                      className="button"
                      sx={{
                        mt: "40px",
                        fontSize: "13px",
                        padding: "7px 18px !important",
                        color: `${theme.palette.common.white} !important`,
                      }}
                    >
                      CASE STUDY
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            className="swiper-button-prev"
            sx={{
              color: theme.palette.textGray,
              transform: "translateX(35px)",
              display: {xs:"none",sm: "block"},
              "&:hover": {
                color: "#fff",
                transform: "translate(5px)",
              },
            }}
            onClick={handlePrev}
          >
            <WestIcon />
          </Button>
          <Button
            className="swiper-button-next"
            sx={{
              color: theme.palette.textGray,
              transform: "translateX(-35px)",
              display: {xs:"none",sm: "block"},
              "&:hover": {
                color: "#fff",
                transform: "translate(-5px)",
              },
            }}
            onClick={handleNext}
          >
            <EastIcon />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PortfolioBlock;
