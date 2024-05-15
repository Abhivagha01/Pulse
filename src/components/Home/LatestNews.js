import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import Heading from "../global/Heading";
import LatestNewsSlider from "../global/LatestNewsSlider";
import img1 from "../../assets/images/Home/latestNews/img1.jpg";
import img2 from "../../assets/images/Home/latestNews/img2.jpg";
import img3 from "../../assets/images/Home/latestNews/img3.jpg";
import img4 from "../../assets/images/Home/latestNews/img4.jpg";

const LatestNews = () => {
  const theme = useTheme();
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
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: img3,
    },
    {
      title: "Management",
      heading: "A big ticket gone to be an interesting",
      backImg: img4,
    },
    {
      title: "Design",
      heading: "The Home of the Future Could Bebes",
      backImg: img1,
    },
    {
      title: "Development",
      heading: "Getting tickets to a big show",
      backImg: img2,
    },
    {
      title: "Management",
      heading: "A big ticket gone to be an interesting",
      backImg: img3,
    },
    {
      title: "Design",
      heading: "The Home of the Future Could Bebes",
      backImg: img4,
    },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.LightBlueBackground }}>
        <Container maxWidth="xl">
          <Box>
            <Heading
              heading={"Latest News"}
              description={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.`}
            />
            <Box sx={{ py: "50px" }}>
              <LatestNewsSlider data={latestNews} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LatestNews;
