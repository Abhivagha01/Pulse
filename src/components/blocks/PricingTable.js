import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import HeroSection from "../global/HeroSection";
import CheckIcon from "@mui/icons-material/Check";
import background from "../../assets/images/global/Herosection/heroImage.jpg";

function PricingTable() {
  const theme = useTheme();
  return (
    <>
      <HeroSection Titale={"Pricing Table"} url={background} />
      <Box
        sx={{
          padding: { md: "120px 0px", xs: "60px 0px" },
          backgroundColor: theme.palette.LightBlueBackground,
        }}        
      >
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid className="box1" item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  padding: "40px",
                  border: "2px solid #f42958",
                  borderRadius: "5px",
                  transition: "0.7s",
                  "&:hover .box1": {
                    color: theme.palette.white,
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover": {
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover .button1": {
                    backgroundColor: "white",
                  },
                  "&:hover .border": {
                    borderBottom: "0.1px solid white",
                  },
                }}
              >
                <Box
                  textAlign={"center"}
                  className="border"
                  pb={4}
                  sx={{
                    borderBottom: "0.1px solid #f42958",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: theme.palette.black,
                      marginBottom: "15px",
                    }}
                    className="box1"
                  >
                    Free
                  </Typography>
                  <Typography
                    variant="h1"
                    className="box1"
                    sx={{
                      fontSize: "100px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    29
                  </Typography>
                  <Typography
                    className="box1"
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    USD Per Month
                  </Typography>
                </Box>
                <Box textAlign={"center"} pt={4}>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      5 PPC Campaigns
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Digital Marketing
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Marketing Agency
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Seo Friendly
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      UI/UX designs
                    </Typography>
                  </Typography>
                </Box>
                <Box textAlign={"center"}>
                  <Button
                    variant="outlined"
                    className="button1"
                    sx={{
                      color: "red ",
                      border: "2px solid red ",
                      fontSize: "17px",
                      letterSpacing: "2px",
                      transition: "0.7s",
                      backgroundColor: "transparent",
                      ml: "0 ",
                      p: {
                        md: "5px 40px ",
                        sm: "10px 30px ",
                      },
                      mt: { md: "40px", xs: "20px" },
                      cursor: "pointer",
                      "&:hover": {
                        color: `${theme.palette.red} `,
                        border: "2px solid red ",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    CONTACT US
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid className="box1" item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  padding: "40px",
                  border: "2px solid #f42958",
                  borderRadius: "5px",
                  transition: "0.7s",
                  "&:hover .box1": {
                    color: theme.palette.white,
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover": {
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover .button1": {
                    backgroundColor: "white",
                  },
                  "&:hover .border": {
                    borderBottom: "0.1px solid white",
                  },
                }}
              >
                <Box
                  textAlign={"center"}
                  className="border"
                  pb={4}
                  sx={{
                    borderBottom: "0.1px solid #f42958",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: theme.palette.black,
                      marginBottom: "15px",
                    }}
                    className="box1"
                  >
                    Free
                  </Typography>
                  <Typography
                    variant="h1"
                    className="box1"
                    sx={{
                      fontSize: "100px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    29
                  </Typography>
                  <Typography
                    className="box1"
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    USD Per Month
                  </Typography>
                </Box>
                <Box textAlign={"center"} pt={4}>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      5 PPC Campaigns
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Digital Marketing
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Marketing Agency
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Seo Friendly
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      UI/UX designs
                    </Typography>
                  </Typography>
                </Box>
                <Box textAlign={"center"}>
                  <Button
                    variant="outlined"
                    className="button1"
                    sx={{
                      color: "red ",
                      border: "2px solid red ",
                      fontSize: "17px",
                      letterSpacing: "2px",
                      transition: "0.7s",
                      backgroundColor: "transparent",
                      ml: "0 ",
                      p: {
                        md: "5px 40px ",
                        sm: "10px 30px ",
                      },
                      mt: { md: "40px", xs: "20px" },
                      cursor: "pointer",
                      "&:hover": {
                        color: `${theme.palette.red} `,
                        border: "2px solid red ",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    CONTACT US
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid className="box1" item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  padding: "40px",
                  border: "2px solid #f42958",
                  borderRadius: "5px",
                  transition: "0.7s",
                  "&:hover .box1": {
                    color: theme.palette.white,
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover": {
                    backgroundColor: "#f81f01",
                    backgroundImage:
                      "linear-gradient(145deg, #f81f01, #ee076e)",
                  },
                  "&:hover .button1": {
                    backgroundColor: "white",
                  },
                  "&:hover .border": {
                    borderBottom: "0.1px solid white",
                  },
                }}
              >
                <Box
                  textAlign={"center"}
                  className="border"
                  pb={4}
                  sx={{
                    borderBottom: "0.1px solid #f42958",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: theme.palette.black,
                      marginBottom: "15px",
                    }}
                    className="box1"
                  >
                    Free
                  </Typography>
                  <Typography
                    variant="h1"
                    className="box1"
                    sx={{
                      fontSize: "100px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    29
                  </Typography>
                  <Typography
                    className="box1"
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: theme.palette.red,
                    }}
                  >
                    USD Per Month
                  </Typography>
                </Box>
                <Box textAlign={"center"} pt={4}>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      5 PPC Campaigns
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Digital Marketing
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Marketing Agency
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      Seo Friendly
                    </Typography>
                  </Typography>
                  <Typography py={1}>
                    <CheckIcon
                      fontSize="26px"
                      className="box1"
                      sx={{ color: theme.palette.red }}
                    />
                    <Typography
                      pl={1}
                      className="box1"
                      variant="span"
                      sx={{ fontSize: "16px", color: theme.palette.LightGray }}
                    >
                      UI/UX designs
                    </Typography>
                  </Typography>
                </Box>
                <Box textAlign={"center"}>
                  <Button
                    variant="outlined"
                    className="button1"
                    sx={{
                      color: "red ",
                      border: "2px solid red ",
                      fontSize: "17px",
                      letterSpacing: "2px",
                      transition: "0.7s",
                      backgroundColor: "transparent",
                      ml: "0 ",
                      p: {
                        md: "5px 40px ",
                        sm: "10px 30px ",
                      },
                      mt: { md: "40px", xs: "20px" },
                      cursor: "pointer",
                      "&:hover": {
                        color: `${theme.palette.red} `,
                        border: "2px solid red ",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    CONTACT US
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default PricingTable;
