import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import team1 from "../../assets/images/Home/team-01.jpg";
import team2 from "../../assets/images/Home/team-02.jpg";
import team3 from "../../assets/images/Home/team-03.jpg";
import team4 from "../../assets/images/Home/team-06.jpg";
import team5 from "../../assets/images/Home/team-05.jpg";
import team6 from "../../assets/images/Home/team-12.jpg";
import Heading from "../global/Heading";
import SkilledTeam from "../global/SkilledTeam";
const Team = () => {
  const theme = useTheme();
  const teamData = [
    { backImg: team1, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team2, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team3, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
    { backImg: team4, name: "John Doe", field: "Sr. Web Developer" },
    { backImg: team5, name: "Fatima Asrafi", field: "Front-end Engineer" },
    { backImg: team6, name: "Al-Amin Bali", field: "Sr. Graphic Designer" },
  ];
  return (
    <Box sx={{ backgroundColor: theme.palette.LightBlueBackground }}>
      <Container maxWidth="xl">
        <Box>
          <Heading
            heading={"Skilled Team"}
            description={`There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.`}
          />
          <Box sx={{ my: "50px" }}>
            <SkilledTeam teamData={teamData} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Team;
