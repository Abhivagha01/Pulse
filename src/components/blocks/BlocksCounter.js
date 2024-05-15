import React from "react";
import HeroSection from "../global/HeroSection";
import background from "../../assets/images/global/Herosection/heroImage.jpg";
import FunFactCouter from "../global/FunFactCouter";
import { Box } from "@mui/material";

const BlocksCounter = () => {
  return (
    <>
      <HeroSection Titale={"Counters"} url={background} />
      <Box sx={{ pt: { sm: "90px", xs: "50px" } }}>
        <FunFactCouter
          counter1={199}
          counter2={575}
          counter3={69}
          counterDeatils1={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
          }
          counterDeatils2={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
          }
          counterDeatils3={
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those."
          }
        />
      </Box>
      <Box
        sx={{
          background: "linear-gradient(145deg, #f81f01, #ee076e)",
          py: { sm: "100px", xs: "50px" },
        }}
      >
        <FunFactCouter
          color={"white"}
          gap={true}
          counter1={199}
          counter2={575}
          counter3={69}
          counterDeatils1={
            <p style={{ color: "white" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          }
          counterDeatils2={
            <p style={{ color: "white" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          }
          counterDeatils3={
            <p style={{ color: "white" }}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          }
        />
      </Box>
      <Box sx={{ pt: { sm: "90px", xs: "50px" } }}>
        <FunFactCouter
          gap={true}
          counter1={660}
          counter2={894}
          counter3={500}
          counter4={640}
          counterDeatils1={"HAPPY CLIENTS"}
          counterDeatils2={"STORES"}
          counterDeatils3={"AWWARDS"}
          counterDeatils4={"AWESOME FEATURE"}
        />
      </Box>

    </>
  );
};

export default BlocksCounter;
