import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Grid } from "@mui/material";
import CastIcon from "@mui/icons-material/Cast";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

const CreativeService = () => {
  const theme = useTheme();

  const creativeServiceBox = [
    {
      serviceIcon: <CastIcon />,
      serviceTitle: "Business Stratagy",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      serviceIcon: <LayersOutlinedIcon />,
      serviceTitle: "Website Development",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      serviceIcon: <PeopleOutlineIcon />,
      serviceTitle: "Marketing & Reporting",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      serviceIcon: <DesktopWindowsOutlinedIcon />,
      serviceTitle: "Mobile App Development",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      serviceIcon: <PeopleOutlineIcon />,
      serviceTitle: "Marketing & Reporting",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
    {
      serviceIcon: <DesktopWindowsOutlinedIcon />,
      serviceTitle: "Mobile App Development",
      serviceBoxDec:
        "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    },
  ];
  return (
    <Box sx={{ py: "120px" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {creativeServiceBox.map((item, index) => (
            <Grid item sm={6} md={4} key={index}>
              <Box
                height={"100%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: { md: "50px 35px", xs: "55px 40px" },
                  backgroundColor: theme.palette.cardBackground,
                  borderRadius: "10px",
                  transition: "all .3s cubic-bezier(.645,.045,.355,1)",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    backgroundImage: "linear-gradient(90deg, #f61b10, #ef0963)",
                    color: theme.palette.common.white,
                    "& > *": {
                      color: "white",
                    },
                    "& .serviceIcon > *": {
                      color: `#fff !important`,
                    },
                  },
                }}
              >
                <Box
                  className="serviceIcon"
                  sx={{
                    "& > *": {
                      color: theme.palette.red,
                      fontSize: "57px !important",
                    },
                  }}
                >
                  {item.serviceIcon}
                </Box>
                <Box
                  color={theme.palette.black}
                  fontSize={"24px"}
                  fontWeight={500}
                  my={"14px"}
                >
                  {item.serviceTitle}
                </Box>
                <Box
                  color={theme.palette.cardTextGrey}
                  fontSize={"18px"}
                  lineHeight={1.8}
                  letterSpacing={"0.5px"}
                >
                  {item.serviceBoxDec}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CreativeService;
