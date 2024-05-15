import React from "react";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import HeroSection from "../global/HeroSection";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Heading from "../global/Heading";
import team1 from "../../assets/images/Home/team-01.jpg";
import team2 from "../../assets/images/Home/team-02.jpg";
import team3 from "../../assets/images/Home/team-03.jpg";
import team4 from "../../assets/images/Home/team-06.jpg";
import team5 from "../../assets/images/Home/team-05.jpg";
import team6 from "../../assets/images/Home/team-12.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SkilledTeam from "../global/SkilledTeam";

const TeamBlock = () => {
  const theme = useTheme();
  const teamData = [
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
  ];
  const teamData2 = [
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
  ];
  const teamData3 = [
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
  ];
  return (
    <>
      <HeroSection Titale={"Team"} url={background} />{" "}
      <Box sx={{ py: "60px" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center" }}>
            <Heading
              heading={"Our Skilled Team"}
              description={`There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.`}
              align="center"
            />
          </Box>
          <Box sx={{ my: "40px" }}>
            <SkilledTeam teamData={teamData2} />
          </Box>
        </Container>
      </Box>
      <Box
        sx={{ backgroundColor: theme.palette.LightBlueBackground, py: "60px" }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Heading
              heading={"Our Skilled Team"}
              description={`There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.`}
              align="center"
            />
          </Box>
          <Box sx={{ my: "35px" }}>
            <Grid container spacing={3}>
              {teamData.map((item, ind) => (
                <Grid item key={ind} md={3} sm={6}>
                  <Box>
                    <Box sx={{ height: "380px" }}>
                      <img
                        src={item.backImg}
                        alt={item.backImg}
                        style={{
                          borderRadius: "5px",
                          objectPosition: "25% 15%",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "500", mt: "14px" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.cardTextGrey,
                        fontSize: "15px",
                        my: "5px",
                      }}
                    >
                      {item.field}
                    </Typography>
                    <Box>
                      <FacebookOutlinedIcon sx={{ fontSize: "22px" }} />
                      <TwitterIcon sx={{ mx: "10px", fontSize: "22px" }} />
                      <LinkedInIcon sx={{ fontSize: "22px" }} />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ textAlign: "center", my: "80px" }}>
          <Heading
            heading={"Our Skilled Team"}
            description={`There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.`}
            align="center"
          />
        </Box>
        <Box>
          {/* <Grid container>
            {teamData3.map((item, ind) => (
              <Grid item key={ind}>

              </Grid>
            ))}
          </Grid> */}
          <SkilledTeam teamData={teamData3} />
        </Box>
      </Container>
    </>
  );
};

export default TeamBlock;
