import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import img1 from "../../assets/images/Home/latestNews/img1.jpg";
import img2 from "../../assets/images/Home/latestNews/img2.jpg";
import img3 from "../../assets/images/Home/latestNews/img3.jpg";
import img4 from "../../assets/images/Home/latestNews/img4.jpg";
const BlogList = () => {
    const theme = useTheme();
    const styles = {
        slide: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            height: "550px",
            width: "100%",
            overflow: "hidden",
        },
    }
  const latestNews = [
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: img1,
    },
    {
      title: "Management",
      heading: "A big ticket gone to be an interesting",
      backImg: img2,
    },
    {
      title: "Design",
      heading: "The Home of the Future Could Bebes",
      backImg: img3,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: img4,
    },
    {
      title: "Management",
      heading: "A big ticket gone to be an interesting",
      backImg: img1,
    },
    {
      title: "Design",
      heading: "The Home of the Future Could Bebes",
      backImg: img2,
    },
  ];
  return (
    <>
      <HeroSection Titale={"Blog List"} url={background} />
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ py: { xs: "60px", sm: "100px" } }}
          columnSpacing={{ xs: 0, sm: 8,lg:7 }}
        >
          {latestNews.map((item, index) => (
            <Grid item xs={12} sm={6} lg={4}>
              <Box
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
                      sx={{ backgroundImage: `url(${item.backImg})` ,backgroundSize:"cover"}}
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
              </Box>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                mx: "5px",
                color: "white",
              }}
            >
              1
            </Box>
            <Box
              sx={{
                height: "50px",
                mx: "5px",
                width: "50px",
                border: "2px solid rgba(0, 0, 0, .3019607843)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                transition: ".4s",
                "&:hover": {
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  color: "white",
                  border: "2px solid white",
                },
              }}
            >
              2
            </Box>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                border: "2px solid rgba(0, 0, 0, .3019607843)",
                display: "flex",
                mx: "5px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                transition: ".4s",
                "&:hover": {
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  color: "white",
                  border: "2px solid white",
                },
              }}
            >
              3
            </Box>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                border: "2px solid rgba(0, 0, 0, .3019607843)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "5px",
                borderRadius: "5px",
                transition: ".4s",
                "&:hover": {
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  color: "white",
                  border: "2px solid white",
                },
              }}
            >
              4
            </Box>
            <Box
              sx={{
                height: "50px",
                width: "50px",
                border: "2px solid rgba(0, 0, 0, .3019607843)",
                display: "flex",
                mx: "5px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                transition: ".4s",
                "&:hover": {
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  color: "white",
                  border: "2px solid white",
                },
              }}
            >
              {">"}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogList;
