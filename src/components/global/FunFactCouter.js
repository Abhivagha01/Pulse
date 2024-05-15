import React, { useState } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function FunFactCouter({
  gap,
  color,
  heading,
  counterDeatils1,
  counterDeatils2,
  counterDeatils3,
  counterDeatils4,
  counter1,
  counter2,
  counter3,
  counter4,
}) {
  const [counterState, setCounterstate] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            padding: gap
              ? "0"
              : { lg: "0px 0px 120px 0px", xs: "0px 0px 60px 0px" },
          }}
        >
          <ScrollTrigger onEnter={() => setCounterstate(true)}>
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid item display={"flex"} justifyContent={"center"} xs={12}>
                <Box width={"100%"}>
                  <Box textAlign={"center"}>
                    <Typography variant="h3">{heading}</Typography>
                  </Box>
                  <Grid
                    container
                    sx={{ margin: { md: "40px 15px", sm: "0px 0px" } }}
                    display={"flex"}
                  >
                    <Grid
                      item
                      xs={counter4 ? 6 : 12}
                      sm={6}
                      md={counter4 ? 3 : 4}
                    >
                      <Grid
                        sx={{
                          fontSize: counter4 ? "50px" : "72px",
                          fontWeight: "600",
                          color: color ? "white" : theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp
                              start={0}
                              end={counter1}
                              duration={1}
                            ></CountUp>
                          )}
                          {counter4 ? (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            ></Typography>
                          ) : (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            >
                              +
                            </Typography>
                          )}
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          {counterDeatils1}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={counter4 ? 6 : 12}
                      sm={6}
                      md={counter4 ? 3 : 4}
                    >
                      <Grid
                        sx={{
                          fontSize: counter4 ? "50px" : "72px",
                          fontWeight: "600",
                          color: color ? "white" : theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp
                              start={0}
                              end={counter2}
                              duration={1}
                            ></CountUp>
                          )}
                          {counter4 ? (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            ></Typography>
                          ) : (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            >
                              +
                            </Typography>
                          )}
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          {counterDeatils2}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={counter4 ? 6 : 12}
                      sm={6}
                      md={counter4 ? 3 : 4}
                    >
                      <Grid
                        sx={{
                          fontSize: counter4 ? "50px" : "72px",
                          fontWeight: "600",
                          color: color ? "white" : theme.palette.red,
                        }}
                        textAlign={"center"}
                      >
                        <Box display={"flex"} justifyContent={"center"}>
                          {counterState && (
                            <CountUp
                              start={0}
                              end={counter3}
                              duration={1}
                            ></CountUp>
                          )}
                          {counter4 ? (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            ></Typography>
                          ) : (
                            <Typography
                              sx={{
                                fontSize: "50px",
                                fontWeight: "500",
                              }}
                            >
                              +
                            </Typography>
                          )}
                        </Box>
                        <Typography
                          sx={{
                            color: theme.palette.lightBlack,
                            fontSize: "18px",
                            padding: "0px 20px",
                          }}
                        >
                          {counterDeatils3}
                        </Typography>
                      </Grid>
                    </Grid>

                    {counter4 && counterDeatils4 ? (
                      <Grid
                        item
                        xs={counter4 ? 6 : 12}
                        sm={6}
                        md={counter4 ? 3 : 4}
                      >
                        <Grid
                          sx={{
                            fontSize: counter4 ? "50px" : "72px",
                            fontWeight: "600",
                            color: color ? "white" : theme.palette.red,
                          }}
                          textAlign={"center"}
                        >
                          <Box display={"flex"} justifyContent={"center"}>
                            {counterState && (
                              <CountUp
                                start={0}
                                end={counter4}
                                duration={1}
                              ></CountUp>
                            )}
                            {counter4 ? (
                              <Typography
                                sx={{
                                  fontSize: "50px",
                                  fontWeight: "500",
                                }}
                              ></Typography>
                            ) : (
                              <Typography
                                sx={{
                                  fontSize: "50px",
                                  fontWeight: "500",
                                }}
                              >
                                +
                              </Typography>
                            )}
                          </Box>
                          <Typography
                            sx={{
                              color: theme.palette.lightBlack,
                              fontSize: "18px",
                              padding: "0px 20px",
                            }}
                          >
                            {counterDeatils4}
                          </Typography>
                        </Grid>
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </>
  );
}

export default FunFactCouter;
