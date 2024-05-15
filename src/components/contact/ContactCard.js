import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import HeadsetIcon from "@mui/icons-material/Headset";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const ContactCard = () => {
  const theme = useTheme();

  const data = [
    {
      title: "Contact With Phone Number",
      Contact1: "+057 254 365 456",
      Contact2: "+856 325 652 984",
      icon: <HeadsetIcon sx={{ fontSize: "30px" }} />,
    },
    {
      title: "Email Address",
      Contact1: "admin@gmail.com",
      Contact2: "example@gmail.com",
      icon: <EmailIcon sx={{ fontSize: "30px" }} />,
    },
    {
      title: "Location",
      Contact1: "5678 Bangla Main Road, cities 580 GBnagla, example 54786",
      Contact2: "",
      icon: <LocationOnIcon sx={{ fontSize: "30px" }} />,
    },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#F8F9FC" }}>
        <Container maxWidth="xl">
          <Grid
            container
            sx={{ paddingY: {sm:"120px",xs:"50px"},pt:{xs:"0"}, justifyContent: "center" }}
            spacing={5}
          >
            {data.map((value, index) => (
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                key={index}
                sx={{ mt: { md: "0", sm: "20px", xs: "30px" } }}
              >
                <Box
                  sx={{
                    height: "100%",
                    border: `1px solid ${theme.palette.textGray}`,
                    padding: { lg: "54px 40px 50px", xs: "40px 25px 25px" },
                    position: "relative",
                    borderRadius: "15px",
                    "&:hover .card": {
                      color: "white",
                      backgroundColor: theme.palette.red,
                    },
                  }}
                >
                  <Box
                    className="card"
                    sx={{
                      position: "absolute",
                      top: "-25%",
                      left: "8%",
                      height: "78px",
                      width: "78px",
                      color: theme.palette.red,
                      border: `1px solid ${theme.palette.textGray}`,
                      backgroundColor: "white",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      transition: ".4s",
                      alignItems: "center",
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "700" }}>
                    {value.title}
                  </Typography>
                  <Box sx={{ mt: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: theme.palette.darkGray,
                        transition: ".3s",
                        cursor: "pointer",
                        display: "block",
                        "&:hover": { color: theme.palette.red },
                      }}
                    >
                      {value.Contact1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        color: theme.palette.darkGray,
                        display: "inline-block",
                        transition: ".3s",
                        cursor: "pointer",
                        "&:hover": { color: theme.palette.red },
                      }}
                    >
                      {value.Contact2}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactCard;
