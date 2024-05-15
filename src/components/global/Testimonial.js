import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import background1 from "../../assets/images/about/testimonial/img-1.png";
import background2 from "../../assets/images/about/testimonial/img-2.png";

function Testimonial({ users }) {
  const theme = useTheme();
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedPerson(users[0]);
  }, []);

  const handlePersonClick = (person, ind) => {
    setSelectedPerson(person);
    setSelectedImageIndex(ind);
  };

  return (
    <>
      <Box>
        <Box
          bgcolor={theme.palette.LightBlueBackground}
          sx={{ padding: "120px 0px" }}
        >
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent={"center"}
              sx={{ position: "relative" }}
            >
              <Grid item xs={12}>
                <Box
                  sx={{
                      position: "absolute",
                      top: { md: "-10%", sm: "-10%", xs: "-1%" },
                      left: { md: "20%", sm: "20%", xs: "-10%" },
                      height: { md: "174px", sm: "100px", xs: "80px" },
                    width: { md: "197px", sm: "100px", xs: "0px" },
                    opacity: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: { md: "cover", sm: "cover", xs: "contain" },
                    backgroundPosition: "center",
                    backgroundImage: `url(${background1})`,
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { md: "55%", sm: "-10%", xs: "58%" },
                    right: { md: "20%", sm: "20%", xs: "-10%" },
                    height: { md: "174px", sm: "100px", xs: "80px" },
                    width: { md: "197px", sm: "100px", xs: "0px" },
                    opacity: "1",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: { md: "cover", sm: "cover", xs: "contain" },
                    backgroundPosition: "center",
                    backgroundImage: `url(${background2})`,
                  }}
                ></Box>
                <Box
                  textAlign={"center"}
                  sx={{
                    padding: { md: "0px 40px", sm: "0px 30px", xs: "0px 0px" },
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: { md: "36px", sm: "30px", xs: "20px" },
                      fontWeight: "500",
                      position: "relative",
                      zIndex: "11",
                    }}
                  >
                    {selectedPerson && `${selectedPerson.contain}`}
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "62px",
                      fontSize: "18px",
                      color: "#8c8c8c",
                      fontWeight: "300",
                    }}
                  >
                    <Typography
                      variant="span"
                      sx={{
                        fontSize: "18px",
                        color: "#181818",
                        fontWeight: "300",
                      }}
                    >
                      {selectedPerson && `${selectedPerson.name}`}
                    </Typography>
                    - COO, AMERIMAR ENTERPRISES, INC.
                  </Typography>
                </Box>
                <Box sx={{ paddingTop: "60px" }}>
                  <Typography
                    variant="ul"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      maxWidth: "510px",
                      margin: "0 auto -30px",
                    }}
                  >
                    {users.map((value, ind) => (
                      <Typography
                        key={ind}
                        variant="li"
                        sx={{
                          paddingLeft: { md: "15px", sm: "10px", xs: "5px" },
                          paddingRight: { md: "15px", sm: "10px", xs: "5px" },
                          flexBasis: { md: "20%", sm: "23%", xs: "25%" },
                          marginBottom: { md: "30px", sm: "20px", xs: "10px" },
                          outline: "none",
                          cursor: "pointer",
                          position: "relative",
                        }}
                      >
                        <img
                          src={value.imageSrc}
                          alt={value.name}
                          style={{ borderRadius: "5px" }}
                          onClick={() => handlePersonClick(value, ind)}
                        />
                        {selectedImageIndex == ind && (
                          <Box
                            sx={{
                              position: "absolute",
                              top: -5,
                              right: { md: 10, xs: 0 },
                              borderRadius: "100px",
                              width: "15px",
                              height: "15px",
                              backgroundColor: theme.palette.red,
                            }}
                          ></Box>
                        )}
                      </Typography>
                    ))}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Testimonial;
