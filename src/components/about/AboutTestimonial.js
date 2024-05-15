import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/about/testimonial/testimonial-1.jpg";
import img2 from "../../assets/images/about/testimonial/testimonial-2.jpg";
import img3 from "../../assets/images/about/testimonial/testimonial-3.jpg";
import img4 from "../../assets/images/about/testimonial/testimonial-4.jpg";
import img5 from "../../assets/images/about/testimonial/testimonial-5.jpg";
import img6 from "../../assets/images/about/testimonial/testimonial-6.jpg";
import img7 from "../../assets/images/about/testimonial/testimonial-7.jpg";
import Testimonial from "../global/Testimonial";

function AboutTestimonial() {
  const users = [
    {
      id: 1,
      name: "AKLIMA",
      imageSrc: img1,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 2,
      name: "FATIMA ASRAFY",
      imageSrc: img2,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 3,
      name: "JANNAT TUMPA",
      imageSrc: img3,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 4,
      name: "JOHNS DUE ",
      imageSrc: img4,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 5,
      name: "JOHN DOE",
      imageSrc: img5,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 6,
      name: "AMAR ORTHI",
      imageSrc: img6,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
      id: 7,
      name: "FATIMA MA ",
      imageSrc: img7,
      details: "COO, AMERIMAR ENTERPRISES, INC.",
      contain:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
  ];
  return (
    <>
      <Testimonial users={users} />
    </>
  );
}

export default AboutTestimonial;
