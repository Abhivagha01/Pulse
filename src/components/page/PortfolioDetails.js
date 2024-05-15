import React from "react";
import HeroSection from "../global/HeroSection";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import hero from "../../assets/images/page/portfolioDetailse/heroImage.jpg";
import img1 from "../../assets/images/page/portfolioDetailse/img-1.jpg";
import img2 from "../../assets/images/page/portfolioDetailse/img-2.jpg";
import img3 from "../../assets/images/page/portfolioDetailse/img-3.jpg";
import portfolio1 from "../../assets/images/Home/portfolio-1.jpg";
import portfolio2 from "../../assets/images/Home/portfolio-2.jpg";
import portfolio3 from "../../assets/images/Home/portfolio-3.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function PortfolioDetails() {
    const styles = {
        slide: {
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            height: "550px",
            width: "90%",
        },
    };

    const theme = useTheme();
    const allWorks = [
        {
            title: "Development",
            heading: "How To Find The Right Agency For Your Specific Product",
            backImg: portfolio1,
        },
        {
            title: "Development",
            heading: "Get Rid of Agency For Good",
            backImg: portfolio2,
        },
        {
            title: "Development",
            heading: "Getting tickets to the big show",
            backImg: portfolio3,
        },

    ];
    return (
        <>
            <Box>
                <HeroSection
                    Titale={"Getting tickets to the big show"}
                    url={hero}
                    bradcrumb={true}
                    title={
                        "Contrary to popular belief, Lorem Ipsum is not simply random text."
                    }
                />
                <Box>
                    <Container maxWidth="xl">
                        <Box
                            sx={{
                                padding: { lg: "120px 0px 120px 0px", xs: "40px 0px 40px 0px" },
                            }}
                        >
                            <Box
                                sx={{
                                    padding: {
                                        lg: "0px 270px 0px 270px",
                                        xs: "0px 50px 0px 50px",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: "54px",
                                        fontWeight: "bold",
                                        color: theme.palette.semiBlack,
                                        borderBottom: "1px solid #E1E1E1",
                                        paddingBottom: "43px",
                                    }}
                                >
                                    Pulse
                                </Typography>
                                <Typography
                                    sx={{
                                        paddingTop: "43px",
                                        fontSize: "23px",
                                        color: theme.palette.semiBlack,
                                    }}
                                >
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form.
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.darkGray,
                                        fontSize: "18px",
                                        mt: "20px",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commod viverra
                                    maecenas accumsan lacus vel facilisis. ut labore et dolore
                                    magna aliqua.
                                </Typography>
                                <Box
                                    sx={{
                                        mt: "25px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: { xs: "100%", sm: "50%" },
                                    }}
                                >
                                    <Box>
                                        <Box sx={{ color: theme.palette.darkGray, mb: "10px" }}>
                                            Branch
                                        </Box>
                                        <Box sx={{ fontSize: "22px", fontWeight: "500" }}>
                                            Ability
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ color: theme.palette.darkGray, mb: "10px" }}>
                                            Project Types
                                        </Box>
                                        <Box sx={{ fontSize: "22px", fontWeight: "500" }}>
                                            Website
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box sx={{ color: theme.palette.darkGray, mb: "10px" }}>
                                            Program
                                        </Box>
                                        <Box sx={{ fontSize: "22px", fontWeight: "500" }}>
                                            View Project
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: "30px", display: "flex" }}>
                                    <Box
                                        sx={{
                                            height: "50px",
                                            width: "50px",
                                            borderRadius: "50%",
                                            border: `2px solid ${theme.palette.textGray}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            transition: ".4s",
                                            mx: "5px",
                                            "&:hover": {
                                                backgroundColor: "red",
                                                border: `2px solid ${theme.palette.pink}`,
                                                transform: "translateY(-8px)",
                                                "& .red": {
                                                    color: "white",
                                                },
                                            },
                                        }}
                                    >
                                        <FacebookIcon
                                            className="red"
                                            sx={{ fontSize: "25px", color: theme.palette.textGray }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            height: "50px",
                                            width: "50px",
                                            borderRadius: "50%",
                                            border: `2px solid ${theme.palette.textGray}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            transition: ".4s",
                                            mx: "5px",
                                            "&:hover": {
                                                backgroundColor: "red",
                                                border: `2px solid ${theme.palette.pink}`,
                                                transform: "translateY(-8px)",
                                                "& .red": {
                                                    color: "white",
                                                },
                                            },
                                        }}
                                    >
                                        <LinkedInIcon
                                            className="red"
                                            sx={{ fontSize: "25px", color: theme.palette.textGray }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            height: "50px",
                                            width: "50px",
                                            borderRadius: "50%",
                                            border: `2px solid ${theme.palette.textGray}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            transition: ".4s",
                                            mx: "5px",
                                            "&:hover": {
                                                backgroundColor: "red",
                                                border: `2px solid ${theme.palette.pink}`,
                                                transform: "translateY(-8px)",
                                                "& .red": {
                                                    color: "white",
                                                },
                                            },
                                        }}
                                    >
                                        <InstagramIcon
                                            className="red"
                                            sx={{ fontSize: "25px", color: theme.palette.textGray }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            height: "50px",
                                            width: "50px",
                                            borderRadius: "50%",
                                            border: `2px solid ${theme.palette.textGray}`,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            transition: ".4s",
                                            mx: "5px",
                                            "&:hover": {
                                                backgroundColor: "red",
                                                border: `2px solid ${theme.palette.pink}`,
                                                transform: "translateY(-8px)",
                                                "& .red": {
                                                    color: "white",
                                                },
                                            },
                                        }}
                                    >
                                        <TwitterIcon
                                            className="red"
                                            sx={{ fontSize: "25px", color: theme.palette.textGray }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Grid item>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            pt: { sm: "100px", xs: "50px" },
                                        }}
                                    >
                                        <img
                                            src={img1}
                                            alt="gallery1"
                                            style={{ borderRadius: "15px" }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translateY(-50%) translateX(-50%)",
                                                borderRadius: "50%",
                                                width: { sm: "100px", xs: "70px" },
                                                height: { sm: "100px", xs: "70px" },
                                                backgroundColor: theme.palette.red,
                                                display: "flex",
                                                justifyContent: "center",
                                                transition: ".3s",
                                                alignItems: "center",
                                                "&:hover": {
                                                    transform:
                                                        "translateY(-50%) translateX(-50%) scale(1.1)",
                                                },
                                            }}
                                        >
                                            <PlayArrowIcon
                                                sx={{
                                                    fontSize: { sm: "40px", xs: "30px" },
                                                    color: "white",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            pt: { sm: "20px", xs: "10px" },
                                        }}
                                    >
                                        <img
                                            src={img2}
                                            alt="gallery1"
                                            style={{ borderRadius: "15px" }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            pt: { sm: "20px", xs: "10px" },
                                        }}
                                    >
                                        <img
                                            src={img3}
                                            alt="gallery1"
                                            style={{ borderRadius: "15px" }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={{ py: '40px' }}>
                                <Box sx={{ color: theme.palette.red, fontSize: "20px", fontWeight: "600" }}>Related Work</Box>
                                <Box
                                    sx={{
                                        fontSize: "54px",
                                        fontWeight: "bold",
                                        color: theme.palette.semiBlack,
                                    }}
                                >
                                    Our More Projects
                                </Box>
                                <Box my={"40px"}>
                                    <Grid container>
                                        {allWorks.map((item, ind) => (
                                            <Grid
                                                item
                                                xs={12}
                                                sm={6}
                                                md={4}
                                                key={ind}
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box className="portfolio" sx={styles.slide}>
                                                    <Box className="thumbnail-inner" sx={{ height: "100%" }}>
                                                        <Box
                                                            className="thumbnail"
                                                            sx={{ backgroundImage: `url(${item.backImg})` }}
                                                        ></Box>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            padding: "30px",
                                                            bottom: "0",
                                                            zIndex: "2",
                                                        }}
                                                    >
                                                      
                                                        <Typography
                                                            component={"h2"}
                                                            sx={{
                                                                color: theme.palette.common.white,
                                                                fontSize: "24px",
                                                                fontWeight: "600",
                                                            }}
                                                        >
                                                            {item.heading}
                                                        </Typography>
                                                        <Typography
                                                            component={"p"}
                                                            sx={{
                                                                color: theme.palette.textGray,
                                                                fontSize: "14px",
                                                                letterSpacing: "0.9px",
                                                                mb: "18px",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>

                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
export default PortfolioDetails;
