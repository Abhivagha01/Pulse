import { Box, Button, Container, useTheme } from '@mui/material'
import React from 'react'

const Page404 = () => {
    const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          height: { sm: "100vh", xs: "75vh" },
          color: theme.palette.common.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1B1F",
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
                  fontSize: { md: "170px", sm: "80px", xs: "50px" },
                  fontWeight: 800,
                  //   mb: "10px",
                }}
              >
                404!
              </Box>
              <Box sx={{ fontSize: { md: "50px", sm: "30px", xs: "20px" } }}>
                Page not found
              </Box>
              <Box
                sx={{
                  color: theme.palette.textGray,
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                The page you were looking for could not be found.
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
}

export default Page404
