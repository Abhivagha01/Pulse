import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Pagination } from "swiper/modules";
const LatestNewsSlider = ({ data }) => {
  const theme = useTheme();
  const styles = {
    slide: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "18px",
      height: "550px",
      width: "90%",
      overflow: "hidden",
    },
  };
  return (
    <>
      <Box>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                className="portfolio"
                sx={{
                  ...styles.slide,
                  "&:hover .contain": {
                    bottom: "0",
                  },
                }}
              >
                <Box sx={{ height: "100%" }}>
                  <Box
                    className="thumbnail"
                    sx={{ backgroundImage: `url(${item.backImg})` }}
                  ></Box>
                </Box>
                <Box
                  className="contain"
                  sx={{
                    position: "absolute",
                    padding: "30px",
                    bottom: "-80px",
                    zIndex: "2",
                    transition: "0.3s",
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
                      borderColor: `${theme.palette.red} !important`,
                    }}
                  >
                    CASE STUDY
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default LatestNewsSlider;
