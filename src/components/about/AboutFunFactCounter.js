import React from "react";
import FunFactCouter from "../global/FunFactCouter";

function AboutFunFactCounter() {
  return (
    <div>
      <FunFactCouter
        heading={"Our Fun Facts"}
        counter1={80}
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
    </div>
  );
}

export default AboutFunFactCounter;
