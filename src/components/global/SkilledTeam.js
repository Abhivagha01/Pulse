import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SkilledTeam = ({ teamData }) => {
    const theme = useTheme();

  return (
    <>
      <Grid container spacing={3}>
        {teamData.map((item, ind) => (
          <Grid item xs={12} sm={6} md={4} key={ind}>
            <Box
              className="portfolio"
              sx={{
                marginBlock: "0",
                position: "relative",
                "&:hover .teamIcons > *": {
                  transform: "scale(1)",
                },
                "&:hover .name": {
                  visibility: "visible",
                  opacity: "1",
                  transform: "translateY(0px)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${item.backImg})`,
                  height: "520px",
                  backgroundPosition: "50% 50%",
                  backgroundSize: "cover",
                  borderRadius: "5px",
                }}
              >
                <Box
                  className="teamIcons"
                  sx={{
                    zIndex: "2",
                    position: "absolute",
                    color: theme.palette.common.white,
                    padding: "30px",
                    "& > *": {
                      transform: "scale(0)",
                      transition: "0.4s",
                    },
                  }}
                >
                  <FacebookOutlinedIcon />
                  <LinkedInIcon sx={{ mx: "13px" }} />
                  <TwitterIcon />
                </Box>
                <Box
                  className="name"
                  sx={{
                    zIndex: "2",
                    position: "absolute",
                    bottom: "0px",
                    transform: "translateY(20px)",
                    color: theme.palette.common.white,
                    padding: "30px",
                    visibility: "hidden",
                    opacity: "0",
                    transition: "0.4s",
                  }}
                >
                  <Box component={"h3"} sx={{ fontSize: "20px" }}>
                    {item.name}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: theme.palette.textGray,
                    }}
                  >
                    {item.field}
                  </Typography>
                </Box>
              </Box>
              <Box
                className="thumbnail"
                sx={{
                  ":after": {
                    backgroundColor: "unset !important",
                  },
                }}
              ></Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkilledTeam;
