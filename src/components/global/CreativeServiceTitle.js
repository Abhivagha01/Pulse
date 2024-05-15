import { Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/material";
import React from "react";

const CreativeServiceTitle = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: "60px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontSize: { sm: "54px", xs: "35px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            color={theme.palette.darkGray}
            sx={{
              mt: "15px",
              fontSize: "18px",
              width: { sm: "50%" },
              textAlign: "center",
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default CreativeServiceTitle;
