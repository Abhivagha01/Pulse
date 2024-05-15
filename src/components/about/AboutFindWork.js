import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import findimage from "../../assets/images/about/findwork/finding-about.png";

function AboutFindWork() {
  const theme = useTheme();
  return (
    <>
      <div>
        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{
            position: "relative",
            padding: { lg: "0px 0px 0px 240px", xs: "0px 0px 0px 0px" },
          }}
        >
          <Box
            sx={{
              width: { lg: "1287px", xs: "100%" },
              height: { lg: "703px" },
              position:"relative"
            }}
          >
            <img src={findimage} alt={findimage} />
            <Box
              sx={{
                position: "absolute",
                top: "5%",
                left: "-50%",
                padding: { lg: "110px 0px 110px 110px", xs: "0px" },
              }}
            >
              <Box
                sx={{
                  padding: "120px 100px",
                  borderRadius: "10px",
                  height: "481px",
                  width: "800px",
                  backgroundColor: theme.palette.backgroundGray,
                }}
                display={{ lg: "block", xs: "none" }}
              >
                <Typography
                  className="theme-gradient"
                  variant="h4"
                  sx={{
                    fontSize: "36px",
                    fontWeight: "500",
                    background: " linear-gradient(145deg, #f81f01, #ee076e)",
                    marginBottom: "20px",
                  }}
                >
                  Find Your Work Now
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    color: theme.palette.white,
                    padding: "0px 60px 0px 0px",
                    margin: "0px 0px 41px 0px",
                  }}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that.
                </Typography>
                <Button
                  sx={{
                    border: "2px solid white",
                    backgroundColor: theme.palette.transparent,
                    color: theme.palette.white,
                    borderRadius: "4px",
                    padding: "7px 20px",
                    fontSize: "14px",
                  }}
                >
                  GET STARTED
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Grid
          sx={{
            padding: { md: "120px 100px", sm: "70px 60px", xs: "55px 40px" },
            width: "100%",
            height: "100%",
            backgroundColor: "#272527",
          }}
          display={{ lg: "none", xs: "block" }}
        >
          <Typography
            className="theme-gradient"
            variant="h4"
            sx={{
              fontSize: "36px",
              fontWeight: "500",
              background: " linear-gradient(145deg, #f81f01, #ee076e)",
              marginBottom: "20px",
            }}
          >
            Find Your Work Now
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#fff",
              padding: { md: "0px 60px 0px 0px", sm: "0px 40px 0px 0px" },
              margin: "0px 0px 41px 0px",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that.
          </Typography>
          <Button
            sx={{
              border: "2px solid white",
              backgroundColor: "transparent",
              color: "white",
              borderRadius: "4px",
              padding: "7px 20px",
              fontSize: "14px",
            }}
          >
            GET STARTED
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default AboutFindWork;
