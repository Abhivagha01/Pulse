import React from "react";
import { Box, Button, Container, useTheme } from "@mui/material";
import backImg from "../../assets/images/Home/herosection/back.jpg";

const Herosection = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: { sm: "100vh", xs: "75vh" },
          color: theme.palette.common.white,
          background: `linear-gradient(rgba(0, 0, 16,0.6),rgba(0, 0, 16,0.6)), url(${backImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60%",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                px: { md: "100px" },
              }}
            >
              <Box
                className="theme-gradient"
                sx={{
                  background: "linear-gradient(-259deg, #f81f01, #ee076e)",
                  fontSize: { md: "100px", sm: "80px", xs: "50px" },
                  fontWeight: 900,
                  mb: "10px",
                }}
              >
                CREATIVE
              </Box>
              <Box
                sx={{
                  color: theme.palette.textGray,
                  fontSize: { md: "24px", sm: "20px", xs: "14px" },
                  width: { sm: "70%" },
                  textAlign: "center",
                }}
              >
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration.
              </Box>
              <Box sx={{ mt: "40px" }}>
                <Button
                  variant="outlined"
                  className="button"
                  sx={{
                    fontSize: "16px",
                    letterSpacing: "2px",
                    padding: "15px 40px",
                  }}
                >
                  CONTACT US
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Herosection;
