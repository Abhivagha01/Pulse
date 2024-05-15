import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";

function Columns() {
  const theme = useTheme();
  return (
    <>
      <HeroSection Titale={"Columns"} url={background} />
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
          backgroundColor: theme.palette.LightBlueBackground,
        }}
      >
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={12} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
          backgroundColor: theme.palette.LightBlueBackground,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: theme.palette.semiBlack,
                }}
                mb={1}
              >
                One Full
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "16px",
                  color: theme.palette.lightBlack,
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item md={3} sm={6} xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.red,
                  padding: "37px 29px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: theme.palette.white,
                  }}
                  mb={1}
                >
                  One Third
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.white,
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.DarkBluebackground,
                  padding: "37px 29px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: theme.palette.white,
                  }}
                  mb={1}
                >
                  One Third
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.white,
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.lightPink,
                  padding: "37px 29px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: theme.palette.white,
                  }}
                  mb={1}
                >
                  One Third
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.white,
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box
                sx={{
                  backgroundColor: theme.palette.black,
                  padding: "37px 29px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: theme.palette.white,
                  }}
                  mb={1}
                >
                  One Third
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.white,
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Columns;
