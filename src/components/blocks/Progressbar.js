import React from "react";
import HeroSection from "../../components/global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";

const Progressbar = () => {
  const theme = useTheme();
  return (
    <>
      <HeroSection Titale={"Progress Bar"} url={background} />
      <Container maxWidth="xl">
        <Grid
          container
          columnSpacing={7}
          sx={{ py: { sm: "100px", xs: "50px" } }}
        >
          <Grid item xs={12} sm={6}>
            <Box>
              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Designing</Typography>
                  <Typography>95%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>85%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Marketing</Typography>
                  <Typography>75%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Development</Typography>
                  <Typography>80%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Designing</Typography>
                  <Typography>95%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    heigh
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "0.2px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>85%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "0.2px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Marketing</Typography>
                  <Typography>75%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "0.2px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>85%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "0.5px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: theme.palette.red,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          columnSpacing={7}
          sx={{ pb: { sm: "100px", xs: "50px" } }}
        >
          <Grid item xs={12} sm={6}>
            <Box>
              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Designing</Typography>
                  <Typography>95%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        height: "20px",
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background: "linear-gradient(90deg, #F61B10, #EF0963)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>85%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        height: "20px",
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background: "linear-gradient(90deg, #F61B10, #EF0963)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Marketing</Typography>
                  <Typography>75%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "20px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background: "linear-gradient(90deg, #F61B10, #EF0963)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Development</Typography>
                  <Typography>80%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={80}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                        height: "20px",
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background: "linear-gradient(90deg, #F61B10, #EF0963)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Designing</Typography>
                  <Typography>81%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={81}
                    heigh
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background:
                          "linear-gradient(-224deg, #0d8abc, #61fded)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>72%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={72}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background:
                          "linear-gradient(-224deg, #d45529, #eece90)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Marketing</Typography>
                  <Typography>89%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={89}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background:
                          " linear-gradient(-224deg, #f646a9, #5c51ff)",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ my: "35px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography>Managment</Typography>
                  <Typography>57%</Typography>
                </Box>
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={57}
                    sx={{
                      "&.MuiLinearProgress-root": {
                        backgroundColor: theme.palette.pink,
                      },
                      "& .MuiLinearProgress-barColorPrimary": {
                        background:
                          "linear-gradient(-224deg, #e77654, #e5529a)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Progressbar;
